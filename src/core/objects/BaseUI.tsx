import * as React from "react";
import { Icon, SemanticICONS, StrictModalProps, Modal, Dimmer, Loader, Button } from "semantic-ui-react";
import MonacoEditor from "react-monaco-editor";
import { editor } from "monaco-editor/esm/vs/editor/editor.api";
import Box from "../Box";
import "./Default.scss";
import "./Base.scss";
import { AbstractObject, BaseObject, AnyObject, DefaultObject } from "./Base";
import { selectElementPos, selectElementRange } from "../../utils/utils";

export interface AbstractUIProps<T extends AbstractObject = AbstractObject> {
    object: T;
    editing: boolean;
    onEditEnd: () => any;
}
export interface AbstractUIState {
    width: number;
    height: number;
}
export abstract class AbstractUI<
        T extends AbstractObject = AbstractObject,
        P extends Partial<AbstractUIProps<T>> & { [key: string]: any } = {},
        S extends Partial<AbstractUIState> & { [key: string]: any } = {}
> extends React.PureComponent<AbstractUIProps<T> & P, S & AbstractUIState> {
    static sizing: "horizontal" | "vertical" | "both" | "ratio";
    static defaultSize: [number, number];
    /**
     * If set to true, call this.props.onEditEnd at some point
     *
     * @static
     * @type {boolean}
     * @memberof AbstractUI
     */
    static editableOnUnlock: boolean;
    state: S & AbstractUIState = {
        ...this.state,
        ...this.objectProps,
        width: this.box.width,
        height: this.box.height
    };
    get object(): T {
        return this.props.object;
    }
    get patcher() {
        return this.props.object.patcher;
    }
    get box(): Box<T> {
        return this.props.object.box;
    }
    get objectProps() {
        const props: Partial<S & BaseUIState> = {};
        for (const key in this.object.meta.props) {
            if (this.object.meta.props[key].isUIState) props[key as keyof (S & BaseUIState)] = (this.object as AnyObject).getProp(key);
        }
        return props as S & BaseUIState;
    }
    private _handleUIUpdate = (e: Pick<S & AbstractUIState, keyof (S & AbstractUIState)>) => this.setState(e);
    private _handleResized = () => {
        const { width, height } = this.box;
        if (width !== this.state.width || height !== this.state.height) this.setState({ width, height });
    }
    componentDidMount() {
        delete this.box._editing;
        this.object.on("uiUpdate", this._handleUIUpdate);
        this.box.on("rectChanged", this._handleResized);
        this.box.on("presentationRectChanged", this._handleResized);
        this.patcher.on("presentation", this._handleResized);
    }
    componentWillUnmount() {
        this.object.off("uiUpdate", this._handleUIUpdate);
        this.box.off("rectChanged", this._handleResized);
        this.box.off("presentationRectChanged", this._handleResized);
        this.patcher.off("presentation", this._handleResized);
    }
    render() {
        return <></>;
    }
}
export interface BaseUIProps extends AbstractUIProps {
    containerProps?: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>;
    additionalClassName?: string;
}
export interface BaseUIState extends AbstractUIState {
    hidden: boolean;
    ignoreClick: boolean;
    hint: string;
}
export class BaseUI<T extends BaseObject = AnyObject, P extends Partial<BaseUIProps> & { [key: string]: any } = {}, S extends Partial<BaseUIState> & { [key: string]: any } = {}> extends AbstractUI<T, P & BaseUIProps, S & BaseUIState> {
    state: S & BaseUIState = {
        ...this.state,
        background: this.box.background || false,
        presentation: this.box.presentation || false
    };
    static sizing: "horizontal" | "vertical" | "both" | "ratio" = "horizontal";
    static defaultSize: [number, number] = [90, 20];
    static editableOnUnlock = false;
    handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((this.props.object as T).patcher.state.locked) e.currentTarget.title = this.state.hint;
    }
    handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => e.currentTarget.title = "";
    render() {
        const { object } = this;
        const packageName = "package-" + object.meta.package.toLowerCase();
        const className = packageName + "-" + object.meta.name.toLowerCase();
        const classArray = [packageName, className, "box-ui-container", this.props.additionalClassName];
        if (this.state.hidden) classArray.push("hidden");
        if (this.state.ignoreClick) classArray.push("ignore-click");
        return (
            <div className={classArray.join(" ")} {...this.props.containerProps} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                {this.props.children}
            </div>
        );
    }
}
export interface DefaultUIProps extends BaseUIProps {
    textContainerProps?: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>;
    prependProps?: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>;
    spanProps?: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>;
    appendProps?: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>;
}
export interface DefaultUIState extends BaseUIState {
    bgColor: string;
    borderColor: string;
    textColor: string;
    fontFamily: string;
    fontSize: number;
    fontStyle: "normal" | "italic" | "oblique";
    fontWeight: "normal" | "bold" | "lighter" | "bolder" | number;
    textAlign: "center" | "left" | "right";
    text: string;
    loading: boolean;
    dropdown$: number;
}
export class DefaultUI<T extends DefaultObject = DefaultObject, P extends Partial<DefaultUIProps> & { [key: string]: any } = {}, S extends Partial<DefaultUIState> & { [key: string]: any } = {}> extends BaseUI<T, P & DefaultUIProps, S & DefaultUIState> {
    static editableOnUnlock = true;
    state: S & DefaultUIState = {
        ...this.state,
        text: this.box.text || "",
        loading: false,
        dropdown$: -1
    };
    refSpan = React.createRef<HTMLSpanElement>();
    refDropdown = React.createRef<HTMLTableSectionElement>();
    dropdownOptions: { key: string; value: string; text: string; icon: SemanticICONS; description: string }[] = [];
    componentDidMount() {
        super.componentDidMount();
        if (this.props.editing) this.toggleEdit(this.props.editing);
    }
    componentDidUpdate(prevProps: Readonly<P & DefaultUIProps>) {
        if (this.props.editing !== prevProps.editing) this.toggleEdit(this.props.editing);
    }
    toggleEdit(toggle: boolean) {
        const { patcher, box } = this;
        if (patcher.state.locked) return;
        if (!this.refSpan.current) return;
        const span = this.refSpan.current;
        if (toggle) {
            patcher.selectOnly(box.id);
            this.setState({ text: span.textContent }, () => {
                span.focus();
                selectElementRange(span);
            });
        } else {
            window.getSelection().removeAllRanges();
            patcher.changeBoxText(box.id, span.textContent);
            this.setState({ text: span.textContent });
        }
    }
    handleMouseDown = (e: React.MouseEvent) => (this.props.editing ? e.stopPropagation() : null);
    handleClick = (e: React.MouseEvent) => (this.props.editing ? e.stopPropagation() : null);
    handleKeyDown = (e: React.KeyboardEvent) => { // propagate for parent for focus on boxUI
        if (!this.props.editing) return;
        if (e.key === "Enter") {
            e.preventDefault();
            if (this.state.dropdown$ >= 0 && this.dropdownOptions[this.state.dropdown$] && this.refSpan.current) {
                this.refSpan.current.textContent = this.state.text.split(" ").slice(0, -1).concat(this.dropdownOptions[this.state.dropdown$].key).join(" ");
            }
            return;
        }
        if ((e.key === " " || e.key === "Tab") && this.refSpan.current) {
            if (this.state.dropdown$ >= 0 && this.dropdownOptions[this.state.dropdown$]) {
                const span = this.refSpan.current;
                const text = this.state.text.split(" ").slice(0, -1).concat(this.dropdownOptions[this.state.dropdown$].key).join(" ") + " ";
                span.textContent = text;
                selectElementPos(span, text.length);
                this.setState({ text, dropdown$: -1 });
            }
        }
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault();
            let dropdown$;
            if (e.key === "ArrowUp") dropdown$ = Math.max(-1, this.state.dropdown$ - 1);
            if (e.key === "ArrowDown") dropdown$ = Math.min(this.dropdownOptions.length - 1, this.state.dropdown$ + 1);
            this.setState({ dropdown$ });
            if (dropdown$ >= 0 && this.refDropdown.current && this.dropdownOptions[this.state.dropdown$]) {
                (this.refDropdown.current.children[dropdown$] as HTMLTableRowElement).scrollIntoView(false);
            }
        }
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    handleKeyUp = () => {
        if (!this.refSpan.current) return;
        if (this.refSpan.current.textContent === this.state.text) return;
        const { patcher } = this;
        this.dropdownOptions = [];
        const splitted = this.refSpan.current.textContent.split(" ");
        if (splitted.length === 1) {
            const keys = Object.keys(patcher.activeLib).sort();
            for (let i = 0; i < keys.length; i++) {
                if (this.dropdownOptions.length > 10) break;
                const key = keys[i];
                if (key.startsWith(splitted[splitted.length - 1])) {
                    const o = patcher.activeLib[key];
                    this.dropdownOptions.push({ key, value: key, text: key, icon: o.meta.icon, description: o.meta.description });
                }
            }
        } else if (splitted[0] === "new" && splitted.length === 2) {
            const keys = Object.keys(patcher.activeLib).sort();
            for (let i = 0; i < keys.length; i++) {
                if (this.dropdownOptions.length > 10) break;
                const key = keys[i];
                if (key.startsWith(splitted[splitted.length - 1])) {
                    const o = patcher.activeLib[key];
                    if (o.meta.description === "Auto-imported static method") {
                        this.dropdownOptions.push({ key, value: key, text: key, icon: o.meta.icon, description: o.meta.description });
                    }
                }
            }
        }
        this.setState({ text: this.refSpan.current.textContent });
    }
    handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        document.execCommand("insertHTML", false, e.clipboardData.getData("text/plain"));
    }
    handleMouseDownDropdown = (e: React.MouseEvent, key: string, i: number) => {
        e.preventDefault();
        if (i >= 0 && this.dropdownOptions[i] && this.refSpan.current) {
            const span = this.refSpan.current;
            const text = this.state.text.split(" ").slice(0, -1).concat(this.dropdownOptions[i].key).join(" ");
            span.textContent = text;
            selectElementPos(span, text.length);
            this.setState({ text, dropdown$: i });
        }
    }
    render() {
        const { object } = this;
        const textContainerStyle: React.CSSProperties = {
            borderColor: this.state.borderColor,
            backgroundColor: this.state.bgColor
        };
        const spanStyle: React.CSSProperties = {
            color: this.state.textColor,
            fontFamily: `${this.state.fontFamily}, Tahoma, sans-serif`,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            fontStyle: this.state.fontStyle,
            textAlign: this.state.textAlign
        };
        const textContainerProps = { ...this.props.textContainerProps };
        textContainerProps.style = { ...textContainerProps.style, ...textContainerStyle };
        const spanProps = { ...this.props.spanProps };
        spanProps.style = { ...spanProps.style, ...spanStyle };
        return (
            <BaseUI additionalClassName="box-ui-default" {...this.props}>
                <div className="box-ui-text-container" {...textContainerProps}>
                    <div className="box-ui-text-container-prepend" {...this.props.prependProps}>
                        {object.meta.icon ? <Icon inverted={true} loading={this.state.loading} size="small" name={this.state.loading ? "spinner" : object.meta.icon} /> : null}
                    </div>
                    <span contentEditable={this.props.editing} className={"editable" + (this.props.editing ? " editing" : "")} ref={this.refSpan} onMouseDown={this.handleMouseDown} onClick={this.handleClick} onPaste={this.handlePaste} onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} onBlur={this.props.onEditEnd} suppressContentEditableWarning={true} {...spanProps}>
                        {object.box.text}
                    </span>
                    {
                        this.props.editing && this.state.text.length
                            ? <div className="box-ui-text-dropdown">
                                <table className="ui small inverted selectable striped unstackable very compact table box-ui-text-autocomplete">
                                    <tbody ref={this.refDropdown}>
                                        {this.dropdownOptions.map((option, i) => (
                                            <tr key={option.key} className={i === this.state.dropdown$ ? "focused" : ""} onMouseDown={e => this.handleMouseDownDropdown(e, option.key, i)}>
                                                <td>{option.icon ? <Icon inverted={true} size="small" name={option.icon} /> : undefined}</td>
                                                <td>{option.key}</td>
                                                <td>{option.description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            : undefined
                    }
                    <div className="box-ui-text-container-append" {...this.props.appendProps}>
                    </div>
                </div>
            </BaseUI>
        );
    }
}
export interface CanvasUIProps extends BaseUIProps {
    canvasProps?: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.HTMLAttributes<HTMLCanvasElement>;
    onPaint?: <S extends CanvasUIState = CanvasUIState>(ctx: CanvasRenderingContext2D, state: S) => void;
}
export interface CanvasUIState extends BaseUIState {
    frameRate: number;
}
export class CanvasUI<T extends BaseObject = BaseObject, P extends Partial<CanvasUIProps> & { [key: string]: any } = {}, S extends Partial<CanvasUIState> & { [key: string]: any } = {}> extends BaseUI<T, P & CanvasUIProps, S & CanvasUIState> {
    static sizing: "horizontal" | "vertical" | "both" | "ratio" = "both";
    refCanvas = React.createRef<HTMLCanvasElement>();
    paintScheduled = false;
    $paintRaf = -1;
    get canvas() {
        return this.refCanvas.current;
    }
    get ctx() {
        return this.refCanvas.current ? this.refCanvas.current.getContext("2d") : null;
    }
    paintCallback = () => {
        this.$paintRaf = (-1 * Math.round(Math.abs(60 / this.state.frameRate))) || -1;
        this.paintScheduled = false;
        this.paint();
    }
    noPaintCallback = () => {
        this.$paintRaf++;
        this.paintScheduled = false;
        this.schedulePaint();
    }
    schedulePaint() {
        if (this.paintScheduled) return;
        if (this.$paintRaf === -1) this.$paintRaf = requestAnimationFrame(this.paintCallback);
        else if (this.$paintRaf < -1) requestAnimationFrame(this.noPaintCallback);
        this.paintScheduled = true;
    }
    componentDidMount() {
        super.componentDidMount();
        this.schedulePaint();
    }
    componentDidUpdate() { // But super.componentDidUpdate is not a function
        this.schedulePaint();
    }
    componentWillUnmount() {
        if (this.paintScheduled) cancelAnimationFrame(this.$paintRaf);
    }
    paint() {
        if (this.props.onPaint) this.props.onPaint(this.ctx, this.state);
    }
    render() {
        const canvasProps = { ...this.props.canvasProps };
        const defaultCanvasStyle: React.CSSProperties = { position: "absolute", display: "inline-block", width: "100%", height: "100%" };
        canvasProps.style = { ...defaultCanvasStyle, ...canvasProps.style };
        return (
            <BaseUI {...this.props}>
                <canvas
                    ref={this.refCanvas}
                    {...this.props.canvasProps}
                />
            </BaseUI>
        );
    }
}
export interface DefaultPopupUIProps extends DefaultUIProps {
    modalProps: StrictModalProps;
}
export interface DefaultPopupUIState extends DefaultUIState {
    modalOpen: boolean;
}
export class DefaultPopupUI<T extends DefaultObject = DefaultObject, P extends Partial<DefaultPopupUIProps> & { [key: string]: any } = {}, S extends Partial<DefaultPopupUIState> & { [key: string]: any } = {}> extends DefaultUI<T, P & DefaultPopupUIProps, S & DefaultPopupUIState> {
    state: S & DefaultPopupUIState = {
        ...this.state,
        modalOpen: false
    };
    handleDoubleClick = () => {
        if (this.patcher.state.locked) this.setState({ modalOpen: true });
    }
    handleClose = () => this.setState({ modalOpen: false });
    handleKeyDown = (e: React.KeyboardEvent) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    render() {
        const containerProps = { ...this.props.containerProps };
        if (!containerProps.onDoubleClick) containerProps.onDoubleClick = this.handleDoubleClick;
        const modalProps = { ...this.props.modalProps };
        if (typeof modalProps.open === "undefined") modalProps.open = this.state.modalOpen;
        if (!modalProps.onClose) modalProps.onClose = this.handleClose;
        return (
            <>
                <DefaultUI {...this.props} containerProps={containerProps} />
                <Modal onKeyDown={this.handleKeyDown} {...modalProps} />
            </>
        );
    }
}
export interface CodePopupUIState extends DefaultPopupUIState {
    editorLoaded: boolean;
}
export class CodePopupUI<T extends DefaultObject = DefaultObject, P extends Partial<DefaultPopupUIProps> & { [key: string]: any } = {}, S extends Partial<CodePopupUIState> & { [key: string]: any } = {}> extends DefaultPopupUI<T, P, S & CodePopupUIState> {
    state: S & CodePopupUIState = {
        ...this.state,
        editorLoaded: false
    }
    codeEditor: editor.IStandaloneCodeEditor;
    editorJSX: typeof MonacoEditor;
    editorLanguage = "javascript";
    get code() {
        return "";
    }
    handleSave = (code: string): any => undefined;
    handleCloseAndSave = () => {
        this.setState({ modalOpen: false });
        this.handleSave(this.codeEditor.getValue());
    }
    handleCodeEditorMount = (monaco: editor.IStandaloneCodeEditor) => this.codeEditor = monaco;
    handleResize = () => ((this.state.editorLoaded && this.codeEditor) ? this.codeEditor.layout() : undefined);
    async componentDidMount() {
        super.componentDidMount();
        window.addEventListener("resize", this.handleResize);
        const reactMonacoEditor = await import("react-monaco-editor");
        this.editorJSX = reactMonacoEditor.default;
        this.setState({ editorLoaded: true });
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        window.removeEventListener("resize", this.handleResize);
    }
    render() {
        const children = (
            <>
                <Modal.Content>
                    <div style={{ height: window.innerHeight * 0.8 }}>
                        {
                            this.state.editorLoaded
                                ? <this.editorJSX value={this.code} language={this.editorLanguage} theme="vs-dark" editorDidMount={this.handleCodeEditorMount} options={{ fontSize: 12 }} />
                                : <Dimmer active><Loader content="Loading" /></Dimmer>
                        }
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color="red" onClick={this.handleClose} inverted>
                        <Icon name="remove" /> Cancel
                    </Button>
                    <Button color="green" onClick={this.handleCloseAndSave} inverted>
                        <Icon name="checkmark" /> OK
                    </Button>
                </Modal.Actions>
            </>
        );
        const containerProps = { ...this.props.containerProps };
        if (!containerProps.onDoubleClick) containerProps.onDoubleClick = this.handleDoubleClick;
        const modalProps: StrictModalProps = { ...this.props.modalProps, children, open: this.state.modalOpen, onClose: this.handleClose, basic: true, size: "fullscreen" };
        return <DefaultPopupUI {...this.props} modalProps={modalProps} containerProps={containerProps} />;
    }
}
