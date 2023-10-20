import BaseObject from "./BaseHardwareObject";
import EmptyObject from "./EmptyObject";
import InvalidObject from "./InvalidObject";
// import { Func, New } from "../importer/DefaultImporter";
import comment from "./Comment";

export default async () => ({
  BaseObject,
  EmptyObject,
  InvalidObject,
  // new: New,
  comment,
});
