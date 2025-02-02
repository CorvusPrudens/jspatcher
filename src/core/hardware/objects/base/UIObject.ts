import BaseHardwareObject from "./BaseHardwareObject";

export default class UIObject<
    D = {},
    S = {},
    IO extends any[] = any[],
    I extends any[] = any[],
    O extends any[] = any[],
    A extends any[] = any[],
    P = {},
    U = {},
    E = {}
> extends BaseHardwareObject<D, S, IO, I, O, A, P, U, E> {
    static author = "Corvus Prudens";
    static version = "v1.0.0";
    static description = "Basic UI object";
}
