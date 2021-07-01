import type { SemanticICONS } from "semantic-ui-react";
import FileEditor from "../file/FileEditor";
import History from "../file/History";
import type PersistentProjectFile from "../file/PersistentProjectFile";
import type { IJSPatcherEnv } from "../Env";
import type { IProject } from "../Project";
import type PatcherImage from "./PatcherImage";

export interface ImageEditorEventMap {}

export default class ImageEditor extends FileEditor<PatcherImage, ImageEditorEventMap> {
    static async fromProjectItem(fileIn: PersistentProjectFile, envIn: IJSPatcherEnv, projectIn?: IProject) {
        const image = await fileIn.instantiate(envIn, projectIn) as PatcherImage;
        const editor = new this(image);
        return editor.init();
    }
    readonly _history: History = new History(this);
    get fileExtension() {
        return "png";
    }
    get fileIcon(): SemanticICONS {
        return "picture";
    }
    get history() {
        return this._history;
    }
    async init() {
        if (!this.instance.isReady) {
            await new Promise<void>((resolve, reject) => {
                const handleReady = () => {
                    resolve();
                    this.instance.off("ready", handleReady);
                };
                this.instance.on("ready", handleReady);
            });
        }
        this._isReady = true;
        this.emit("ready");
        return this;
    }
    async undo() {}
    async redo() {}
    async copy() {}
    async cut() {}
    async paste() {}
    async deleteSelected() {}
    async selectAll() {}
    onUiResized() {}
}
