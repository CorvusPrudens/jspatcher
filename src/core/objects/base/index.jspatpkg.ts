import BaseObject from "./BaseObject";
import EmptyObject from "./EmptyObject";
import InvalidObject from "./InvalidObject";
import { Func, New } from "../importer/DefaultImporter";

export default async () => ({
    BaseObject,
    EmptyObject,
    InvalidObject,
    func: Func,
    new: New
});
