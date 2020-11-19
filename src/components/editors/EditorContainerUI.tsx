import * as React from "react";
import EditorContainer, { EditorContainerEventMap, EditorContainerState } from "../../core/EditorContainer";
import Env from "../../core/Env";
import { AnyFileInstance } from "../../core/file/FileInstance";
import Patcher from "../../core/patcher/Patcher";
import PatcherEditorUI from "./PatcherEditorUI";
import "./EditorContainerUI.scss";
import { EditorContainerTabUI } from "./EditorContainerTabUI";

interface P {
    env: Env;
    editorContainer: EditorContainer;
    lang: string;
}

interface S extends EditorContainerState {
}

export default class EditorContainerUI extends React.PureComponent<P, S> {
    state: S = {
        instances: this.props.editorContainer.instances,
        children: this.props.editorContainer.children,
        mode: this.props.editorContainer.mode,
        activeInstance: this.props.editorContainer.activeInstance
    };
    handleCloseTab = async (instance: AnyFileInstance) => {
        await instance.destroy();
    };
    handleActiveTab = async (instance: AnyFileInstance) => {
        this.setState({ activeInstance: instance });
        this.props.env.activeInstance = instance;
    };
    handleState = (state: EditorContainerEventMap["state"]) => {
        this.setState(state);
    };
    componentDidMount() {
        this.props.editorContainer.on("state", this.handleState);
    }
    componentWillUnmount() {
        this.props.editorContainer.off("state", this.handleState);
    }
    render() {
        return (
            <div className="editor-container ui-flex-column ui-flex-full">
                <div className="editor-container-tabs-container">
                    <div className="editor-container-tabs">
                        {this.state.instances.map(instance => <EditorContainerTabUI key={instance.instancId} instance={instance} active={this.state.activeInstance === instance} onActive={this.handleActiveTab} onClose={this.handleCloseTab} lang={this.props.lang} />)}
                    </div>
                </div>
                <div className="editor-container-body ui-flex-column ui-flex-full">
                    {this.state.instances.length
                        ? this.state.instances.map((instance) => {
                            if (instance instanceof Patcher) {
                                return <div className="editor-container-instance-body ui-flex-column ui-flex-full" hidden={instance !== this.state.activeInstance} key={instance.instancId}>
                                    <PatcherEditorUI {...this.props} patcher={instance} />
                                </div>;
                            }
                            return undefined;
                        })
                        : <div className="empty"><span>Double-click to open a file or use File &gt; New to create a File</span></div>
                    }
                </div>
            </div>
        );
    }
}
