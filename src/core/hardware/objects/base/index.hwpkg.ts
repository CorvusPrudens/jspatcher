import BaseObject from "./BaseHardwareObject";
import EmptyObject from "./EmptyObject";
import InvalidObject from "./InvalidObject";
// import { Func, New } from "../importer/DefaultImporter";
import _comment from "./Comment";
import CommentUI from "./CommentUI";

export class comment extends _comment {
  static UI = CommentUI;
}

export default async () => ({
  BaseObject,
  EmptyObject,
  InvalidObject,
  // new: New,
  comment,
});
