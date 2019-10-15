import { BaseObject } from "./objects/Base";
import Patcher from "./Patcher";
import Box from "./Box";
import Line from "./Line";
import History from "./History";

type TPatcherMode = "max" | "gen" | "faust" | "js";

type TPatcher = {
    lines: { [key: string]: TLine };
    boxes: { [key: string]: TBox };
    props?: {};
};

type TPatcherProps = {
    mode: TPatcherMode;
    bgcolor: [number, number, number, number];
    editing_bgcolor: [number, number, number, number];
    grid: [number, number];
    boxIndexCount: number;
    lineIndexCount: number;
};

type TPatcherState = {
    isLoading: boolean;
    locked: boolean;
    presentation: boolean;
    showGrid: boolean;
    snapToGrid: boolean;
    log: TPatcherLog[];
    history: History;
    lib: { [key: string]: typeof BaseObject };
    libJS: { [key: string]: typeof BaseObject };
    libMax: { [key: string]: typeof BaseObject };
    libGen: { [key: string]: typeof BaseObject };
    libFaust: { [key: string]: typeof BaseObject };
    selected: string[];
};

type TErrorLevel = "error" | "warn" | "info" | "none"

type TPatcherLog = {
    errorLevel: TErrorLevel;
    emitter?: any;
    title: string;
    message: string;
};

type TMaxPatcher = {
    patcher: {
        lines: TMaxLine[];
        boxes: TMaxBox[];
        rect: number[];
        bgcolor: [number, number, number, number];
        editing_bgcolor: [number, number, number, number];
        gridsize: [number, number];
        [key: string]: any;
    };
};
type TMaxBox = {
    box: {
        id: string;
        maxclass: "newobj" | string;
        text?: string;
        numinlets: number;
        numoutlets: number;
        patching_rect: [number, number, number, number];
        presentation_rect: [number, number, number, number];
        presentation: number;
    };
};

type TMaxLine = {
    patchline: {
        destination: [string, number];
        source: [string, number];
        order: number;
        midpoints: number[];
    };
};

type TMaxClipboard = {
    boxes: TMaxBox[];
    lines: TMaxLine[];
    appversion: {
        major: number;
        minor: number;
        revision: number;
        architecture: string;
        modernui: number;
    };
};
declare class AnyObject extends BaseObject<any, any, any> {}
type TPackage = { [key: string]: typeof AnyObject | TPackage };

type TLine = {
    id?: string;
    src: [string, number];
    dest: [string, number];
    disabled?: boolean;
};

type TBox = {
    id?: string;
    text: string;
    inlets: number;
    outlets: number;
    rect: [number, number, number, number];
    data?: { [key: string]: any };
    _editing?: boolean;
};

type TResizeHandlerType = "n" |"ne" |"e" | "se" | "w" | "sw" | "s" | "nw";

interface PatcherEventMap {
    "loaded": Patcher;
    "locked": boolean;
    "presentation": boolean;
    "showGrid": boolean;
    "create": TPatcher;
    "delete": TPatcher;
    "createBox": Box;
    "deleteBox": Box;
    "createObject": BaseObject;
    "changeBoxText": { box: Box; oldText: string; text: string };
    "createLine": Line;
    "deleteLine": Line;
    "redrawLine": Line;
    "changeLineSrc": { line: Line; oldSrc: [string, number]; src: [string, number] };
    "changeLineDest": { line: Line; oldDest: [string, number]; dest: [string, number] };
    "changeLine": { line: Line; isSrc: boolean; oldPort: [string, number]; port: [string, number] };
    "newLog": TPatcherLog;
    "selected": string;
    "deselected": string;
    "tempLine": { findSrc: boolean; from: [string, number] };
    "moved": { selected: string[]; delta: { x: number; y: number } };
    "resized": { selected: string[]; delta: { x: number; y: number }; type: TResizeHandlerType };
    "generateCode": string;
    "graphChanged": any;
}

interface LineEventMap {
    "passData": any;
    "destPosChanged": { top: number; left: number };
    "srcPosChanged": { top: number; left: number };
    "posChanged": Line;
}

interface BoxEventMap {
    "rectChanged": Box;
    "textChanged": Box;
    "highlightPort": { isSrc: boolean; i: number; highlight: boolean };
    "connectedPort": { isSrc: boolean; i: number };
    "disconnectedPort": { isSrc: boolean; i: number };
}
type BaseUIState = { editing: boolean };
type DefaultUIState = { text: string; loading: boolean; dropdown$: number } & BaseUIState;
interface BaseObjectEventMap<UIState> {
    "uiUpdate": Pick<UIState, keyof UIState> | UIState | null;
}
type THistoryElement = {
    [key in keyof PatcherEventMap]?: PatcherEventMap[key][];
};
