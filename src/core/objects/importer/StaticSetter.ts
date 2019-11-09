import { Setter } from "./Setter";
import { ImportedObjectUI } from "./ImportedObject";
import { StaticPropertyUI } from "./StaticProperty";
import { TMeta } from "../../types";

export class StaticSetter extends Setter<true> {
    static get meta(): TMeta {
        return {
            ...super.meta,
            description: "Auto-imported static setter",
            inlets: [{
                isHot: false,
                type: "anything",
                description: "Set the value"
            }],
            outlets: []
        };
    }
    get initialInlets() {
        return 1;
    }
    get initialOutlets() {
        return 0;
    }
    update(args?: [any?]) {
        this.updateBox(args);
        if (args && args.length) this.imported = args[0];
        return this;
    }
    fn(data: any, inlet: number) {
        if (inlet === 0) this.imported = data;
        return this;
    }
    get ui(): typeof ImportedObjectUI {
        return StaticPropertyUI;
    }
}
