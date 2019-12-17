import { inspect } from "util";
import { EventEmitter } from "events";
import { TMIDIEvent, TBPF, TRect } from "./core/types";

export const isStringArray = (x: any): x is string[] => Array.isArray(x) && x.every(e => typeof e === "string");
export const isNumberArray = (x: any): x is number[] => Array.isArray(x) && x.every(e => typeof e === "number");
export const isTRect = (x: any): x is TRect => {
    if (!isNumberArray(x)) return false;
    if (x.length !== 4) return false;
    if (x[0] < 0) return false;
    if (x[1] < 0) return false;
    if (x[2] < 15) return false;
    if (x[3] < 15) return false;
    return true;
};
export const isMIDIEvent = (x: any): x is TMIDIEvent => (isNumberArray(x) || x instanceof Uint8Array) && x.length === 3;
export const stringifyError = (data: any) => {
    if (typeof data === "string") return data;
    if (data instanceof Error) return data.stack;
    if (typeof data === "object") return inspect(data);
    return `${data}`;
};
/**
 * A BPF can be described as a succesion of three number tuples.
 * i.e. `1 1000 0.5 2 1000 1` curve mode means go to 0 immediately then go to 1 in 1000ms with a curve of e^0.5, then go to 2 in 1000ms linear.
 * The function transform the string to number[][], i.e. `[[1, 1000, 0.5], [2, 1000, 1]]`
 *
 * @param {TBPF} sIn
 * @returns {number[][]}
 */
export const decodeBPF = (sIn: TBPF, tupleLength: number): number[][] => {
    if (typeof sIn === "number") return [[sIn]];
    if (isNumberArray(sIn)) return [sIn];
    if (Array.isArray(sIn) && sIn.every(a => isNumberArray(a))) return sIn;
    if (typeof sIn !== "string") throw new Error("Failed to decode curve.");
    const numbers = sIn.split(" ").filter(s => !!s).map(s => +s);
    if (numbers.find(v => !isFinite(v))) throw new Error("BPF contains invalid number.");
    const tuples: number[][] = [];
    for (let i = 0; i < numbers.length; i++) {
        const $tuple = ~~(i / tupleLength);
        const $ = i % tupleLength;
        if (!tuples[$tuple]) tuples[$tuple] = [];
        tuples[$tuple][$] = numbers[i];
    }
    return tuples;
};
export const decodeCurve = (sIn: TBPF) => decodeBPF(sIn, 3);
export const decodeLine = (sIn: TBPF) => decodeBPF(sIn, 2);

/**
 * Gives OS name as follows:
 * "Windows"    for all versions of Windows,
 * "MacOS"      for all versions of Macintosh OS,
 * "Linux"      for all versions of Linux,
 * "UNIX"       for all other UNIX flavors,
 * "Unknown" indicates failure to detect the OS
 *
 * @returns {"Windows" | "MacOS" | "UNIX" | "Linux" | "Unknown"} OS name
 */
export const detectOS = (): "Windows" | "MacOS" | "UNIX" | "Linux" | "Unknown" => {
    const { appVersion } = navigator;
    if (appVersion.indexOf("Win") !== -1) return "Windows";
    if (appVersion.indexOf("Mac") !== -1) return "MacOS";
    if (appVersion.indexOf("X11") !== -1) return "UNIX";
    if (appVersion.indexOf("Linux") !== -1) return "Linux";
    return "Unknown";
};
export class MappedEventEmitter<M> {
    private readonly _emitter = new EventEmitter();
    addListener<K extends keyof M>(event: K, listener: (e: M[K]) => void) {
        return this._emitter.addListener(event as string, listener);
    }
    on<K extends keyof M>(event: K, listener: (e: M[K]) => void) {
        return this._emitter.on(event as string, listener);
    }
    once<K extends keyof M>(event: K, listener: (e: M[K]) => void) {
        return this._emitter.once(event as string, listener);
    }
    prependListener<K extends keyof M>(event: K, listener: (e: M[K]) => void) {
        return this._emitter.prependListener(event as string, listener);
    }
    prependOnceListener<K extends keyof M>(event: K, listener: (e: M[K]) => void) {
        return this._emitter.prependOnceListener(event as string, listener);
    }
    removeListener<K extends keyof M>(event: K, listener: (e: M[K]) => void) {
        return this._emitter.removeListener(event as string, listener);
    }
    off<K extends keyof M>(event: K, listener: (e: M[K]) => void) {
        return this._emitter.off(event as string, listener);
    }
    removeAllListeners(event?: keyof M) {
        return this._emitter.removeAllListeners(event as string);
    }
    setMaxListeners(n: number) {
        return this._emitter.setMaxListeners(n);
    }
    getMaxListeners() {
        return this._emitter.getMaxListeners();
    }
    listeners(event: keyof M) {
        return this._emitter.listeners(event as string);
    }
    rawListeners(event: keyof M) {
        return this._emitter.rawListeners(event as string);
    }
    emit<K extends keyof M>(event: K, e?: M[K]) {
        return this._emitter.emit(event as string, e);
    }
    eventNames() {
        return this._emitter.eventNames();
    }
    listenerCount(type: keyof M) {
        return this._emitter.listenerCount(type as string);
    }
}
export const toMIDI = (f: number) => ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"][(f % 12 + 12) % 12] + Math.round(f / 12 - 2);
export const toRad = (degrees: number) => degrees * Math.PI / 180;
export const atodb = (a: number) => 20 * Math.log10(a);
export const dbtoa = (db: number) => 10 ** (db / 20);
export const iNormExp = (x: number, e: number) => Math.max(0, x) ** (1.5 ** -e);
export const normExp = (x: number, e: number) => Math.max(0, x) ** (1.5 ** e);
export const roundedRect = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number | number[]) => {
    const radii = [0, 0, 0, 0];
    if (typeof radius === "number") radii.fill(radius);
    else radius.forEach((v, i) => radii[i] = v);
    ctx.beginPath();
    ctx.moveTo(x + radii[0], y);
    ctx.lineTo(x + width - radii[1], y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radii[1]);
    ctx.lineTo(x + width, y + height - radii[2]);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radii[2], y + height);
    ctx.lineTo(x + radii[3], y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radii[3]);
    ctx.lineTo(x, y + radii[0]);
    ctx.quadraticCurveTo(x, y, x + radii[0], y);
    ctx.closePath();
    ctx.stroke();
};
export const fillRoundedRect = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number | number[]) => {
    const radii = [0, 0, 0, 0];
    if (typeof radius === "number") radii.fill(radius);
    else radius.forEach((v, i) => radii[i] = v);
    ctx.beginPath();
    ctx.moveTo(x + radii[0], y);
    ctx.lineTo(x + width - radii[1], y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radii[1]);
    ctx.lineTo(x + width, y + height - radii[2]);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radii[2], y + height);
    ctx.lineTo(x + radii[3], y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radii[3]);
    ctx.lineTo(x, y + radii[0]);
    ctx.quadraticCurveTo(x, y, x + radii[0], y);
    ctx.closePath();
    ctx.fill();
};
export const selectElementRange = (e: HTMLElement) => {
    const elementIsEditable = (e: HTMLElement): e is HTMLInputElement | HTMLTextAreaElement => !!e.nodeName.match(/^(INPUT|TEXTAREA)$/i);
    const selection = window.getSelection();
    if (elementIsEditable(e)) {
        e.focus();
        e.select();
        return;
    }
    if (selection.setBaseAndExtent) {
        // Safari
        selection.setBaseAndExtent(e, 0, e, e.hasChildNodes() ? 1 : 0);
        return;
    }
    if (selection.addRange && selection.removeAllRanges && document.createRange) {
        // Mozilla or Opera 10.5+
        const range = document.createRange();
        range.selectNodeContents(e);
        selection.removeAllRanges();
        selection.addRange(range);
    }
};
export const selectElementPos = (e: HTMLElement, pos: number) => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.setStart(e.childNodes[0], pos);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
};
