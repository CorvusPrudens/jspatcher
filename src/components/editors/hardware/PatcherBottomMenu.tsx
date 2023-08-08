import * as React from "react";
import { Menu, Icon } from "semantic-ui-react";
import type PatcherEditor from "../../../core/patcher/PatcherEditor";
import type Env from "../../../core/Env";
import "./PatcherBottomMenu.scss";

interface P {
    editor: PatcherEditor;
    env: Env;
}

interface S {
    locked: boolean;
    presentation: boolean;
    showGrid: boolean;
}

export default class PatcherBottomMenu extends React.PureComponent<P, S> {
    state = {
        locked: this.props.editor.state.locked,
        presentation: this.props.editor.state.presentation,
        showGrid: this.props.editor.state.showGrid
    };
    // handleKeyDown = (e: KeyboardEvent) => {
    //     const ctrlKey = this.props.env.os === "MacOS" ? e.metaKey : e.ctrlKey;
    //     if (ctrlKey && e.key === "e" && this.props.editor.isActive) {
    //         this.handleClickLock();
    //         e.stopPropagation();
    //         e.preventDefault();
    //     }
    // };
    handleReady = () => {
        this.setState({
            locked: this.props.editor.state.locked,
            presentation: this.props.editor.state.presentation,
            showGrid: this.props.editor.state.showGrid
        });
    };
    componentDidMount() {
        this.props.editor.on("ready", this.handleReady);
        this.props.editor.on("locked", this.handleLockedChange);
        this.props.editor.on("presentation", this.handlePresentationChange);
        this.props.editor.on("showGrid", this.handleShowGridChange);
        // document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        this.props.editor.off("ready", this.handleReady);
        this.props.editor.off("locked", this.handleLockedChange);
        this.props.editor.off("presentation", this.handlePresentationChange);
        this.props.editor.off("showGrid", this.handleShowGridChange);
        // document.removeEventListener("keydown", this.handleKeyDown);
    }
    handleLockedChange = (locked: boolean) => this.setState({ locked });
    handleShowGridChange = (showGrid: boolean) => this.setState({ showGrid });
    handlePresentationChange = (presentation: boolean) => this.setState({ presentation });
    handleClickLock = () => this.props.editor.setState({ locked: !this.state.locked });
    handleClickGrid = () => this.props.editor.setState({ showGrid: !this.state.showGrid });
    handleClickPresentation = () => this.props.editor.setState({ presentation: !this.state.presentation });
    render() {
        return (
            <Menu inverted icon size="mini" className="patcher-bottom-menu">
                <Menu.Item name="lock" onClick={this.handleClickLock} title={this.state.locked ? "Unlock" : "Lock"}>
                    <Icon name={this.state.locked ? "lock" : "unlock"} color="grey" size="small" inverted />
                </Menu.Item>
                <Menu.Item name="presentation" onClick={this.handleClickPresentation} title="Switch Presentation Mode">
                    <Icon name="video" color={this.state.presentation ? "teal" : "grey"} size="small" inverted />
                </Menu.Item>
                <Menu.Item name="grid" onClick={this.handleClickGrid} title={this.state.showGrid ? "Hide Grid" : "Show Grid"}>
                    <Icon name="grid layout" color={this.state.showGrid ? "teal" : "grey"} size="small" inverted />
                </Menu.Item>
            </Menu>
        );
    }
}
