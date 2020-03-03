import * as React from "react";
import { StrictModalProps, Modal } from "semantic-ui-react";
import { DefaultObject, DefaultAudioObject } from "./Base";
import Patcher from "../Patcher";
import { TMeta, TMetaType, PatcherEventMap, TAudioNodeOutletConnection, TAudioNodeInletConnection, TPatcher } from "../types";
import { DefaultPopupUI, DefaultPopupUIState } from "./BaseUI";
import UI from "../../components/UI";
import "./SubPatcher.scss";
import FaustNode, { FaustNodeState } from "./faust/FaustNode";

export class In extends DefaultObject<{}, { index: number }, [], [any], [number], { description: string; type: Exclude<TMetaType, "signal" | "enum"> }> {
    static description = "Patcher inlet (data)";
    static args: TMeta["args"] = [{
        type: "number",
        optional: false,
        default: 1,
        description: "Inlet index (1-based)"
    }];
    static props: TMeta["props"] = {
        description: {
            type: "string",
            default: "",
            description: "Description text"
        },
        type: {
            type: "enum",
            enums: ["string", "number", "boolean", "object", "function", "anything", "bang", "color"],
            default: "anything",
            description: "Inlet data type"
        }
    };
    static outlets: TMeta["outlets"] = [{
        type: "anything",
        description: ""
    }];
    _meta: TMeta = In.meta;
    state = { index: undefined as number };
    get meta() {
        return this._meta;
    }
    set meta(metaIn: TMeta) {
        this._meta = metaIn;
        this.emit("metaChanged", this._meta);
        this.patcher.changeIO();
    }
    handlePatcherInlet = ({ data, inlet }: PatcherEventMap["inlet"]) => {
        if (inlet === this.state.index - 1) this.outlet(0, data);
    };
    subscribe() {
        super.subscribe();
        this.on("preInit", () => {
            this.inlets = 0;
            this.outlets = 1;
        });
        this.on("postInit", () => this.patcher.changeIO());
        this.on("updateArgs", (args) => {
            const $ = Math.max(1, ~~args[0]);
            if ($ !== this.state.index) {
                this.state.index = $;
                this.box.args[0] = $;
                this.patcher.changeIO();
            }
        });
        this.on("updateProps", (props) => {
            if (typeof props.description === "string") this._meta.outlets[0].description = props.description;
            if (typeof props.type === "string") this._meta.outlets[0].type = props.type || "anything";
            this.meta = this._meta;
        });
        this.patcher.on("inlet", this.handlePatcherInlet);
        this.on("destroy", () => {
            this.patcher.off("inlet", this.handlePatcherInlet);
            this.patcher.changeIO();
        });
    }
}

export class Out extends DefaultObject<{}, { index: number }, [any], [], [number], { description: string; type: Exclude<TMetaType, "signal" | "enum"> }> {
    static description = "Patcher outlet (data)";
    static args: TMeta["args"] = [{
        type: "number",
        optional: false,
        default: 1,
        description: "Outlet index (1-based)"
    }];
    static props: TMeta["props"] = {
        description: {
            type: "string",
            default: "",
            description: "Description text"
        },
        type: {
            type: "enum",
            enums: ["string", "number", "boolean", "object", "function", "anything", "bang", "color"],
            default: "anything",
            description: "Outlet data type"
        }
    };
    static inlets: TMeta["inlets"] = [{
        type: "anything",
        description: "",
        isHot: true
    }];
    _meta: TMeta = Out.meta;
    state = { index: undefined as number };
    get meta() {
        return this._meta;
    }
    set meta(metaIn: TMeta) {
        this._meta = metaIn;
        this.emit("metaChanged", this._meta);
        this.patcher.changeIO();
    }
    subscribe() {
        super.subscribe();
        this.on("preInit", () => {
            this.inlets = 1;
            this.outlets = 0;
        });
        this.on("postInit", () => this.patcher.changeIO());
        this.on("updateArgs", (args) => {
            const $ = Math.max(1, ~~args[0]);
            if ($ !== this.state.index) {
                this.state.index = $;
                this.box.args[0] = $;
                this.patcher.changeIO();
            }
        });
        this.on("updateProps", (props) => {
            if (typeof props.description === "string") this._meta.inlets[0].description = props.description;
            if (typeof props.type === "string") this._meta.inlets[0].type = props.type || "anything";
            this.meta = this._meta;
        });
        this.on("inlet", ({ data, inlet }) => {
            if (inlet === 0) this.patcher.outlet(this.state.index - 1, data);
        });
        this.on("destroy", () => {
            this.patcher.changeIO();
        });
    }
}

export class AudioIn extends DefaultAudioObject<{}, { index: number }, [], [any], [number], { description: string }> {
    static description = "Patcher inlet (audio)";
    static args: TMeta["args"] = [{
        type: "number",
        optional: false,
        default: 1,
        description: "Inlet index (1-based)"
    }];
    static props: TMeta["props"] = {
        description: {
            type: "string",
            default: "",
            description: "Description text"
        }
    };
    static outlets: TMeta["outlets"] = [{
        type: "signal",
        description: ""
    }];
    outletConnections: TAudioNodeOutletConnection[] = [{ node: undefined as GainNode, index: 0 }];
    _meta: TMeta = AudioIn.meta;
    _duringInit = true;
    state = { index: undefined as number };
    get meta() {
        return this._meta;
    }
    set meta(metaIn: TMeta) {
        this._meta = metaIn;
        this.emit("metaChanged", this._meta);
        this.patcher.changeIO();
    }
    subscribe() {
        super.subscribe();
        this.on("preInit", () => {
            this.inlets = 0;
            this.outlets = 1;
        });
        this.on("postInit", () => {
            this._duringInit = false;
            this.connectAudio();
            this.patcher.changeIO();
            this.patcher.connectAudioInlet(this.state.index - 1);
            this.patcher.inspectAudioIO();
        });
        this.on("updateArgs", (args) => {
            const $ = Math.max(1, ~~args[0]);
            if ($ !== this.state.index) {
                this.patcher.disconnectAudioInlet(this.state.index);
                this.disconnectAudio();
                this.state.index = $;
                this.box.args[0] = $;
                if (!this.patcher.inletAudioConnections[$ - 1]) {
                    const node = this.audioCtx.createGain();
                    node.channelInterpretation = "discrete";
                    this.patcher.inletAudioConnections[$ - 1] = { node, index: 0 };
                }
                const { node } = this.patcher.inletAudioConnections[$ - 1];
                this.outletConnections[0].node = node;
                if (!this._duringInit) {
                    this.connectAudio();
                    this.patcher.changeIO();
                    this.patcher.connectAudioInlet($ - 1);
                    this.patcher.inspectAudioIO();
                }
            }
        });
        this.on("updateProps", (props) => {
            if (typeof props.description === "string") this._meta.outlets[0].description = props.description;
            this.meta = this._meta;
        });
        this.on("destroy", () => {
            this.patcher.inspectAudioIO();
            this.patcher.changeIO();
        });
    }
}

export class AudioOut extends DefaultAudioObject<{}, { index: number }, [any], [], [number], { description: string }> {
    static description = "Patcher outlet (audio)";
    static args: TMeta["args"] = [{
        type: "number",
        optional: false,
        default: 1,
        description: "Outlet index (1-based)"
    }];
    static props: TMeta["props"] = {
        description: {
            type: "string",
            default: "",
            description: "Description text"
        }
    };
    static inlets: TMeta["inlets"] = [{
        type: "signal",
        description: "",
        isHot: true
    }];
    inletConnections: TAudioNodeInletConnection[] = [{ node: undefined as GainNode, index: 0 }];
    _meta: TMeta = AudioOut.meta;
    _duringInit = true;
    state = { index: undefined as number };
    get meta() {
        return this._meta;
    }
    set meta(metaIn: TMeta) {
        this._meta = metaIn;
        this.emit("metaChanged", this._meta);
        this.patcher.changeIO();
    }
    subscribe() {
        super.subscribe();
        this.on("preInit", () => {
            this.inlets = 1;
            this.outlets = 0;
        });
        this.on("postInit", () => {
            this._duringInit = false;
            this.connectAudio();
            this.patcher.changeIO();
            this.patcher.connectAudioInlet(this.state.index - 1);
            this.patcher.inspectAudioIO();
        });
        this.on("updateArgs", (args) => {
            const $ = Math.max(1, ~~args[0]);
            if ($ !== this.state.index) {
                this.patcher.disconnectAudioOutlet(this.state.index);
                this.disconnectAudio();
                this.state.index = $;
                this.box.args[0] = $;
                if (!this.patcher.outletAudioConnections[$ - 1]) {
                    const node = this.audioCtx.createGain();
                    node.channelInterpretation = "discrete";
                    this.patcher.outletAudioConnections[$ - 1] = { node, index: 0 };
                }
                const { node } = this.patcher.outletAudioConnections[$ - 1];
                this.inletConnections[0].node = node;
                if (!this._duringInit) {
                    this.connectAudio();
                    this.patcher.changeIO();
                    this.patcher.connectAudioOutlet($ - 1);
                    this.patcher.inspectAudioIO();
                }
            }
        });
        this.on("updateProps", (props) => {
            if (typeof props.description === "string") this._meta.outlets[0].description = props.description;
            this.meta = this._meta;
        });
        this.on("destroy", () => {
            this.patcher.inspectAudioIO();
            this.patcher.changeIO();
        });
    }
}

export class SubPatcherUI extends DefaultPopupUI<patcher, {}, { patcher: Patcher }> {
    state: { patcher: Patcher } & DefaultPopupUIState = {
        ...this.state,
        patcher: this.object.state.patcher
    };
    static dockable = true;
    render() {
        const children = (
            <>
                <Modal.Content style={{ height: "100%", width: "100%" }}>
                    <div style={{ height: "100%", width: "100%", display: "flex" }}>
                        <UI patcher={this.state.patcher} />
                    </div>
                </Modal.Content>
            </>
        );
        if (this.props.inDock) return children;
        const containerProps = { ...this.props.containerProps };
        if (!containerProps.onDoubleClick) containerProps.onDoubleClick = this.handleDoubleClick;
        const modalProps: StrictModalProps & { onKeyDown: any } = { ...this.props.modalProps, children, className: "subpatcher", open: this.state.modalOpen, onClose: this.handleClose, onKeyDown: undefined, basic: true, size: "fullscreen", closeIcon: true };
        return <DefaultPopupUI {...this.props} modalProps={modalProps} containerProps={containerProps} />;
    }
}
interface SubPatcherState {
    patcher: Patcher;
    key: string;
}
export class patcher extends DefaultAudioObject<Partial<TPatcher>, SubPatcherState, any[], any[], [string], {}, { patcher: Patcher }> {
    static description = "Sub-patcher";
    static args: TMeta["args"] = [{
        type: "string",
        optional: true,
        default: "",
        description: "Name of the subpatcher"
    }];
    state: SubPatcherState = { patcher: new Patcher(this.patcher.env), key: "" };
    _meta: TMeta = patcher.meta;
    get meta() {
        return this._meta;
    }
    set meta(metaIn: TMeta) {
        this._meta = metaIn;
        this.emit("metaChanged", this._meta);
    }
    static ui = SubPatcherUI;
    subscribe() {
        super.subscribe();
        const handlePatcherOutlet = ({ outlet, data }: PatcherEventMap["outlet"]) => this.outlet(outlet, data);
        const handlePatcherDisconnectAudioInlet = (port: number) => this.disconnectAudioInlet(port);
        const handlePatcherDisconnectAudioOutlet = (port: number) => this.disconnectAudioOutlet(port);
        const handlePatcherConnectAudioInlet = (port: number) => this.connectAudioInlet(port);
        const handlePatcherConnectAudioOutlet = (port: number) => this.connectAudioOutlet(port);
        const handlePatcherIOChanged = (meta: TMeta) => {
            this.inletConnections = this.state.patcher.inletAudioConnections.slice();
            this.outletConnections = this.state.patcher.outletAudioConnections.slice();
            this.inlets = meta.inlets.length;
            this.outlets = meta.outlets.length;
            const { inlets, outlets } = meta;
            this.meta = { ...this._meta, inlets, outlets, args: patcher.args };
        };
        const handlePatcherGraphChanged = (passive?: boolean) => {
            if (!passive && this.state.key) this.sharedData.set("patcher", this.state.key, this.state.patcher.toSerializable(), this);
            this.patcher.emit("graphChanged");
        };
        const subscribePatcher = () => {
            if (this.state.key) this.sharedData.subscribe("patcher", this.state.key, this);
            const { patcher } = this.state;
            patcher.on("outlet", handlePatcherOutlet);
            patcher.on("disconnectAudioInlet", handlePatcherDisconnectAudioInlet);
            patcher.on("disconnectAudioOutlet", handlePatcherDisconnectAudioOutlet);
            patcher.on("connectAudioInlet", handlePatcherConnectAudioInlet);
            patcher.on("connectAudioOutlet", handlePatcherConnectAudioOutlet);
            patcher.on("ioChanged", handlePatcherIOChanged);
            patcher.on("graphChanged", handlePatcherGraphChanged);
        };
        const unsubscribePatcher = async () => {
            if (this.state.key) this.sharedData.unsubscribe("patcher", this.state.key, this);
            const { patcher } = this.state;
            patcher.off("outlet", handlePatcherOutlet);
            patcher.off("disconnectAudioInlet", handlePatcherDisconnectAudioInlet);
            patcher.off("disconnectAudioOutlet", handlePatcherDisconnectAudioOutlet);
            patcher.off("connectAudioInlet", handlePatcherConnectAudioInlet);
            patcher.off("connectAudioOutlet", handlePatcherConnectAudioOutlet);
            patcher.off("ioChanged", handlePatcherIOChanged);
            patcher.off("graphChanged", handlePatcherGraphChanged);
            await patcher.clear();
        };
        const handlePatcherReset = () => {
            handlePatcherIOChanged(this.state.patcher.meta);
            this.updateUI({ patcher: this.state.patcher });
        };
        const reload = async () => {
            this.disconnectAudio();
            await unsubscribePatcher();
            const { args } = this.box;
            if (typeof args[0] === "string" || typeof args[0] === "undefined") this.state.key = args[0];
            const { key } = this.state;
            if (typeof key === "string") {
                this.data = {};
                const shared: TPatcher = this.sharedData.get("patcher", key);
                if (shared) await this.state.patcher.load(shared, "js");
                else this.sharedData.set("patcher", key, this.state.patcher.toSerializable(), this);
            } else {
                const { data } = this;
                await this.state.patcher.load(data, "js");
                this.data = this.state.patcher;
            }
            handlePatcherReset();
            subscribePatcher();
            handlePatcherGraphChanged(true);
            this.connectAudio();
        };
        this.on("preInit", async () => {
            await this.state.patcher.load({}, "js");
        });
        this.on("updateArgs", async (args) => {
            if (typeof args[0] === "string" || typeof args[0] === "undefined") {
                const newKey = args[0] || "";
                if (newKey !== this.state.key) {
                    await reload();
                }
            }
        });
        this.on("postInit", async () => {
            if (!this.state.key) {
                const { data } = this;
                await this.state.patcher.load(data, "js");
                this.data = this.state.patcher;
                handlePatcherReset();
                subscribePatcher();
                this.connectAudio();
            }
        });
        this.on("inlet", ({ data, inlet }) => this.state.patcher.fn(data, inlet));
        this.on("sharedDataUpdated", reload);
        this.on("destroy", unsubscribePatcher);
    }
}
interface FaustPatcherState extends FaustNodeState, SubPatcherState {}
export class faustPatcher extends FaustNode<Partial<TPatcher>, FaustPatcherState, [string, number], { patcher: Patcher }> {
    static description = "Faust Sub-patcher, compiled to AudioNode";
    static args: TMeta["args"] = [{
        type: "string",
        optional: true,
        default: "",
        description: "Name of the subpatcher"
    }, {
        type: "number",
        optional: true,
        default: 0,
        description: "Polyphonic instrument voices count"
    }];
    static ui = SubPatcherUI;
    state = { merger: undefined, splitter: undefined, node: undefined, voices: 0, patcher: new Patcher(this.patcher.env), key: "" } as FaustPatcherState;
    _meta: TMeta = faustPatcher.meta;
    subscribePatcher = () => {
        if (this.state.key) this.sharedData.subscribe("patcher", this.state.key, this);
        const { patcher } = this.state;
        patcher.on("graphChanged", this.handleGraphChanged);
    };
    unsubscribePatcher = async () => {
        if (this.state.key) this.sharedData.unsubscribe("patcher", this.state.key, this);
        const { patcher } = this.state;
        patcher.off("graphChanged", this.handleGraphChanged);
        await patcher.clear();
    };
    handlePatcherReset = () => {
        this.updateUI({ patcher: this.state.patcher });
    };
    handleGraphChanged = async (passive?: boolean) => {
        if (!passive && this.state.key) this.sharedData.set("patcher", this.state.key, this.state.patcher.toSerializable(), this);
        const code = this.state.patcher.toFaustDspCode();
        if (code) await this.newNode(code, this.state.voices);
        this.patcher.emit("graphChanged");
    };
    reload = async () => {
        this.disconnectAudio();
        await this.unsubscribePatcher();
        const { args } = this.box;
        if (typeof args[0] === "string" || typeof args[0] === "undefined") this.state.key = args[0];
        const { key } = this.state;
        if (typeof key === "string") {
            this.data = {};
            const shared: TPatcher = this.sharedData.get("patcher", key);
            if (shared) await this.state.patcher.load(shared, "faust");
            else this.sharedData.set("patcher", key, this.state.patcher.toSerializable(), this);
        } else {
            const { data } = this;
            await this.state.patcher.load(data, "faust");
            this.data = this.state.patcher;
        }
        this.handlePatcherReset();
        this.subscribePatcher();
        await this.handleGraphChanged(true);
        this.connectAudio();
    };
    handlePreInit = async () => {
        await this.state.patcher.load({}, "faust");
    };
    handleUpdateArgs = async (args: Partial<[string, number]>): Promise<void> => {
        if (typeof args[1] === "number") this.state.voices = ~~Math.max(0, args[1]);
        if (typeof args[0] === "string" || typeof args[0] === "undefined") {
            const newKey = args[0] || "";
            if (newKey !== this.state.key) {
                await this.reload();
            }
        }
    };
    handlePostInit = async () => {
        if (!this.state.key) {
            const { data } = this;
            await this.state.patcher.load(data, "faust");
            this.data = this.state.patcher;
            this.handlePatcherReset();
            this.subscribePatcher();
            await this.handleGraphChanged();
            this.connectAudio();
        }
    };
    subscribe() {
        super.subscribe();
        this.on("sharedDataUpdated", this.reload);
        this.on("destroy", this.unsubscribePatcher);
    }
}

export default {
    in: In,
    out: Out,
    "in~": AudioIn,
    "out~": AudioOut,
    patcher,
    p: patcher,
    faustPatcher,
    pfaust: faustPatcher
};
