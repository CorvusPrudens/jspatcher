import { DefaultObject } from "./Base";
import Box from "../Box";
import Patcher from "../Patcher";
import { TPackage, TMeta } from "../types";

type TObjectExpr = {
    exprs?: string[];
    onces?: string[];
};

export class FaustOp extends DefaultObject<{}, { inlets: number; outlets: number; args: (number | string)[] }, [], [], any[]> {
    static package = "FaustOps";
    static author = "Fr0stbyteR";
    static version = "1.0.0";
    static description = "Faust Operator";
    state = { inlets: 1, outlets: 1, args: [] as (number | string)[] };
    subscribe() {
        super.subscribe();
        this.on("preInit", this.configureIO);
        this.on("updateArgs", args => this.state.args = args.slice());
        this.on("updateArgs", this.configureIO);
    }
    /**
     * Supress inlet if defined in args
     *
     * @memberof FaustOp
     */
    configureIO = (args: any[]) => {
        this.inlets = this.state.inlets - Math.min(this.state.inlets, args ? args.length : 0);
        this.outlets = this.state.outlets;
    }
    /**
     * Symbol used to register class
     *
     * @type {string[]}
     * @memberof FaustOp
     */
    symbol: string[] = [];
    /**
     * Transform to faust dsp expression using a string map for line IDs.
     *
     * @param {{ [id: string]: string }} lineMap
     * @returns {TObjectExpr}
     * @memberof FaustOp
     */
    toExpr(lineMap: { [id: string]: string }): TObjectExpr {
        const exprs: string[] = [];
        const inlets = this.inletLines.map((lines) => { // inlets as 0, 1, 2
            if (lines.length === 0) return "0";
            if (lines.length === 1) return lineMap[lines[0]] ? `${lineMap[lines[0]]}` : "0";
            return `(${lines.map(line => lineMap[line]).filter(line => line !== undefined).join(", ")} :> _)`;
        }).concat(...this.state.args as any[]).join(", ");

        if (this.outletLines.length === 0) return {};
        if (this.outletLines.length === 1) {
            if (this.outletLines[0].length === 0) return {};
            const outlet = lineMap[this.outletLines[0][0]];
            return outlet ? { exprs: [`${outlet} = ${this.symbol[0]}(${inlets});`] } : {};
        }

        const result = `${this.meta.name}_${this.box.id.substr(4)}`;
        exprs.push(`${result} = ${this.symbol[0]}(${inlets});`);
        const allCut = new Array(this.outlets).fill("!");
        this.outletLines.forEach((outletLines, i) => {
            if (outletLines.length === 0) return;
            const outlet = lineMap[outletLines[0]];
            if (!outlet) return;
            const pass = allCut.slice();
            pass[i] = "_";
            exprs.push(`${outlet} = ${result} : ${pass.join(", ")};`);
        });
        return { exprs };
    }
}
class EmptyObject extends FaustOp {
    static description = "No-op";
    state = { inlets: 0, outlets: 0, args: [] as (number | string)[], editing: false };
    toExpr(): TObjectExpr {
        return {};
    }
}
class InvalidObject extends FaustOp {
    static description = "No-op";
    static props: TMeta["props"] = {
        bgColor: {
            type: "color",
            default: "rgb(128, 64, 64)",
            description: "Background color",
            isUIState: true
        }
    };
    state = { inlets: 0, outlets: 0, args: [] as (number | string)[] };
    toExpr(): TObjectExpr {
        return {};
    }
}

class In extends FaustOp {
    static description = "Signal Input";
    static outlets: TMeta["outlets"] = [{
        type: "signal",
        description: "_"
    }];
    static args: TMeta["args"] = [{
        type: "number",
        optional: false,
        description: "Signal index (0-based)"
    }];
    symbol = ["in"];
    subscribe() {
        super.subscribe();
        this.on("preInit", () => {
            this.inlets = 0;
            this.outlets = 1;
        });
    }
    configureIO = () => {};
    get index() {
        const i = this.state.args[0];
        return typeof i === "number" && i >= 0 ? i : Infinity;
    }
    toExpr(lineMap: { [id: string]: string }): TObjectExpr {
        if (this.outletLines.length === 1) {
            if (this.outletLines[0].length === 0) return {};
            const outlet = lineMap[this.outletLines[0][0]];
            return outlet ? { exprs: [`${outlet} = _;`] } : {};
        }
        return {};
    }
}
class Out extends FaustOp {
    static description = "Signal Output";
    static inlets: TMeta["inlets"] = [{
        isHot: true,
        type: "signal",
        description: "_"
    }];
    static args: TMeta["args"] = [{
        type: "number",
        optional: false,
        description: "Signal index (0-based)"
    }];
    symbol = ["out"];
    subscribe() {
        super.subscribe();
        this.on("preInit", () => {
            this.inlets = 1;
            this.outlets = 0;
        });
    }
    configureIO = () => {};
    get index() {
        const i = this.state.args[0];
        return typeof i === "number" && i >= 0 ? i : Infinity;
    }
    toExpr(lineMap: { [id: string]: string }): TObjectExpr {
        const exprs: string[] = [];
        const inlets = this.inletLines.map((lines) => {
            if (lines.length === 0) return "0";
            if (lines.length === 1) return lineMap[lines[0]] ? `${lineMap[lines[0]]}` : "0";
            return `(${lines.map(line => lineMap[line]).filter(line => line !== undefined).join(", ")} :> _)`;
        });

        const result = `${this.meta.name}_${this.box.id.substr(4)}`;
        exprs.push(`${result} = ${inlets};`);
        return { exprs };
    }
}
class Split extends FaustOp {
    static description = "Split Signal";
    static inlets: TMeta["inlets"] = [{
        isHot: true,
        type: "signal",
        description: "_"
    }];
    static outlets: TMeta["outlets"] = [{
        type: "signal",
        description: "_"
    }, {
        type: "signal",
        description: "_"
    }];
    symbol = ["<:"];
    state = { inlets: 1, outlets: 2, args: [] as (number | string)[] };
    toExpr(lineMap: { [id: string]: string }): TObjectExpr {
        const exprs: string[] = [];
        const inlets = this.inletLines.map((lines) => {
            if (lines.length === 0) return "0";
            if (lines.length === 1) return lineMap[lines[0]] ? `${lineMap[lines[0]]}` : "0";
            return `(${lines.map(line => lineMap[line]).filter(line => line !== undefined).join(", ")} :> _)`;
        }).concat(...this.state.args as any[]).join(", ");

        if (this.outletLines.length === 0) return {};
        if (this.outletLines.length === 1) {
            if (this.outletLines[0].length === 0) return {};
            const outlet = lineMap[this.outletLines[0][0]];
            return outlet ? { exprs: [`${outlet} = ${inlets};`] } : {};
        }

        const result = `${this.meta.name}_${this.box.id.substr(4)}`;
        exprs.push(`${result} = ${inlets};`);
        this.outletLines.forEach((outletLines, i) => {
            if (outletLines.length === 0) return;
            const outlet = lineMap[outletLines[0]];
            if (!outlet) return;
            exprs.push(`${outlet} = ${result};`);
        });
        return { exprs };
    }
}
class Merge extends FaustOp {
    static description = "Merge Signal";
    static inlets: TMeta["inlets"] = [{
        isHot: true,
        type: "signal",
        description: "_"
    }, {
        isHot: true,
        type: "signal",
        description: "_"
    }];
    static outlets: TMeta["outlets"] = [{
        type: "signal",
        description: "_"
    }];
    symbol = [":>"];
    state = { inlets: 2, outlets: 1, args: [] as (number | string)[] };
    toExpr(lineMap: { [id: string]: string }): TObjectExpr {
        const exprs: string[] = [];
        const inlets = this.inletLines.map((lines) => {
            if (lines.length === 0) return "0";
            if (lines.length === 1) return lineMap[lines[0]] ? `${lineMap[lines[0]]}` : "0";
            return `(${lines.map(line => lineMap[line]).filter(line => line !== undefined).join(", ")} :> _)`;
        }).concat(...this.state.args as any[]).join(", ");

        if (this.outletLines.length === 0) return {};
        if (this.outletLines.length === 1) {
            if (this.outletLines[0].length === 0) return {};
            const outlet = lineMap[this.outletLines[0][0]];
            return outlet ? { exprs: [`${outlet} = ${inlets} :> _;`] } : {};
        }

        const result = `${this.meta.name}_${this.box.id.substr(4)}`;
        exprs.push(`${result} = ${inlets} :> _;`);
        this.outletLines.forEach((outletLines, i) => {
            if (outletLines.length === 0) return;
            const outlet = lineMap[outletLines[0]];
            if (!outlet) return;
            exprs.push(`${outlet} = ${result} :> _;`);
        });
        return { exprs };
    }
}
class Rec extends FaustOp {
    static description = "Recursion with 1-sample delay";
    static inlets: TMeta["inlets"] = [{
        isHot: true,
        type: "signal",
        description: "_"
    }];
    static outlets: TMeta["outlets"] = [{
        type: "signal",
        description: "_'"
    }];
    symbol = ["~"];
    state = { inlets: 1, outlets: 1, args: [] as (number | string)[] };
    toExpr(lineMap: { [id: string]: string }): TObjectExpr {
        const exprs: string[] = [];
        const inlets = this.inletLines.map((lines) => {
            if (lines.length === 0) return "0";
            if (lines.length === 1) return lineMap[lines[0]] ? `${lineMap[lines[0]]}` : "0";
            return `(${lines.map(line => lineMap[line]).filter(line => line !== undefined).join(", ")} :> _)`;
        }).concat(...this.state.args as any[]).join(", ");

        const result = `${this.meta.name}_${this.box.id.substr(4)}`;
        exprs.push(`${result} = ${inlets};`);
        return { exprs };
    }
}
class Mem extends FaustOp {
    static description = "1-sample delay";
    static inlets: TMeta["inlets"] = [{
        isHot: true,
        type: "signal",
        description: "_"
    }];
    static outlets: TMeta["outlets"] = [{
        type: "signal",
        description: "_'"
    }];
    symbol = ["mem", "'"];
    state = { inlets: 1, outlets: 1, args: [] as (number | string)[] };
}
class Delay extends FaustOp {
    static description = "n-sample delay";
    static inlets: TMeta["inlets"] = [{
        isHot: true,
        type: "signal",
        description: "_"
    }, {
        isHot: true,
        type: "signal",
        description: "number of samples"
    }];
    static outlets: TMeta["outlets"] = [{
        type: "signal",
        description: "@(_, n)"
    }];
    static args: TMeta["args"] = [{
        type: "number",
        optional: true,
        description: "number of samples"
    }];
    symbol = ["@"];
    state = { inlets: 2, outlets: 1, args: [] as (number | string)[] };
}
class Const extends FaustOp {
    static description = "Output a constant";
    static inlets: TMeta["inlets"] = [{
        isHot: true,
        type: "signal",
        description: "_"
    }];
    static outlets: TMeta["outlets"] = [{
        type: "signal",
        description: "_"
    }];
    static args: TMeta["args"] = [{
        type: "signal",
        optional: true,
        default: 0,
        description: "Constant value"
    }];
    symbol = ["const", "c"];
    state = { inlets: 1, outlets: 1, args: [] as (number | string)[] };
    toExpr(lineMap: { [id: string]: string }): TObjectExpr {
        const exprs: string[] = [];
        const inlets = this.inletLines.map((lines) => {
            if (lines.length === 0) return "0";
            if (lines.length === 1) return lineMap[lines[0]] ? `${lineMap[lines[0]]}` : "0";
            return `(${lines.map(line => lineMap[line]).filter(line => line !== undefined).join(", ")} :> _)`;
        }).concat(...this.state.args as any[]).join(", ");

        if (this.outletLines.length === 0) return {};
        if (this.outletLines.length === 1) {
            if (this.outletLines[0].length === 0) return {};
            const outlet = lineMap[this.outletLines[0][0]];
            return outlet ? { exprs: [`${outlet} = ${inlets};`] } : {};
        }

        const result = `${this.meta.name}_${this.box.id.substr(4)}`;
        exprs.push(`${result} = ${inlets};`);
        this.outletLines.forEach((outletLines, i) => {
            if (outletLines.length === 0) return;
            const outlet = lineMap[outletLines[0]];
            if (!outlet) return;
            exprs.push(`${outlet} = ${result};`);
        });
        return { exprs };
    }
}
class SR extends FaustOp {
    static description = "Sample Rate";
    static outlets: TMeta["outlets"] = [{
        type: "signal",
        description: "_"
    }];
    symbol = ["ma.SR"];
    state = { inlets: 1, outlets: 1, args: [] as (number | string)[] };
    toExpr(lineMap: { [id: string]: string }): TObjectExpr {
        const exprs: string[] = [];
        const onces = ['import("stdfaust.lib");'];

        if (this.outletLines.length === 0) return {};
        if (this.outletLines.length === 1) {
            if (this.outletLines[0].length === 0) return {};
            const outlet = lineMap[this.outletLines[0][0]];
            return outlet ? { exprs: [`${outlet} = ${this.symbol[0]};`], onces } : {};
        }

        const result = `${this.meta.name}_${this.box.id.substr(4)}`;
        exprs.push(`${result} = ${this.symbol[0]};`);
        this.outletLines.forEach((outletLines, i) => {
            if (outletLines.length === 0) return;
            const outlet = lineMap[outletLines[0]];
            if (!outlet) return;
            exprs.push(`${outlet} = ${result};`);
        });
        return { exprs, onces };
    }
}
class Iterator extends FaustOp {
    static inlets: TMeta["inlets"] = [{
        isHot: true,
        type: "signal",
        description: "Result of the function to iterate"
    }];
    static outlets: TMeta["outlets"] = [{
        type: "signal",
        description: "Result of all iterations"
    }, {
        type: "signal",
        description: "An incremental value on each iteration"
    }];
    static args: TMeta["args"] = [{
        type: "signal",
        optional: true,
        default: 0,
        description: "Iterations count"
    }];
    state = { inlets: 1, outlets: 2, args: [] as (number | string)[] };
    configureIO = (args: any[]) => {
        this.inlets = 1;
        this.outlets = 2;
    }
    toExpr(lineMap: { [id: string]: string }): TObjectExpr {
        const exprs: string[] = [];
        const inlet0Lines = this.inletLines[0];
        const { expr, once } = toFaustLambda(this.patcher, [this], "lambda");
        const onces = [once];
        const lambda = inlet0Lines.length ? `lambda with {
    ${expr}
}` : "0";
        const box = this.box;
        const inlets = `${box.meta.name}_${box.id.substr(4)}_${this.outlets - 1}, ${box.args[0] || 0}, ${lambda}`;

        if (this.outletLines.length === 0) return {};
        if (this.outletLines.length === 1) {
            if (this.outletLines[0].length === 0) return {};
            const outlet = lineMap[this.outletLines[0][0]];
            return outlet ? { exprs: [`${outlet} = ${this.symbol[0]}(${inlets});`], onces } : {};
        }

        const result = `${this.meta.name}_${this.box.id.substr(4)}`;
        exprs.push(`${result} = ${this.symbol[0]}(${inlets});`);
        const allCut = new Array(this.outlets - 1).fill("!");
        this.outletLines.forEach((outletLines, i) => {
            if (i === this.outlets - 1) return;
            if (outletLines.length === 0) return;
            const outlet = lineMap[outletLines[0]];
            if (!outlet) return;
            const pass = allCut.slice();
            pass[i] = "_";
            exprs.push(`${outlet} = ${result} : ${pass.join(", ")};`);
        });
        return { exprs, onces };
    }
    toNormalExpr(lineMap: { [id: string]: string }): TObjectExpr {
        const exprs: string[] = [];
        const lines = this.inletLines[0];
        let inlets;
        if (lines.length === 0) inlets = "0";
        if (lines.length === 1) inlets = lineMap[lines[0]] ? `${lineMap[lines[0]]}` : "0";
        inlets = `(${lines.map(line => lineMap[line]).filter(line => line !== undefined).join(", ")} :> _)`;

        if (this.outletLines.length === 0) return {};
        if (this.outletLines.length === 1) {
            if (this.outletLines[0].length === 0) return {};
            const outlet = lineMap[this.outletLines[0][0]];
            return outlet ? { exprs: [`${outlet} = ${inlets};`] } : {};
        }

        const result = `${this.meta.name}_${this.box.id.substr(4)}`;
        exprs.push(`${result} = ${inlets};`);
        const allCut = new Array(this.outlets - 1).fill("!");
        this.outletLines.forEach((outletLines, i) => {
            if (i === this.outlets - 1) return;
            if (outletLines.length === 0) return;
            const outlet = lineMap[outletLines[0]];
            if (!outlet) return;
            const pass = allCut.slice();
            pass[i] = "_";
            exprs.push(`${outlet} = ${result} : ${pass.join(", ")};`);
        });
        return { exprs };
    }
}
class Sum extends Iterator {
    static description = "Sum iterator";
    symbol = ["sum"];
}
class Prod extends Iterator {
    static description = "Production iterator";
    symbol = ["prod"];
}
class Seq extends Iterator {
    static description = "Seqential iterator";
    symbol = ["seq"];
}
class Par extends Iterator {
    static description = "Parallel iterator";
    _meta = Par.meta;
    get meta() {
        return this._meta;
    }
    set meta(metaIn: TMeta) {
        this._meta = metaIn;
        this.emit("metaChanged", this._meta);
    }
    symbol = ["par"];
    configureIO = (args: any[]) => {
        this.inlets = 1;
        const outlets = (args ? ~~args[0] : 0) + 1;
        if (outlets === this.outlets) return;
        const outlet0Meta = Par.outlets[0];
        const outlet1Meta = Par.outlets[1];
        for (let i = 0; i < outlets - 1; i++) {
            this._meta.outlets[i] = outlet0Meta;
        }
        this._meta.outlets[outlets - 1] = outlet1Meta;
        this.meta = this._meta;
        this.outlets = outlets;
    }
}

const faustOps: TPackage = {
    in: In,
    out: Out,
    "<:": Split,
    ":>": Merge,
    "~": Rec,
    "'": Mem,
    mem: Mem,
    "@": Delay,
    const: Const,
    c: Const,
    SR,
    sr: SR,
    sampleRate: SR,
    sum: Sum,
    prod: Prod,
    seq: Seq,
    par: Par,
    EmptyObject,
    InvalidObject
};

type TOpMap = { [category: string]: {[className: string]: { desc: string; symbol: string | string[]; inlets: number }} };
const opMap: TOpMap = {
    mathOps: {
        Int: { symbol: ["int", "i"], inlets: 1, desc: "Force cast to int" },
        Float: { symbol: ["float", "f"], inlets: 1, desc: "Force cast to float" },

        Add: { symbol: "+", inlets: 2, desc: "Add two signals" },
        Sub: { symbol: "-", inlets: 2, desc: "Substract two signals" },
        Mul: { symbol: "*", inlets: 2, desc: "Multiply two signals" },
        Div: { symbol: "/", inlets: 2, desc: "Divide two signals" },
        Pow: { symbol: "^", inlets: 2, desc: "Raise to the power of N a signal" },
        Mod: { symbol: "%", inlets: 2, desc: "Take the modulo of a signal" },
        And: { symbol: "&", inlets: 2, desc: "Logical AND of two signals" },
        Or: { symbol: "|", inlets: 2, desc: "Logical OR of two signals" },
        Xor: { symbol: "xor", inlets: 2, desc: "Logical XOR of two signals" },
        BLS: { symbol: "<<", inlets: 2, desc: "Bitwise left shift" },
        BRS: { symbol: ">>", inlets: 2, desc: "Bitwise right shift" },
        Lss: { symbol: "<", inlets: 2, desc: "Smaller than comparison" },
        Leq: { symbol: "<=", inlets: 2, desc: "Smaller or equal than comparison" },
        Gtr: { symbol: ">", inlets: 2, desc: "Greater than comparison" },
        Geq: { symbol: ">=", inlets: 2, desc: "Greater or equal than comparison" },
        Eql: { symbol: "==", inlets: 2, desc: "Equal to comparison" },
        NEql: { symbol: "!=", inlets: 2, desc: "Different than comparison" },

        Acos: { symbol: "acos", inlets: 1, desc: "Arc cosine" },
        Asin: { symbol: "asin", inlets: 1, desc: "Arc sine" },
        Atan: { symbol: "atan", inlets: 1, desc: "Arc tangent" },
        Atan2: { symbol: "atan2", inlets: 2, desc: "Arc tangent of 2 signals" },
        Cos: { symbol: "cos", inlets: 1, desc: "Cosine" },
        Sin: { symbol: "sin", inlets: 1, desc: "Sine" },
        Tan: { symbol: "tan", inlets: 1, desc: "Tangent" },
        Exp: { symbol: "exp", inlets: 1, desc: "Base-e exponential" },
        Log: { symbol: "log", inlets: 1, desc: "Base-e logarithm" },
        Log10: { symbol: "log10", inlets: 1, desc: "Base-10 logarithm" },
        Powf: { symbol: "pow", inlets: 2, desc: "Power" },
        Sqrt: { symbol: "sqrt", inlets: 1, desc: "Square root" },
        Abs: { symbol: "abs", inlets: 1, desc: "Absolute value" },
        Min: { symbol: "min", inlets: 2, desc: "Minimum" },
        Max: { symbol: "max", inlets: 2, desc: "Maximum" },
        Modf: { symbol: "fmod", inlets: 2, desc: "Float modulo" },
        Remainder: { symbol: "remainder", inlets: 2, desc: "Float remainder" },
        Floor: { symbol: "floor", inlets: 1, desc: "Largest int" },
        Ceil: { symbol: "ceil", inlets: 1, desc: "Smallest int" },
        Rint: { symbol: "rint", inlets: 1, desc: "Closest int" }
    }
};
for (const className in opMap.mathOps) {
    const op = opMap.mathOps[className];
    const inletsMeta = new Array(op.inlets).fill(null).map(() => ({
        isHot: true,
        type: "signal" as "signal",
        description: "_"
    }));
    const outletDesc = `${op.symbol}(${new Array(op.inlets).fill("_").join(", ")})`;
    const Op = class extends FaustOp {
        static get _name() { return className; }
        static description = op.desc;
        static inlets: TMeta["inlets"] = inletsMeta;
        static outlets: TMeta["outlets"] = [{
            type: "signal",
            description: outletDesc
        }];
        symbol = typeof op.symbol === "string" ? [op.symbol] : op.symbol;
        state = { inlets: op.inlets, outlets: 1, args: [] as (number | string)[] };
    };
    if (typeof op.symbol === "string") faustOps[op.symbol] = Op;
    else op.symbol.forEach(symbol => faustOps[symbol] = Op);
}
const mapLines = (box: Box, patcher: Patcher, visitedBoxes: Box[], ins: In[], recs: Rec[], lineMap: { [id: string]: string }) => {
    if (visitedBoxes.indexOf(box) >= 0) return;
    visitedBoxes.push(box);
    if (box.object instanceof Iterator && box !== visitedBoxes[0]) return;
    box.inletLines.forEach(lines => lines.forEach((lineID) => {
        const line = patcher.lines[lineID];
        const srcBox = patcher.lines[lineID].srcBox;
        if (srcBox.object instanceof In && ins.indexOf(srcBox.object) === -1) ins.push(srcBox.object);
        else if (srcBox.object instanceof Rec && recs.indexOf(srcBox.object) === -1) recs.push(srcBox.object);
        lineMap[lineID] = `${srcBox.meta.name}_${srcBox.id.substr(4)}_${line.srcOutlet}`;
        mapLines(srcBox, patcher, visitedBoxes, ins, recs, lineMap);
    }));
};
export const toFaustLambda = (patcher: Patcher, outs: FaustOp[], lambdaName: string) => {
    const exprs: string[] = [];
    const onces: string[] = [];
    const mainIns: string[] = [];
    const mainOuts: string[] = [];
    const recIns: string[] = [];
    const recOuts: string[] = [];
    const visitedBoxes: Box[] = [];
    let ins: In[] = [];
    const recs: Rec[] = [];
    const lineMap: { [id: string]: string } = {};
    // Build graph
    outs.forEach(out => mapLines(out.box, patcher, visitedBoxes, ins, recs, lineMap));
    visitedBoxes.forEach((box) => {
        if (box.object instanceof In) return;
        if (box.object instanceof Out) return;
        if (box.object instanceof Rec) return;
        if (outs.indexOf(box.object as FaustOp) !== -1) return;
        const { onces: o, exprs: e } = (box.object as FaustOp).toExpr(lineMap);
        if (o) onces.push(...o);
        if (e) exprs.push(...e);
    });
    // Build rec in/outs
    recs.forEach((rec) => {
        exprs.push(...rec.toExpr(lineMap).exprs || []);
        const recIn = `${rec.meta.name}_${rec.box.id.substr(4)}`;
        const recOut = `${recIn}_0`;
        recIns.push(recIn);
        recOuts.push(recOut);
    });
    // Build main in/outs
    ins = ins.sort((a, b) => a.index - b.index);
    ins.forEach((in_) => {
        mainIns.push(`${in_.meta.name}_${in_.box.id.substr(4)}_0`);
    });
    outs.forEach((out) => {
        if (out instanceof Iterator) exprs.push(...out.toNormalExpr(lineMap).exprs || []);
        else exprs.push(...out.toExpr(lineMap).exprs || []);
        mainOuts.push(`${out.meta.name}_${out.box.id.substr(4)}`);
    });
    const once = onces.join("\n");
    let expr;
    // Generate Final expressions
    if (recIns.length) {
        expr = `Main(${[...recOuts, ...mainIns].join(", ")}) = ${[...recIns, ...mainOuts].join(", ")} with {
    ${exprs.join("\n    ")}
};
Rec = ${recIns.map(() => "_").join(", ")} : ${recOuts.map(() => "_").join(", ")};
${lambdaName} = Main ~ Rec : ${[...recIns.map(() => "!"), ...mainOuts.map(() => "_")].join(", ")};`;
    } else if (mainIns.length) {
        expr = `${lambdaName}(${mainIns.join(", ")}) = ${mainOuts.join(", ")} with {
    ${exprs.join("\n    ")}
};`;
    } else {
        expr = `${lambdaName} = ${mainOuts.join(", ")} with {
    ${exprs.join("\n    ")}
};`;
    }
    return { once, expr };
};
export const toFaustDspCode = (patcher: Patcher) => {
    let outs: Out[] = [];
    // Find outs
    for (const boxID in patcher.boxes) {
        const box = patcher.boxes[boxID];
        if (box.object instanceof Out) outs.push(box.object);
    }
    outs = outs.sort((a, b) => a.index - b.index);
    const { once, expr } = toFaustLambda(patcher, outs, "process");
    return `${once}\n${expr}`;
};
export default faustOps;
