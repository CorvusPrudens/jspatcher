import { getTimestamp } from "../utils/utils";
import LiveShareClient, { LiveShareProject, RoomInfo } from "./LiveShareClient";
import Patcher from "./patcher/Patcher";
import TypedEventEmitter from "../utils/TypedEventEmitter";
import type Env from "./Env";
import type { IFileInstance } from "./file/FileInstance";
import type { WebSocketLog } from "./websocket/ProxyClient.types";
import type PatcherHistory from "./patcher/PatcherHistory";
import type { IHistoryEvent } from "./file/History";

export interface ILiveShareState {
    socketState: LiveShareClient["socketState"];
    ping: number;
    roomInfo: RoomInfo;
    clientId: string;
}

export interface LiveShareEventMap {
    "state": ILiveShareState;
}

export default class LiveShare extends TypedEventEmitter<LiveShareEventMap> {
    state: ILiveShareState = {
        socketState: "closed",
        ping: -1,
        roomInfo: null,
        clientId: null
    };
    readonly env: Env;
    readonly client = new LiveShareClient();
    instances = new Set<IFileInstance>();
    pingScheduled = false;
    $ping = -1;
    setState(state: Partial<ILiveShareState>) {
        this.state = { ...this.state, ...state };
        this.emit("state", this.state);
    }
    pingCallback = async () => {
        this.pingScheduled = false;
        this.$ping = -1;
        if (this.state.socketState !== "open") return;
        const t0 = getTimestamp();
        try {
            await this.client.pingServer(t0);
            const t1 = getTimestamp();
            this.setState({ ping: t1 - t0 });
            const pings = await this.client.reportPing(this.state.ping);
            const { roomInfo } = this.state;
            if (roomInfo) {
                for (const roomClientInfo of roomInfo.clients) {
                    const ping = pings[roomClientInfo.clientId];
                    if (ping) roomClientInfo.ping = ping;
                }
                this.setState({ roomInfo });
            }
            this.schedulePing();
        } catch (error) {
            await this.logout();
        }
    };
    schedulePing = (timeout = 5000) => {
        if (this.pingScheduled) return;
        if (this.state.socketState !== "open") return;
        this.pingScheduled = true;
        this.$ping = window.setTimeout(this.pingCallback, timeout);
    };
    get logged() {
        return !!this.state.clientId;
    }
    get isOwner() {
        return !!this.state.roomInfo?.userIsOwner;
    }
    constructor(env: Env) {
        super();
        this.env = env;
        this.client.on("socketState", (socketState) => {
            const oldSocketState = this.state.socketState;
            this.setState({ socketState, clientId: socketState === "open" ? this.state.clientId : null });
            if (socketState === "open" && oldSocketState !== "open") this.schedulePing(0);
        });
        this.client.on("roomClosedByOwner", (roomId) => {
            if (this.state.roomInfo?.roomId === roomId) {
                this.setState({ roomInfo: null });
            }
        });
        this.client.on("roomStateChanged", (roomInfo: RoomInfo) => {
            if (roomInfo) {
                this.setState({ roomInfo });
            }
        });
        this.client.on("changesFrom", ({ events }) => this.handleReceivedChangeEvent(events));
        this.client._handleLog = (log: WebSocketLog) => {
            this.env.newLog(log.error ? "error" : "none", this.constructor.name, log.msg, this);
        };
        this.env.on("instances", (instances) => {
            const oncePatcherReady = async (e: any, i: Patcher) => {
                if (!this.state.roomInfo) return;
                i.history.on("change", this.handlePatcherChange);
                i.once("destroy", () => i.history.off("change", this.handlePatcherChange));
            };
            for (const i of this.instances) {
                if (instances.indexOf(i) === -1) {
                    i.off("ready", oncePatcherReady);
                    this.instances.delete(i);
                }
            }
            for (const i of instances) {
                this.instances.add(i);
                if (i instanceof Patcher) {
                    if (i.isReady) oncePatcherReady(null, i);
                    else i.once("ready", oncePatcherReady);
                }
            }
        });
    }
    handleReceivedChangeEvent = async (events: IHistoryEvent[]) => {
        for (let i = 0; i < events.length; i++) {
            const event = events[i];
            let instance = Array.from(this.env.instances).find(i => i.file?.id === event.fileId);
            if (!instance) {
                const file = this.env.fileMgr.getProjectItemFromId(event.fileId);
                if (!file || file.isFolder === true) throw new Error(`No Such File ${event.fileId}`);
                const editor = await file.instantiateEditor({ env: this.env, project: this.env.currentProject });
                instance = editor.instance;
                this.env.openEditor(editor, true);
            }
            await instance.history.mergeChanges(event);
            await instance.history.firstEditor?.save();
        }
    };
    handlePatcherChange = async (changeEvent: IHistoryEvent, history: PatcherHistory) => {
        if (this.logged) {
            history.firstEditor?.save();
            const unmerged = await this.client.requestChanges(this.state.roomInfo.roomId, changeEvent);
            if (unmerged.length) await this.handleReceivedChangeEvent(unmerged);
        }
    };
    async login(serverUrl: string, nickname: string, username?: string, password?: string) {
        if (this.logged) {
            try {
                await this.logout();
            } catch (error) {
            }
        }
        this.client._serverUrl = serverUrl;
        try {
            await this.client._connect();
            const timestamp = getTimestamp();
            const clientId = await this.client.login(timestamp, nickname, username, password);
            this.setState({ clientId, roomInfo: null });
        } catch (error) {
            this.setState({ clientId: null, roomInfo: null });
            throw error;
        }
    }
    async join(roomId: string, password: string, username: string) {
        const timestamp = getTimestamp();
        const { roomInfo, project } = await this.client.joinRoom(roomId, username, password, timestamp);
        this.setState({ roomInfo });
        await this.env.newProject(project.props);
        await this.env.fileMgr.processBson(project.items);
        for (const key in project.history) {
            const history = project.history[key];
            await this.handleReceivedChangeEvent(history);
        }
    }
    async hostRoom(roomId: string, password: string, permission: "write" | "read") {
        const history: Record<string, IHistoryEvent[]> = {};
        this.instances.forEach((instance) => {
            if (instance.isInMemory) return;
            history[instance.file.id] = instance.history.changes;
        });
        const project: LiveShareProject = {
            props: this.env.currentProject.props,
            items: this.env.fileMgr.getDataForBson(),
            history
        };
        const { roomInfo } = await this.client.hostRoom(roomId, password, getTimestamp(), permission, project);
        this.setState({ roomInfo });
    }
    async leaveRoom() {
        const { roomId } = this.state.roomInfo;
        this.setState({ roomInfo: null });
        await this.client.leaveRoom(roomId);
    }
    async closeRoom() {
        const { roomId } = this.state.roomInfo;
        this.setState({ roomInfo: null });
        await this.client.closeRoom(roomId);
    }
    async logout() {
        if (!this.logged) return;
        try {
            await this.client.logout();
            await this.client._disconnect();
        } finally {
            this.setState({ clientId: null, roomInfo: null });
        }
    }
}
