import { FaustAudioWorkletNode, FaustScriptProcessorNode } from "faust2webaudio";
import FaustDynamicNode from "../dsp/FaustDynamicNode";
import { Bang } from "../Base";
import { TMeta, TBPF, TMIDIEvent, TInletMeta, TOutletMeta } from "../../types";
import { isMIDIEvent, decodeLine } from "../../../utils";

export default class FaustNode extends FaustDynamicNode<{ code: string }, { voices: number }, [Bang | number | string | TMIDIEvent | { [key: string]: TBPF }, ...TBPF[]], (null | FaustAudioWorkletNode | FaustScriptProcessorNode)[], [number]> {
    static package = "Faust";
    static author = "Fr0stbyteR";
    static version = "1.0.0";
    static description = "Dynamically generate WebAudioNode from Faust";
    static inlets: TMeta["inlets"] = [{
        isHot: true,
        type: "anything",
        description: "A bang to output the node, code string to compile, number to set voices, or a param-bpf map, or a MIDI event"
    }];
    static outlets: TMeta["outlets"] = [{
        type: "object",
        description: "FaustNode instance output: AudioWorkletNode | ScriptProcessor"
    }];
    static args: TMeta["args"] = [{
        type: "number",
        optional: true,
        default: 0,
        description: "Polyphonic instrument voices count"
    }]
    state = { merger: undefined as ChannelMergerNode, splitter: undefined as ChannelSplitterNode, node: undefined as FaustAudioWorkletNode | FaustScriptProcessorNode, voices: 0 };
    _meta: TMeta = FaustNode.meta;
    get meta() {
        return this._meta;
    }
    set meta(metaIn: TMeta) {
        this._meta = metaIn;
        this.emit("metaChanged", this._meta);
    }
    async newNode(code: string, voices: number) {
        let compiled: { inlets: number; outlets: number; node: FaustAudioWorkletNode | FaustScriptProcessorNode; splitter: ChannelSplitterNode; merger: ChannelMergerNode };
        try {
            compiled = await this.compile(code, voices);
        } catch (e) {
            this.error((e as Error).message);
            return;
        }
        const { inlets, outlets, merger, splitter, node } = compiled;
        this.disconnectAll();
        this.handleDestroy();
        this.state = { voices, merger, splitter, node };
        this.data.code = code;
        const audioParams = node.getParams();
        const firstInletMeta = FaustNode.inlets[0];
        const firstInletSignalMeta: TInletMeta = { ...firstInletMeta, type: "signal" };
        const inletMeta: TInletMeta = { isHot: false, type: "signal", description: "Node connection" };
        const audioParamInletMeta: TInletMeta = { isHot: false, type: "signal", description: ": bpf or node connection" };
        const outletMeta: TOutletMeta = { type: "signal", description: "Node connection" };
        const lastOutletMeta = FaustNode.outlets[0];
        const factoryMeta = FaustNode.meta;
        for (let i = 0; i < inlets; i++) {
            if (i === 0) factoryMeta.inlets[i] = compiled.inlets ? firstInletSignalMeta : firstInletMeta;
            else factoryMeta.inlets[i] = inletMeta;
            this.inletConnections[i] = { node: merger, index: i };
        }
        for (let i = 0; i < outlets; i++) {
            factoryMeta.outlets[i] = outletMeta;
            this.outletConnections[i] = { node: splitter, index: i };
        }
        factoryMeta.outlets[outlets] = lastOutletMeta;
        if (node instanceof AudioWorkletNode) {
            for (let i = inlets || 1; i < (inlets || 1) + audioParams.length; i++) {
                const path = audioParams[i - (inlets || 1)];
                const param = node.parameters.get(path);
                const { defaultValue, minValue, maxValue } = param;
                factoryMeta.inlets[i] = { ...audioParamInletMeta, description: `${path}${audioParamInletMeta.description}: ${defaultValue} (${minValue} - ${maxValue})` };
                this.inletConnections[i] = { node: param };
            }
        }
        this.meta = factoryMeta;
        this.inlets = (inlets || 1) + (node instanceof AudioWorkletNode ? audioParams.length : 0);
        this.outlets = outlets + 1;
        this.connectAll();
        this.outlet(this.outlets - 1, this.state.node);
    }
    handleDestroy = () => {
        if (this.state.merger) this.state.merger.disconnect();
        if (this.state.node) this.state.node.disconnect();
    };
    subscribe() {
        super.subscribe();
        this.on("preInit", async () => {
            if (this.data.code) await this.newNode(this.data.code, this.state.voices);
        });
        this.on("inlet", async ({ data, inlet }) => {
            if (inlet === 0) {
                if (data instanceof Bang) {
                    if (this.state.node) this.outlet(this.outlets - 1, this.state.node);
                } else if (typeof data === "string") {
                    await this.newNode(data, this.state.voices);
                } else if (typeof data === "number") {
                    this.state.voices = Math.max(0, ~~data);
                } else if (isMIDIEvent(data)) {
                    if (this.state.node) this.state.node.midiMessage(data);
                } else if (typeof data === "object") {
                    if (this.state.node) {
                        for (const key in data) {
                            try {
                                const bpf = decodeLine((data as { [key: string]: TBPF })[key]);
                                if (this.state.node instanceof AudioWorkletNode) this.applyBPF(this.state.node.parameters.get(key), bpf);
                                else this.state.node.setParamValue(key, bpf[bpf.length - 1][0]);
                            } catch (e) {
                                this.error(e.message);
                            }
                        }
                    }
                }
            } else if (this.state.node instanceof AudioWorkletNode) {
                const con = this.inletConnections[inlet].node;
                if (con instanceof AudioParam) {
                    try {
                        const bpf = decodeLine(data as TBPF);
                        this.applyBPF(con, bpf);
                    } catch (e) {
                        this.error(e.message);
                    }
                }
            }
        });
        this.on("destroy", this.handleDestroy);
    }
}
