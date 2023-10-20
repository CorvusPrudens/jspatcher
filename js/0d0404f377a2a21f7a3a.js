"use strict";
(self["webpackChunkDaisyBell"] = self["webpackChunkDaisyBell"] || []).push([["src_core_hardware_Patcher_ts"],{

/***/ "./src/core/hardware/HardwareHistory.ts":
/*!**********************************************!*\
  !*** ./src/core/hardware/HardwareHistory.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatcherHistory)
/* harmony export */ });
/* harmony import */ var _file_History__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../file/History */ "./src/core/file/History.ts");


class PatcherHistory extends _file_History__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get eventListening() {
    return [
      "create",
      "delete",
      "changeBoxText",
      "boxChanged",
      "changeLineA",
      "changeLineB",
      "moved",
      "resized",
      "propsChanged"
    ];
  }
  async undoOf(editor, eventName, eventData) {
    if (eventName === "delete") {
      const e = eventData;
      await editor.create(e);
    } else if (eventName === "changeBoxText") {
      const e = eventData;
      const { boxId, oldText } = e;
      await editor.instance.changeBoxText(boxId, oldText);
    } else if (eventName === "boxChanged") {
      const e = eventData;
      const { boxId, oldArgs, oldProps, oldState, oldZIndex } = e;
      await editor.changeBox(boxId, { args: oldArgs, props: oldProps, state: oldState, zIndex: oldZIndex });
    } else if (eventName === "moved") {
      const e = eventData;
      const { selected, delta, presentation } = e;
      const d = { x: -1 * delta.x, y: -1 * delta.y };
      editor.move(selected, d, presentation);
      editor.moveEnd(selected, d);
    } else if (eventName === "changeLineA") {
      const e = eventData;
      const { lineId, oldA } = e;
      editor.changeLineA(lineId, oldA[0], oldA[1]);
    } else if (eventName === "changeLineB") {
      const e = eventData;
      const { lineId, oldB } = e;
      editor.changeLineB(lineId, oldB[0], oldB[1]);
    } else if (eventName === "create") {
      const e = eventData;
      await editor.delete(e);
    } else if (eventName === "resized") {
      const e = eventData;
      const { selected, delta, type: t, presentation } = e;
      const d = { x: -1 * delta.x, y: -1 * delta.y };
      editor.resize(selected, d, t, presentation);
      editor.resizeEnd(selected, d, t);
    } else if (eventName === "propsChanged") {
      const e = eventData;
      editor.instance.setProps(e.oldProps);
    }
  }
  async redoOf(editor, eventName, eventData) {
    if (eventName === "create") {
      const e = eventData;
      await editor.create(e);
    } else if (eventName === "changeBoxText") {
      const e = eventData;
      const { boxId, text } = e;
      await editor.instance.changeBoxText(boxId, text);
    } else if (eventName === "boxChanged") {
      const e = eventData;
      const { boxId, args, props, state, zIndex } = e;
      await editor.changeBox(boxId, { args, props, state, zIndex });
    } else if (eventName === "moved") {
      const e = eventData;
      const { selected, delta, presentation } = e;
      editor.move(selected, delta, presentation);
      editor.moveEnd(selected, delta);
    } else if (eventName === "changeLineA") {
      const e = eventData;
      const { lineId, newA } = e;
      editor.changeLineA(lineId, newA[0], newA[1]);
    } else if (eventName === "changeLineB") {
      const e = eventData;
      const { lineId, newB } = e;
      editor.changeLineB(lineId, newB[0], newB[1]);
    } else if (eventName === "delete") {
      const e = eventData;
      await editor.delete(e);
    } else if (eventName === "resized") {
      const e = eventData;
      const { selected, delta, type: t, presentation } = e;
      editor.resize(selected, delta, t, presentation);
      editor.resizeEnd(selected, delta, t);
    } else if (eventName === "propsChanged") {
      const e = eventData;
      editor.instance.setProps(e.props);
    }
  }
  async mergeChanges(...events) {
    this.editors.forEach((e) => e.state.selectAfterEdit = false);
    const merged = await super.mergeChanges(...events);
    this.editors.forEach((e) => e.state.selectAfterEdit = true);
    return merged;
  }
}


/***/ }),

/***/ "./src/core/hardware/Patcher.ts":
/*!**************************************!*\
  !*** ./src/core/hardware/Patcher.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Patcher)
/* harmony export */ });
/* harmony import */ var _file_FileInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../file/FileInstance */ "./src/core/file/FileInstance.ts");
/* harmony import */ var _HardwareEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HardwareEditor */ "./src/core/hardware/HardwareEditor.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Line */ "./src/core/hardware/Line.ts");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Box */ "./src/core/hardware/Box.ts");
/* harmony import */ var _HardwareHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HardwareHistory */ "./src/core/hardware/HardwareHistory.ts");
/* harmony import */ var _PackageManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PackageManager */ "./src/core/PackageManager.ts");

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));






const _Patcher = class extends _file_FileInstance__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    // lib: { [key: string]: typeof IHardwarePatcherObject } = {
    //   ...BaseHardwareObjects,
    //   ...SomObjects,
    //   ...HardwareObjects,
    // };
    this.lines = {};
    this.boxes = {};
    this._history = new _HardwareHistory__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._state = {
      name: "patcher",
      isReady: false,
      log: [],
      selected: [],
      pkgMgr: void 0,
      preventEmitChanged: false
    };
    this.lines = {};
    this.boxes = {};
    this.props = {
      mode: "daisy",
      dependencies: _Patcher.props.dependencies.default.slice(),
      bgColor: _Patcher.props.bgColor.default,
      editingBgColor: _Patcher.props.editingBgColor.default,
      grid: _Patcher.props.grid.default.slice(),
      openInPresentation: _Patcher.props.openInPresentation.default,
      boxIndexCount: 0,
      lineIndexCount: 0,
      objectInit: typeof options.objectInit === "boolean" ? options.objectInit : true
      // inlets: [],
      // outlets: []
    };
  }
  static async fromProjectItem(options) {
    return new this(options).init();
  }
  async getEditor() {
    const editor = new _HardwareEditor__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    return editor.init();
  }
  get state() {
    return this._state;
  }
  get activePkg() {
    return this._state.pkgMgr.pkg;
  }
  get activeLib() {
    return this._state.pkgMgr.lib;
  }
  get isReady() {
    var _a;
    return !!((_a = this._state) == null ? void 0 : _a.isReady);
  }
  get audioCtx() {
    var _a;
    return ((_a = this.project) == null ? void 0 : _a.audioCtx) || this.env.audioCtx;
  }
  get fileExtension() {
    return {
      daisy: "daisy"
    }[this.props.mode];
  }
  get fileName() {
    var _a;
    return ((_a = this.file) == null ? void 0 : _a.name) || `${this._state.name}.${this.fileExtension}`;
  }
  emitGraphChanged() {
    if (this._state.preventEmitChanged)
      return;
    this.emit("graphChanged");
    this.emitChanged();
  }
  emitChanged() {
    if (this._state.preventEmitChanged)
      return;
    this.emit("changed");
  }
  boxChanged(boxId, changed) {
    this.emit("boxChanged", __spreadValues({ boxId }, changed));
  }
  async init(data = ((_a) => (_a = this.file) == null ? void 0 : _a.data)(), fileName = this.fileName) {
    if (data instanceof ArrayBuffer) {
      if (!data.byteLength)
        return this.load({});
      const patcherIn = await new Response(data).json();
      const splitName = fileName.split(".");
      const ext = splitName.pop();
      const extMap = { daisy: "daisy" };
      return this.load(patcherIn, extMap[ext] || "daisy");
    }
    return this.load(data || {});
  }
  async load(patcherIn, modeIn) {
    this._state.isReady = false;
    this._state.preventEmitChanged = true;
    await this.unload();
    if (typeof patcherIn !== "object") {
      this._state.isReady = true;
      this._state.preventEmitChanged = false;
      this.emit("ready");
      return this;
    }
    await this.env.taskMgr.newTask(this, "Loading patcher...", async (onUpdate) => {
      var _a;
      this.props.mode = ((_a = patcherIn.props) == null ? void 0 : _a.mode) || modeIn || "daisy";
      this.state.pkgMgr = new _PackageManager__WEBPACK_IMPORTED_MODULE_5__["default"](this);
      const { mode } = this.props;
      const $init = [];
      onUpdate("Decoding Patcher...");
      let patcher;
      if ("data" in patcherIn && "daisy" in patcherIn) {
        patcher = patcherIn.patcher;
      } else {
        patcher = patcherIn;
      }
      if (patcher.props)
        this.props = __spreadProps(__spreadValues(__spreadValues({}, this.props), patcher.props), { mode });
      if (Array.isArray(this.props.bgColor))
        this.props.bgColor = `rgba(${this.props.bgColor.join(", ")})`;
      if (Array.isArray(this.props.editingBgColor))
        this.props.editingBgColor = `rgba(${this.props.editingBgColor.join(", ")})`;
      if (mode === "daisy" && this.props.dependencies) {
        const { dependencies } = this.props;
        if (!Array.isArray(dependencies)) {
          this.props.dependencies = [];
          for (const key in dependencies) {
            this.props.dependencies.push([key, dependencies[key]]);
          }
        }
      }
      onUpdate("Initializing Packages...");
      await this._state.pkgMgr.init();
      onUpdate("Creating Boxes...");
      if (patcher.boxes) {
        for (const id in patcher.boxes) {
          onUpdate(`Creating Boxes ${id}`);
          const $ = this.createBox(patcher.boxes[id]);
          $init.push($);
          const numID = parseInt(id.match(/\d+/)[0]);
          if (numID > this.props.boxIndexCount)
            this.props.boxIndexCount = numID;
        }
      }
      onUpdate("Initializing Boxes...");
      await Promise.all($init);
      onUpdate("Creating Lines...");
      if (patcher.lines) {
        for (const id in patcher.lines) {
          this.createLine(patcher.lines[id]);
          const numID = parseInt(id.match(/\d+/)[0]);
          if (numID > this.props.lineIndexCount)
            this.props.lineIndexCount = numID;
        }
      }
      onUpdate("Finishing...");
      this._state.isReady = true;
      this._state.preventEmitChanged = false;
      this.emitGraphChanged();
      this.emit("ready");
      await Promise.all(Object.keys(this.boxes).map((id) => this.boxes[id].postInit()));
      this.emit("postInited");
    });
    return this;
  }
  // async getPatcherNode(inputs = 2, outputs = 2) {
  //     if (this.props.mode === "jsaw" && this.env.thread === "main") {
  //         const PatcherNode = (await import("../worklets/PatcherNode")).default;
  //         await PatcherNode.register(this.audioCtx.audioWorklet);
  //         this.state.patcherNode = new PatcherNode(this.audioCtx, { env: this.env, instanceId: this.id, fileId: this.file?.id, data: this.file ? undefined : this.toSerializable(), inputs, outputs });
  //         await this.state.patcherNode.init();
  //         return this.state.patcherNode;
  //     }
  //     return null;
  // }
  async loadFromURL(url) {
    try {
      const file = await fetch(url);
      if (!file.ok)
        throw new Error();
      const parsed = await file.json();
      return this.load(parsed);
    } catch (e) {
      this.error(`Fetch file ${url} failed.`);
    }
    return this;
  }
  async loadFromString(sIn) {
    try {
      const parsed = JSON.parse(sIn);
      return this.load(parsed);
    } catch (e) {
      this.error(`Load from string: ${sIn.slice(20)}... failed.`);
    }
    return this;
  }
  async loadFromFile(file) {
    const splitName = file.name.split(".");
    const ext = splitName.pop();
    const name = splitName.join(".");
    const extMap = { daisy: "daisy" };
    if (!extMap[ext])
      return this;
    const reader = new FileReader();
    reader.onload = () => {
      let parsed;
      try {
        parsed = JSON.parse(reader.result.toString());
      } catch (e) {
        this.error(e.message);
      }
      if (parsed) {
        this.load(parsed, extMap[ext]);
        this._state.name = name;
      }
    };
    reader.onerror = () => this.error(reader.error.message);
    reader.readAsText(file, "UTF-8");
    return this;
  }
  async unload() {
    await this.emit("unload");
    if (Object.keys(this.boxes).length) {
      this._state.preventEmitChanged = true;
      await Promise.all(Object.keys(this.boxes).map((id) => this.boxes[id].destroy()));
      this._state.preventEmitChanged = false;
      this.emitGraphChanged();
    }
    this.lines = {};
    this.boxes = {};
    this.props = {
      mode: "daisy",
      dependencies: _Patcher.props.dependencies.default.slice(),
      bgColor: _Patcher.props.bgColor.default,
      editingBgColor: _Patcher.props.editingBgColor.default,
      grid: _Patcher.props.grid.default.slice(),
      openInPresentation: _Patcher.props.openInPresentation.default,
      boxIndexCount: 0,
      lineIndexCount: 0,
      objectInit: true
      // inlets: [],
      // outlets: [],
    };
    this._state.selected = [];
  }
  async destroy() {
    await this.unload();
    await super.destroy();
  }
  async addPackage(namespace, url) {
    const { dependencies } = this.props;
    dependencies.push([namespace, url]);
    this.setProps({ dependencies: dependencies.slice() });
    await this.state.pkgMgr.init();
    if (!(namespace in this.activePkg)) {
      this.setProps({
        dependencies: dependencies.filter(([id]) => id !== namespace)
      });
    }
  }
  async removePackage(id) {
    const { dependencies } = this.props;
    const i = dependencies.findIndex((t) => t[0] === id);
    if (i === -1)
      return;
    dependencies.splice(i, 1);
    this.setProps({ dependencies: dependencies.slice() });
    await this.state.pkgMgr.init();
  }
  async createBox(boxIn) {
    if (!boxIn.id || boxIn.id in this.boxes)
      boxIn.id = "box-" + ++this.props.boxIndexCount;
    const box = new _Box__WEBPACK_IMPORTED_MODULE_3__["default"](this, boxIn);
    this.boxes[box.id] = box;
    await box.init();
    this.emitGraphChanged();
    this.changeIO();
    return box;
  }
  getObjectConstructor(parsed) {
    const className = parsed.class;
    if (typeof className !== "string" || className.length === 0)
      return this.activeLib.EmptyObject;
    if (this.activeLib[className])
      return this.activeLib[className];
    return this.activeLib.InvalidObject;
  }
  getObjectMeta(parsed) {
    return this.getObjectConstructor(parsed).meta;
  }
  async changeBoxText(boxId, text) {
    const oldText = this.boxes[boxId].text;
    if (oldText === text)
      return this.boxes[boxId];
    await this.boxes[boxId].changeText(text);
    this.emit("changeBoxText", { oldText, text, boxId });
    this.emitGraphChanged();
    return this.boxes[boxId];
  }
  async deleteBox(boxId) {
    const box = this.boxes[boxId];
    if (!box)
      return null;
    await box.destroy();
    this.emitGraphChanged();
    this.changeIO();
    return box;
  }
  createLine(lineIn) {
    if (!this.canCreateLine(lineIn))
      return null;
    if (!lineIn.id || lineIn.id in this.lines)
      lineIn.id = "line-" + ++this.props.lineIndexCount;
    const line = new _Line__WEBPACK_IMPORTED_MODULE_2__["default"](this, lineIn);
    this.lines[line.id] = line;
    line.enable();
    this.emitGraphChanged();
    return line;
  }
  canCreateLine(lineIn) {
    if (lineIn.aIo[1] >= this.boxes[lineIn.aIo[0]].ios.length)
      return false;
    if (this.getLinesByBox(lineIn.aIo[0], lineIn.bIo[0], lineIn.aIo[1], lineIn.bIo[1]).length > 0)
      return false;
    return true;
  }
  deleteLine(lineId) {
    const line = this.lines[lineId];
    if (!line)
      return null;
    line.destroy();
    if (!this._state.preventEmitChanged)
      this.emit("passiveDeleteLine", line);
    this.emitGraphChanged();
    return line;
  }
  changeLineA(lineId, aId, aIo) {
    const line = this.lines[lineId];
    const oldA = [...line.aIo];
    const newA = [aId, aIo];
    line.setA(newA);
    this.emitGraphChanged();
    return { lineId, oldA, newA };
  }
  changeLineB(lineId, bId, bIo) {
    const line = this.lines[lineId];
    const oldB = [...line.bIo];
    const newB = [bId, bIo];
    line.setB(newB);
    this.emitGraphChanged();
    return { lineId, oldB, newB };
  }
  // changeLineSrc(lineId: string, srcId: string, srcOutlet: number) {
  //     const line = this.lines[lineId];
  //     // if (this.instance.getLinesByBox(srcId, line.destId, srcOutlet, line.destInlet).length > 0) return line;
  //     const oldSrc: [string, number] = [line.srcId, line.srcOutlet];
  //     const src: [string, number] = [srcId, srcOutlet];
  //     line.setSrc(src);
  //     this.emitGraphChanged();
  //     return { lineId, oldSrc, src };
  // }
  // changeLineDest(lineId: string, destId: string, destOutlet: number) {
  //     const line = this.lines[lineId];
  //     // if (this.getLinesByBox(line.srcId, destId, line.destInlet, destOutlet).length > 0) return line;
  //     const oldDest: [string, number] = [line.destId, line.destInlet];
  //     const dest: [string, number] = [destId, destOutlet];
  //     line.setDest(dest);
  //     this.emitGraphChanged();
  //     return { lineId, oldDest, dest };
  // }
  getLinesByAId(aId) {
    const result = [];
    for (let i = 0; i < this.boxes[aId].ios.length; i++) {
      result[i] = [];
    }
    for (const id in this.lines) {
      const line = this.lines[id];
      if (line && line.aId === aId) {
        const bIo = line.bIo;
        if (!result[bIo[1]])
          result[bIo[1]] = [id];
        else
          result[bIo[1]].push(id);
      }
    }
    return result;
  }
  getLinesByBId(bId) {
    const result = [];
    for (let i = 0; i < this.boxes[bId].ios.length; i++) {
      result[i] = [];
    }
    for (const id in this.lines) {
      const line = this.lines[id];
      if (line && line.bId === bId) {
        const aIo = line.aIo;
        if (!result[aIo[1]])
          result[aIo[1]] = [id];
        else
          result[aIo[1]].push(id);
      }
    }
    return result;
  }
  // getLinesBySrcID(srcId: string) {
  //     const result = [];
  //     for (let i = 0; i < this.boxes[srcId].outlets; i++) { // Array.fill fills the array with same instance
  //         result[i] = [];
  //     }
  //     for (const id in this.lines) {
  //         const line = this.lines[id];
  //         if (line && line.srcId === srcId) {
  //             const srcOutlet = line.srcOutlet;
  //             if (!result[srcOutlet]) result[srcOutlet] = [id];
  //             else result[srcOutlet].push(id);
  //         }
  //     }
  //     return result;
  // }
  // getLinesByDestID(destId: string) {
  //     const result = [];
  //     for (let i = 0; i < this.boxes[destId].inlets; i++) {
  //         result[i] = [];
  //     }
  //     for (const id in this.lines) {
  //         const line = this.lines[id];
  //         if (line && line.destId === destId) {
  //             const destInlet = line.destInlet;
  //             if (!result[destInlet]) result[destInlet] = [id];
  //             else result[destInlet].push(id);
  //         }
  //     }
  //     return result;
  // }
  getLinesByBox(aId, bId, aIo, bIo) {
    const result = [];
    let aIds = [];
    let bIds = [];
    const aIosWrapped = this.getLinesByAId(aId);
    if (aIo !== void 0)
      aIds = aIosWrapped[aIo];
    else
      aIosWrapped.forEach((el) => aIds = aIds.concat(el));
    const bIosWrapped = this.getLinesByBId(bId);
    if (bIo !== void 0)
      bIds = bIosWrapped[bIo];
    else
      bIosWrapped.forEach((el) => bIds = bIds.concat(el));
    if (!aIds || !bIds)
      return result;
    bIds.forEach(
      (idOut) => bIds.forEach((idIn) => idIn === idOut ? result.push(idIn) : void 0)
    );
    return result;
  }
  // getLinesByIo(boxId: string, io: number) {
  //     const box = this.boxes[boxId];
  //     if (!box || io > box.ios.length) {
  //         return [];
  //     }
  //     const lines = [];
  //     if (box.text.startsWith("tie")) {
  //         for (let key in this.lines) {
  //             let line = this.lines[key];
  //             if (line.aId === boxId || line.bId === boxId) {
  //                 lines.push(line);
  //             }
  //         }
  //     } else {
  //         for (let key in this.lines) {
  //             let line = this.lines[key];
  //             if ((line.aId === boxId && line.aIo[1] === io) || (line.bId === boxId && line.bIo[1] === io)) {
  //                 lines.push(line);
  //             }
  //         }
  //     }
  //     return lines;
  // }
  // getConnectedPins(boxId: string, io: number) {
  //     let lines = this.getLinesByIo(boxId, io);
  //     let all_boxes = lines.flatMap(line => [line.aIo, line.bIo]);
  //     let unique_boxes = Array.from(new Set(all_boxes));
  //     return unique_boxes.map(([id, io]) => this.boxes[id].meta.ios[io].pin);
  // }
  fn(data, inlet) {
  }
  inputAudio(input, buffer) {
    this.emitSync("audioInput", { input, buffer });
  }
  inputParam(param, buffer) {
    this.emitSync("paramInput", { param, buffer });
  }
  outputAudio(output, buffer) {
    this.emitSync("audioOutput", { output, buffer });
  }
  // outlet(outlet: number, data: any) {
  //     this.emit("dataOutput", { data, outlet });
  // }
  changeIO() {
    this.emit("ioChanged", this.meta);
  }
  get meta() {
    const { metaFromPatcher } = this;
    return __spreadValues({
      name: this.props.name || "",
      icon: null,
      version: this.props.version || "",
      description: this.props.description || ""
    }, metaFromPatcher);
  }
  get metaFromPatcher() {
    const inlets = /* @__PURE__ */ new Map();
    const outlets = /* @__PURE__ */ new Map();
    for (const boxId in this.boxes) {
      const box = this.boxes[boxId];
      if (box.meta.patcherInlets) {
        for (const [index, inlet] of box.meta.patcherInlets.entries()) {
          inlets.set([boxId, index], inlet);
        }
      }
      if (box.meta.patcherOutlets) {
        for (const [index, outlet] of box.meta.patcherOutlets.entries()) {
          outlets.set([boxId, index], outlet);
        }
      }
    }
    return {
      args: [],
      props: {},
      patcherInlets: inlets,
      patcherOutlets: outlets
    };
  }
  log(message) {
    this.newLog("none", "Patcher", message, this);
  }
  error(message) {
    this.newLog("error", "Patcher", message, this);
  }
  newLog(errorLevel, title, message, emitter) {
    this.env.newLog(errorLevel, title, message, emitter);
  }
  setProps(props) {
    let changed = false;
    const oldProps = {};
    for (const keyIn in props) {
      const key = keyIn;
      if (this.props[key] === props[key])
        continue;
      changed = true;
      oldProps[key] = this.props[key];
      this.props[key] = props[key];
      this.emit(key, props[key]);
    }
    if (changed) {
      this.emit("propsChanged", { props, oldProps });
      this.emitChanged();
    }
  }
  get publicProps() {
    const { dependencies, bgColor, editingBgColor, grid, openInPresentation } = this.props;
    return {
      dependencies,
      bgColor,
      editingBgColor,
      grid,
      openInPresentation
    };
  }
  toString(spacing) {
    const { props, meta } = this;
    const boxes = {};
    const lines = {};
    const inlets = Array.from(meta.patcherInlets.entries()).map(([key, _]) => key);
    const outlets = Array.from(meta.patcherOutlets.entries()).map(([key, _]) => key);
    for (const id in this.boxes) {
      boxes[id] = this.boxes[id].toSerializable();
    }
    for (const id in this.lines) {
      lines[id] = this.lines[id].toSerializable();
    }
    return JSON.stringify({ boxes, lines, props, inlets, outlets }, void 0, spacing);
  }
  toSerializable() {
    return JSON.parse(this.toString());
  }
  serialize() {
    return new Blob([this.toString()]).arrayBuffer();
  }
};
let Patcher = _Patcher;
Patcher.props = {
  dependencies: {
    type: "object",
    description: "Patcher dependencies",
    default: []
  },
  bgColor: {
    type: "color",
    description: "Background color",
    default: "rgba(61, 65, 70, 1)"
  },
  editingBgColor: {
    type: "color",
    description: "Background color while unlocked",
    default: "rgba(82, 87, 94, 1)"
  },
  grid: {
    type: "object",
    description: "Grid size",
    default: [15, 15]
  },
  openInPresentation: {
    type: "boolean",
    description: "Open patcher in presentation",
    default: false
  }
};



/***/ })

}]);
//# sourceMappingURL=0d0404f377a2a21f7a3a.js.map