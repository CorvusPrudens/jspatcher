import DefaultObject from "../base/DefaultObject";

export class DefaultWebMIDIObject<D = {}, S = {}, I extends any[] = any[], O extends any[] = any[], A extends any[] = any[], P = {}, U = {}, E = {}> extends DefaultObject<D, S, I, O, A, P, U, E> {
    static package = "WebMIDI";
    static author = "Fr0stbyteR";
    static version = "1.0.0";
    static description = "WebMIDI Object";
}
