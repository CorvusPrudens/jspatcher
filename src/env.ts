import { detectOS } from "./utils";
// import { Faust } from "faust2webaudio";

const AudioContext = window.AudioContext || window.webkitAudioContext;
export default class Env {
    audioCtx = new AudioContext({ latencyHint: 0.00001 });
    dummyAudioNode = this.audioCtx.createScriptProcessor(1024, 1, 1);
    os = detectOS();
    supportAudioWorklet = !!window.AudioWorklet;
    // faustPromise = new Faust().ready;
}
