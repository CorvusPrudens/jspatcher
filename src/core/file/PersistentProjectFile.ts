import AbstractProjectFile from "./AbstractProjectFile";
import type { IJSPatcherEnv } from "../Env";
import type { IProject } from "../Project";
import type { IFileEditor } from "./FileEditor";
import type { IFileInstance } from "./FileInstance";
import type { IProjectFolder } from "./AbstractProjectFolder";
import type PersistentProjectItemManager from "./PersistentProjectItemManager";
import Patcher from "../patcher/Patcher";
import PatcherAudio from "../audio/PatcherAudio";
import PatcherImage from "../image/PatcherImage";
import PatcherText from "../text/PatcherText";
import PatcherEditor from "../patcher/PatcherEditor";
import AudioEditor from "../audio/AudioEditor";
import ImageEditor from "../image/ImageEditor";
import TextEditor from "../text/TextEditor";

export default class PersistentProjectFile extends AbstractProjectFile<ArrayBuffer, PersistentProjectItemManager> {
    async init() {
        this._data = await this.fileMgr.readFile(this.path);
        await this.emit("ready");
    }
    clone(parentIn = this.parent, nameIn = this._name, dataIn = this._data) {
        const Ctor = this.constructor as typeof PersistentProjectFile;
        return new Ctor(this._fileMgr, parentIn, nameIn, dataIn);
    }
    async save(newData: ArrayBuffer, by: any) {
        this._data = newData;
        await this._fileMgr.putFile(this);
        await this.emit("saved", by);
    }
    async saveAsCopy(parent: IProjectFolder, name: string, newData: ArrayBuffer) {
        const item = this.clone(parent, name, newData);
        await this._fileMgr.putFile(item);
        parent.items.add(item);
        await this.emitTreeChanged();
        return item;
    }
    async saveAs(to: IProjectFolder, newName: string, newData: ArrayBuffer, by: any) {
        const { parent, name, data } = this;
        const from = parent;
        this._data = newData;
        await this.move(to, newName);
        await this._fileMgr.putFile(this);
        const item = this.clone(parent, name, data);
        await this._fileMgr.putFile(item);
        parent.items.add(item);
        await parent.emitTreeChanged();
        await this.emitTreeChanged();
        await this.emit("pathChanged", { from, to });
        await this.emit("saved", by);
        return item;
    }
    async rename(newNameIn: string) {
        const newName = newNameIn.trim();
        const oldName = this._name;
        if (newName === oldName) return;
        if (this.parent.existItem(newNameIn)) throw new Error(`${newName} already exists.`);
        await this.fileMgr.rename(this.path, `${this.parentPath}/${newNameIn}`);
        this._name = newName;
        await this.emitTreeChanged();
        await this.emit("nameChanged", { oldName, newName });
    }
    async move(to: IProjectFolder, newName = this.name) {
        if (to === this as any) return;
        if (to === this.parent && newName === this.name) return;
        if (to.existItem(newName)) throw new Error(`${newName} already exists in ${to.name}`);
        await this._fileMgr.rename(this.path, `${to.path}/${newName}`);
        const from = this.parent;
        from.items.delete(this as any);
        this.parent = to;
        const oldName = this._name;
        this._name = newName;
        this.parent.items.add(this as any);
        await from.emitTreeChanged();
        await this.emitTreeChanged();
        await this.emit("pathChanged", { from, to });
        if (oldName !== newName) await this.emit("nameChanged", { oldName, newName });
    }
    async destroy() {
        await this._fileMgr.remove(this.path, this.isFolder);
        this.parent.items.delete(this as any);
        await this.emitTreeChanged();
        await this.emit("destroyed");
    }
    async instantiate(envIn: IJSPatcherEnv, projectIn?: IProject): Promise<IFileInstance> {
        const { type } = this;
        const Constructor = {
            patcher: Patcher,
            audio: PatcherAudio,
            image: PatcherImage,
            text: PatcherText,
            video: undefined,
            unknown: undefined
        }[type];
        if (Constructor) return Constructor.fromProjectItem(this as any, envIn, projectIn) as Promise<IFileInstance>;
        throw new Error("Not implemented.");
    }
    async instantiateEditor(envIn: IJSPatcherEnv, projectIn?: IProject): Promise<IFileEditor> {
        const { type } = this;
        const Constructor = {
            patcher: PatcherEditor,
            audio: AudioEditor,
            image: ImageEditor,
            text: TextEditor,
            video: undefined,
            unknown: undefined
        }[type];
        if (Constructor) return Constructor.fromProjectItem(this as any, envIn, projectIn) as Promise<IFileEditor>;
        throw new Error("Not implemented.");
    }
}
