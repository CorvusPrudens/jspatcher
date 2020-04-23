import { AudioWorkletRegister, DisposableAudioWorkletNode } from "./Base";
import processorURL from "./Transmitter.worklet.ts"; // eslint-disable-line import/extensions
import { rms, zcr, setTypedArray } from "../../../../utils/buffer";
import { DataFromProcessor, DataToProcessor, processorID } from "./Transmitter";

export interface DataToGet {
    rms?: boolean;
    zcr?: boolean;
    buffer?: boolean;
}
export interface DataGot {
    rms: number[];
    zcr: number[];
    buffer?: { startPointer: number; data: Float32Array[]; sampleIndex: number };
}
export type Parameters = null;
export class TemporalAnalyserNode extends DisposableAudioWorkletNode<DataFromProcessor, DataToProcessor, Parameters> {
    /**
     * Concatenated audio data, array of channels
     *
     * @type {Float32Array[]}
     * @memberof TemporalAnalyserNode
     */
    private window: Float32Array[] = [];
    /**
     * Next audio sample index to write into window
     *
     * @memberof TemporalAnalyserNode
     */
    private $ = 0;
    /**
     * Total samples written counter
     *
     * @memberof TemporalAnalyserNode
     */
    private $total = 0;
    private _windowSize = 1024;
    constructor(context: BaseAudioContext, options?: AudioWorkletNodeOptions) {
        super(context, processorID, { numberOfInputs: 1, numberOfOutputs: 0 });
        this.port.onmessage = (e: AudioWorkletMessageEvent<DataFromProcessor>) => {
            const { buffer: input } = e.data;
            if (!input) return;
            const { windowSize } = this;
            this.$ %= windowSize;
            if (this.window.length > input.length) { // Too much channels ?
                this.window.splice(input.length);
            }
            if (input.length === 0) return;
            const bufferSize = Math.max(...input.map(c => c.length)) || 128;
            this.$total += bufferSize;
            let { $ } = this;
            // Init windows
            for (let i = 0; i < input.length; i++) {
                $ = this.$;
                if (!this.window[i]) { // Initialise channel if not exist
                    this.window[i] = new Float32Array(windowSize);
                } else {
                    if (this.window[i].length !== windowSize) { // adjust window size if not corresponded
                        const oldWindow = this.window[i];
                        const oldWindowSize = oldWindow.length;
                        const window = new Float32Array(windowSize);
                        $ = setTypedArray(window, oldWindow, 0, $ - Math.min(windowSize, oldWindowSize));
                        this.window[i] = window;
                    }
                }
            }
            this.$ = $;
            // Write
            for (let i = 0; i < input.length; i++) {
                const window = this.window[i];
                const channel = input[i].length ? input[i] : new Float32Array(bufferSize);
                $ = this.$;
                if (bufferSize > windowSize) {
                    window.set(channel.subarray(bufferSize - windowSize));
                    $ = 0;
                } else {
                    $ = setTypedArray(window, channel, $);
                }
            }
            this.$ = $;
        };
    }
    get rms() {
        return this.window.map(rms);
    }
    get zcr() {
        return this.window.map(zcr);
    }
    get buffer() {
        const data = this.window;
        return { data, startPointer: this.$, sampleIndex: this.$total };
    }
    get windowSize() {
        return this._windowSize;
    }
    set windowSize(sizeIn: number) {
        this._windowSize = ~~Math.min(2 ** 32, Math.max(128, sizeIn || 1024));
    }
    gets(options: DataToGet): DataGot {
        const message = {} as DataGot;
        if (options.rms) message.rms = this.rms;
        if (options.zcr) message.zcr = this.zcr;
        if (options.buffer) message.buffer = this.buffer;
        return message;
    }
}
export class TemporalAnalyserRegister extends AudioWorkletRegister {
    static processorID = processorID;
    static processorURL = processorURL;
    static Node = TemporalAnalyserNode;
}
