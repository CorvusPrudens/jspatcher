import { PromisifiedFunctionMap } from "./Worker";

export type ProxyMain<IMain extends {} = {}, IWorker extends {} = {}> = PromisifiedFunctionMap<IWorker> & IMain;
export const ProxyMain: {
    Worker: typeof WebpackWorker;
    fnNames: string[];
    prototype: ProxyMain;
    new <IMain extends {} = {}, IWorker extends {} = {}>(): ProxyMain<IMain, IWorker>;
};
