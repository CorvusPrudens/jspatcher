"use strict";
{

/***/ "./src/core/hardware/Box.ts":
/*!**********************************!*\
  !*** ./src/core/hardware/Box.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HardwareBox)
/* harmony export */ });
/* harmony import */ var _utils_TypedEventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/TypedEventEmitter */ "./src/utils/TypedEventEmitter.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");



class HardwareBox extends _utils_TypedEventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(patcherIn, boxIn) {
    var _a;
    super();
    this.text = "";
    this.id = boxIn.id;
    this.text = boxIn.text;
    this.args = boxIn.args || [];
    this.props = boxIn.props || {};
    this.ios = boxIn.ios;
    this._ioLines = new Array(this.ios).fill(null).map(() => /* @__PURE__ */ new Set());
    this.rect = boxIn.rect;
    this.background = boxIn.background;
    this.presentation = boxIn.presentation;
    this.presentationRect = boxIn.presentationRect;
    if (!this.presentationRect)
      this.presentationRect = this.rect.slice();
    this.zIndex = boxIn.zIndex || 0;
    this.data = boxIn.data || ((_a = boxIn.prevData) == null ? void 0 : _a.storage) || {};
    this._editing = !!boxIn._editing;
    this._patcher = patcherIn;
    this.on("dataUpdated", () => this._patcher.emitChanged());
    this.on("argsUpdated", () => this._patcher.emitChanged());
    this.on("propsUpdated", () => this._patcher.emitChanged());
  }
  async init() {
    this._parsed = HardwareBox.parseObjText(this.text);
    const newMeta = this._patcher.getObjectMeta(this._parsed);
    for (const key in this.props) {
      if (!newMeta.props[key])
        delete this.props[key];
    }
    if (this._parsed.args.length)
      this.args = this._parsed.args;
    Object.assign(this.props, this._parsed.props);
    const Constructor = this._patcher.getObjectConstructor(this._parsed);
    if (Constructor === this._patcher.activeLib.InvalidObject) {
      this.error(`Object ${this._parsed.class} not found.`);
    }
    this._Object = Constructor;
    if (!this.size.every((v) => v > 0))
      this.size = this.defaultSize;
    if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isTPresentationRect)(this.presentationRect) || this.presentationSize.every((v) => typeof v === "number") && !this.presentationSize.every((v) => v > 0))
      this.presentationSize = this.defaultSize;
    if (this.objectInit) {
      this._object = new Constructor(this, this._patcher);
      await this._object.init();
    }
    return this;
  }
  async postInit() {
    var _a;
    await ((_a = this._object) == null ? void 0 : _a.postInit());
    return this;
  }
  /**
   * Main function when receive data from a inlet (base 0)
   */
  fn(inlet, data) {
    var _a;
    (_a = this._object) == null ? void 0 : _a.fn(inlet, data);
    return this;
  }
  get UI() {
    return this._Object.UI;
  }
  get defaultSize() {
    var _a;
    return ((_a = this.UI) == null ? void 0 : _a.defaultSize) || [90, 20];
  }
  get meta() {
    var _a;
    return (_a = this._object) == null ? void 0 : _a.meta;
  }
  get ioLines() {
    return this._ioLines;
  }
  get objectInit() {
    return this._patcher.props.objectInit;
  }
  get object() {
    return this._object;
  }
  set object(oIn) {
    this._object = oIn;
  }
  get Object() {
    return this._Object;
  }
  get parsed() {
    return this._parsed;
  }
  addIoLine(line, isA) {
    const index = isA ? line.aIo[1] : line.bIo[1];
    if (!this._ioLines[index])
      this._ioLines[index] = /* @__PURE__ */ new Set();
    this._ioLines[index].add(line);
  }
  removeIoLine(line, isA) {
    const index = isA ? line.aIo[1] : line.bIo[1];
    if (this._ioLines[index])
      this._ioLines[index].delete(line);
  }
  setIos(positions) {
    const lines = this.allLines;
    lines.forEach((line) => line.disable());
    this.ios = positions;
    lines.forEach((line) => line.enable());
    const linesSetLen = this._ioLines.length;
    if (positions.length > linesSetLen)
      this._ioLines.push(...new Array(positions.length - linesSetLen).fill(null).map(() => /* @__PURE__ */ new Set()));
    else if (positions.length < linesSetLen)
      this._ioLines.splice(positions.length);
    this._ioLines.forEach((set) => set.forEach((line) => {
      line.uiUpdateA();
      line.uiUpdateB();
    }));
    this.emit("ioCountChanged", this);
  }
  getIoPos(port) {
    const { rect, ios } = this;
    const [left, top, width, height] = rect;
    const [x1, y1, x2, y2] = {
      "T": [left, top, left + width, top],
      "B": [left, top + height, left + width, top + height],
      "L": [left, top, left, top + height],
      "R": [left + width, top, left + width, top + height]
    }[ios[port].edge];
    let [diffx, diffy] = [x2 - x1, y2 - y1];
    let magnitude = ios[port].position;
    return { top: y1 + diffy * magnitude, left: x1 + diffx * magnitude };
  }
  get ioPositions() {
    const positions = [];
    for (let i = 0; i < this.ios.length; i++) {
      positions[i] = this.getIoPos(i);
    }
    return positions;
  }
  get allLines() {
    return this._ioLines.flatMap((set) => Array.from(set.values()));
  }
  connectedIo(io, otherBoxIo, otherBoxId, lineId) {
    if (this._object)
      this._object.connectedIo(io, otherBoxIo, otherBoxId, lineId);
    this.emit("connectedPort", { io });
    return this;
  }
  disconnectedIo(io, otherBoxIo, otherBoxId, lineId) {
    if (this._object)
      this._object.disconnectedIo(io, otherBoxIo, otherBoxId, lineId);
    this.emit("connectedPort", { io });
    return this;
  }
  // // called when inlet or outlet are connected or disconnected
  // connectedOutlet(outlet: number, destBoxId: string, destInlet: number, lineId: string) {
  //     if (this._object) this._object.connectedOutlet(outlet, destBoxId, destInlet, lineId);
  //     this.emit("connectedPort", { isSrc: true, i: outlet });
  //     return this;
  // }
  // connectedInlet(inlet: number, srcBoxId: string, srcOutlet: number, lineId: string) {
  //     if (this._object) this._object.connectedInlet(inlet, srcBoxId, srcOutlet, lineId);
  //     this.emit("connectedPort", { isSrc: false, i: inlet });
  //     return this;
  // }
  // disconnectedOutlet(outlet: number, destBoxId: string, destInlet: number, lineId: string) {
  //     if (this._object) this._object.disconnectedOutlet(outlet, destBoxId, destInlet, lineId);
  //     const last = this._patcher.getLinesBySrcID(this.id)[outlet].length === 1;
  //     this.emit("disconnectedPort", { isSrc: true, i: outlet, last });
  //     return this;
  // }
  // disconnectedInlet(inlet: number, srcBoxId: string, srcOutlet: number, lineId: string) {
  //     if (this._object) this._object.disconnectedInlet(inlet, srcBoxId, srcOutlet, lineId);
  //     const last = this._patcher.getLinesByDestID(this.id)[inlet].length === 1;
  //     this.emit("disconnectedPort", { isSrc: false, i: inlet, last });
  //     return this;
  // }
  // isOutletTo(outlet: number, box: HardwareBox, inlet: number) {
  //     const iterator = this._outletLines[outlet].values();
  //     let r: IteratorResult<HardwareLine, HardwareLine>;
  //     while (!(r = iterator.next()).done) {
  //         const line = r.value;
  //         if (line.destBox === box && line.destInlet === inlet) return true;
  //     }
  //     return false;
  // }
  // isInletFrom(inlet: number, box: HardwareBox, outlet: number) {
  //     const iterator = this._inletLines[inlet].values();
  //     let r: IteratorResult<HardwareLine, HardwareLine>;
  //     while (!(r = iterator.next()).done) {
  //         const line = r.value;
  //         if (line.srcBox === box && line.srcOutlet === outlet) return true;
  //     }
  //     return false;
  // }
  isConnectedTo(io, otherBox, otherIo) {
    const iterator = this._ioLines[io].values();
    let iter;
    while (!(iter = iterator.next()).done) {
      const line = iter.value;
      if (line.aBox === otherBox && line.aIo[1] === otherIo || line.bBox === otherBox && line.bIo[1] === otherIo)
        return true;
    }
    return false;
  }
  async changeText(textIn, force) {
    var _a, _b;
    if (!force && textIn === this.text)
      return this;
    const { defaultSize: oldDefaultSize } = this;
    this.allLines.forEach((line) => line.disable());
    await ((_a = this._object) == null ? void 0 : _a.destroy());
    this.text = textIn;
    this.args = [];
    await this.init();
    this.allLines.forEach((line) => line.enable());
    const { defaultSize } = this;
    if (!defaultSize.every((v, i) => v === oldDefaultSize[i])) {
      this.size = defaultSize;
      this.presentationSize = defaultSize;
    }
    this.emit("textChanged", this);
    (_b = this._object) == null ? void 0 : _b.setMeta(this._object.meta);
    await this.postInit();
    return this;
  }
  update(e) {
    const { args, props } = e;
    if (args)
      this.args = args;
    if (props) {
      if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isTRect)(props.rect)) {
        this.setRect(props.rect);
        delete props.rect;
      }
      if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isTPresentationRect)(props.presentationRect)) {
        this.setPresentationRect(props.presentationRect);
        delete props.presentationRect;
      }
      if (typeof props.presentation === "boolean") {
        this.setPresentation(props.presentation);
        delete props.presentation;
      }
      if (typeof props.background === "boolean") {
        this.setBackground(props.background);
        delete props.background;
      }
      this.props = Object.assign(this.props, props);
    }
    return this;
  }
  get position() {
    return this.rect.slice(0, 2);
  }
  set position([leftIn, topIn]) {
    const [left, top, width, height] = this.rect;
    this.setRect([typeof leftIn === "number" ? leftIn : left, typeof topIn === "number" ? topIn : top, width, height]);
  }
  get presentationPosition() {
    return this.presentationRect.slice(0, 2);
  }
  set presentationPosition([leftIn, topIn]) {
    const [left, top, width, height] = this.presentationRect;
    this.setPresentationRect([typeof leftIn === "number" || typeof leftIn === "string" ? leftIn : left, typeof topIn === "number" || typeof topIn === "string" ? topIn : top, width, height]);
  }
  get size() {
    return this.rect.slice(2);
  }
  set size([widthIn, heightIn]) {
    const [left, top, width, height] = this.rect;
    this.setRect([left, top, widthIn || width, heightIn || height]);
  }
  get presentationSize() {
    return this.presentationRect.slice(2);
  }
  set presentationSize([widthIn, heightIn]) {
    const [left, top, width, height] = this.presentationRect;
    this.setPresentationRect([left, top, widthIn || width, heightIn || height]);
  }
  getLeft(inPresentation = false) {
    const rectKey = inPresentation ? "presentationRect" : "rect";
    return this[rectKey][0];
  }
  setLeft(leftIn, inPresentation = false) {
    const positionKey = inPresentation ? "presentationPosition" : "position";
    this[positionKey] = [leftIn, void 0];
  }
  getTop(inPresentation = false) {
    const rectKey = inPresentation ? "presentationRect" : "rect";
    return this[rectKey][1];
  }
  setTop(topIn, inPresentation = false) {
    const positionKey = inPresentation ? "presentationPosition" : "position";
    this[positionKey] = [void 0, topIn];
  }
  getWidth(inPresentation = false) {
    const rectKey = inPresentation ? "presentationRect" : "rect";
    return this[rectKey][2];
  }
  setWidth(widthIn, inPresentation = false) {
    const sizeKey = inPresentation ? "presentationSize" : "size";
    this[sizeKey] = [widthIn, void 0];
  }
  getHeight(inPresentation = false) {
    const rectKey = inPresentation ? "presentationRect" : "rect";
    return this[rectKey][3];
  }
  setHeight(heightIn, inPresentation = false) {
    const sizeKey = inPresentation ? "presentationSize" : "size";
    this[sizeKey] = [void 0, heightIn];
  }
  setBackground(bool) {
    if (!!this.background === !!bool)
      return this;
    this.background = bool;
    this.emit("backgroundChanged", this);
    return this;
  }
  setPresentation(bool) {
    if (!!this.presentation === !!bool)
      return this;
    this.presentation = bool;
    if (bool)
      this.presentationRect = this.rect.slice();
    this.emit("presentationChanged", this);
    return this;
  }
  setRect(rect) {
    if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isTRect)(rect))
      return this;
    rect[0] = Math.max(0, rect[0]);
    rect[1] = Math.max(0, rect[1]);
    rect[2] = Math.max(15, rect[2]);
    rect[3] = Math.max(15, rect[3]);
    this.rect = rect;
    this.ioLines.forEach((set) => set.forEach((line) => {
      line.uiUpdateA();
      line.uiUpdateB();
    }));
    this.emit("rectChanged", this);
    return this;
  }
  setPresentationRect(rect) {
    if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isTPresentationRect)(rect))
      return this;
    if (typeof rect[0] === "number")
      rect[0] = Math.max(0, rect[0]);
    if (typeof rect[1] === "number")
      rect[1] = Math.max(0, rect[1]);
    if (typeof rect[2] === "number")
      rect[2] = Math.max(15, rect[2]);
    if (typeof rect[3] === "number")
      rect[3] = Math.max(15, rect[3]);
    this.presentationRect = rect;
    this.emit("presentationRectChanged", this);
    return this;
  }
  getIsMovable(inPresentation = false) {
    if (!inPresentation)
      return true;
    return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isRectMovable)(this.presentationRect);
  }
  getIsResizable(inPresentation = false) {
    if (!inPresentation)
      return true;
    return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isRectResizable)(this.presentationRect);
  }
  setZIndex(zIndex) {
    const oldZIndex = this.zIndex;
    this.zIndex = zIndex;
    this.undoable({ oldZIndex, zIndex });
    this._patcher.emit("zIndexChanged", { boxId: this.id, zIndex });
  }
  error(text) {
    this.emit("error", text);
    this._patcher.newLog("error", "Patcher", text, this);
  }
  highlight() {
    this._patcher.emit("highlightBox", this.id);
  }
  highlightPort(isSrc, portIndex) {
    this._patcher.emit("highlightPort", { boxId: this.id, isSrc, i: portIndex });
  }
  undoable(e) {
    this._patcher.boxChanged(this.id, e);
  }
  async changeObject({ args, props, state, zIndex }, options) {
    var _a, _b, _c;
    if (args)
      await ((_a = this._object) == null ? void 0 : _a.updateArgs(args, options));
    if (props)
      await ((_b = this._object) == null ? void 0 : _b.updateProps(props, options));
    if (state)
      await ((_c = this._object) == null ? void 0 : _c.updateState(state, options));
  }
  async destroy() {
    var _a;
    this.allLines.forEach((line) => this._patcher.deleteLine(line.id));
    delete this._patcher.boxes[this.id];
    await ((_a = this._object) == null ? void 0 : _a.destroy());
    return this;
  }
  static parseObjText(strIn) {
    const REGEX = /`([^`]*)`|[^\s]+/gi;
    const strArray = [];
    let match = REGEX.exec(strIn);
    while (match != null) {
      strArray.push(match[1] ? match[1] : match[0]);
      match = REGEX.exec(strIn);
    }
    const objOut = { class: "", args: [], props: {} };
    let lastProp;
    if (strArray.length)
      objOut.class = strArray.shift();
    while (strArray.length) {
      const el = strArray.shift();
      if (typeof lastProp === "undefined" && el.charAt(0) !== "@") {
        try {
          objOut.args.push(JSON.parse(el));
        } catch (e) {
          objOut.args.push(el);
        }
        continue;
      }
      if (el.length > 1 && el.charAt(0) === "@") {
        lastProp = el.substr(1);
        objOut.props[lastProp] = [];
        continue;
      }
      try {
        objOut.props[lastProp].push(JSON.parse(el));
      } catch (e) {
        objOut.props[lastProp].push(el);
      }
    }
    for (const key in objOut.props) {
      if (objOut.props[key].length === 0)
        objOut.props[key] = true;
      else if (objOut.props[key].length === 1)
        objOut.props[key] = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.parseToPrimitive)(objOut.props[key][0]);
      else
        objOut.props[key] = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.parseToPrimitive)(objOut.props[key].join(" "));
    }
    return objOut;
  }
  toString() {
    const { id, text, ios, rect, background, presentation, presentationRect, args, props, data, zIndex } = this;
    const defaultProps = {};
    for (const key in this.meta.props) {
      if (!(key in props)) {
        defaultProps[key] = this.meta.props[key].default;
      } else {
        defaultProps[key] = props[key];
      }
    }
    const pinNames = this.meta.ios.map((io) => io.pin.pinName);
    return JSON.stringify({ id, text, pinNames, rect, background, presentation, presentationRect, args, props: defaultProps, data, zIndex });
  }
  toSerializable() {
    return JSON.parse(this.toString());
  }
}


/***/ }),

/***/ "./src/core/hardware/Compatibility.ts":
/*!********************************************!*\
  !*** ./src/core/hardware/Compatibility.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compatibleAnalog": () => (/* binding */ compatibleAnalog),
/* harmony export */   "compatibleBus": () => (/* binding */ compatibleBus),
/* harmony export */   "compatibleDigital": () => (/* binding */ compatibleDigital),
/* harmony export */   "compatiblePins": () => (/* binding */ compatiblePins)
/* harmony export */ });

function compatibleBus(pins) {
  return false;
}
function compatibleDigital(pins) {
  let num_outputs = pins.filter((p) => p.digitalOutput && !p.digitalInput).length;
  if (num_outputs > 1) {
    return false;
  }
  let outputs = pins.map((p, i) => ({ p, i })).filter(({ p }) => p.digitalOutput);
  let some_valid_config = false;
  for (const output of outputs) {
    const { p: pin, i: index } = output;
    if (pins.filter((_, i) => i !== index).every((p) => p.digitalOutput || p.tie)) {
      some_valid_config = true;
      break;
    }
  }
  return some_valid_config;
}
function compatibleAnalog(pins) {
  let num_outputs = pins.filter((p) => p.analogOutput && !p.analogInput).length;
  if (num_outputs > 1) {
    return false;
  }
  let outputs = pins.map((p, i) => ({ p, i })).filter(({ p }) => p.analogOutput);
  let some_valid_config = false;
  for (const output of outputs) {
    const { p: pin, i: index } = output;
    if (pins.filter((_, i) => i !== index).every((p) => p.analogInput || p.tie)) {
      some_valid_config = true;
      break;
    }
  }
  return some_valid_config;
}
function compatiblePins(pins) {
  let compatibilities = [
    compatibleBus,
    compatibleDigital,
    compatibleAnalog
  ];
  if (compatibilities.some((f) => f(pins))) {
    return true;
  }
  return false;
}


/***/ }),

/***/ "./src/core/hardware/HardwareEditor.ts":
/*!*********************************************!*\
  !*** ./src/core/hardware/HardwareEditor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatcherEditor)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _file_FileEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../file/FileEditor */ "./src/core/file/FileEditor.ts");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box */ "./src/core/hardware/Box.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Line */ "./src/core/hardware/Line.ts");
/* harmony import */ var _Compatibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Compatibility */ "./src/core/hardware/Compatibility.ts");

var __defProp = Object.defineProperty;
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





class PatcherEditor extends _file_FileEditor__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(instance) {
    super(instance);
    this.state = {
      locked: false,
      presentation: false,
      showGrid: true,
      snapToGrid: true,
      selectAfterEdit: true,
      selected: []
    };
    this.handleChangeBoxText = (e) => this.emit("changeBoxText", e);
    this.handlePassiveDeleteLine = (e) => this.emit("delete", { boxes: {}, lines: { [e.id]: e.toSerializable() } });
    this.handleBoxChanged = (e) => this.emit("boxChanged", e);
    this.handlePropsChanged = (e) => this.emit("propsChanged", e);
    this.handleZIndexChanged = (e) => this.emit("zIndexChanged", e);
    this.handleHighlightBox = (e) => this.emit("highlightBox", e);
    this.handleHighlightPort = (e) => this.emit("highlightPort", e);
    this.handleChanged = () => this.instance.emitChanged();
    const { openInPresentation } = this.props;
    this.setState({
      locked: false,
      presentation: !!openInPresentation,
      showGrid: true,
      snapToGrid: true,
      selectAfterEdit: true,
      selected: []
    });
  }
  static async fromProjectItem({ file, env, project, instanceId }) {
    const patcher = await file.instantiate({ env, project, instanceId });
    const editor = new this(patcher);
    return editor.init();
  }
  get isLocked() {
    return this.state.locked;
  }
  get boxes() {
    return this.instance.boxes;
  }
  get lines() {
    return this.instance.lines;
  }
  get props() {
    return this.instance.props;
  }
  get publicProps() {
    return this.instance.publicProps;
  }
  get fileExtension() {
    return this.instance.fileExtension;
  }
  get fileName() {
    return this.instance.fileName;
  }
  get fileIcon() {
    return "sitemap";
  }
  async init() {
    if (!this.instance.isReady) {
      await new Promise((resolve, reject) => {
        const handleReady = () => {
          resolve();
          this.instance.off("ready", handleReady);
        };
        this.instance.on("ready", handleReady);
      });
    }
    this.on("changed", this.handleChanged);
    this.instance.on("changeBoxText", this.handleChangeBoxText);
    this.instance.on("passiveDeleteLine", this.handlePassiveDeleteLine);
    this.instance.on("boxChanged", this.handleBoxChanged);
    this.instance.on("propsChanged", this.handlePropsChanged);
    this.instance.on("zIndexChanged", this.handleZIndexChanged);
    this.instance.on("highlightBox", this.handleHighlightBox);
    this.instance.on("highlightPort", this.handleHighlightPort);
    const { openInPresentation } = this.props;
    this.setState({
      locked: false,
      presentation: !!openInPresentation,
      showGrid: true,
      snapToGrid: true,
      selectAfterEdit: true,
      selected: []
    });
    this._isReady = true;
    this.emit("ready");
    return this;
  }
  setState(state) {
    let changed = false;
    for (const keyIn in state) {
      const key = keyIn;
      if (this.state[key] === state[key])
        continue;
      changed = true;
      if (key === "locked" || key === "presentation")
        this.deselectAll();
      this.state[key] = state[key];
      this.emit(key, state[key]);
    }
    return changed;
  }
  async createBox(boxIn) {
    const box = await this.instance.createBox(boxIn);
    this.emit("create", { boxes: { [box.id]: box.toSerializable() }, lines: {} });
    await box.postInit();
    return box;
  }
  async createBoxFromFile(file, boxIn) {
    const path = file.projectPath;
    const type = file.type;
    const ext = file.fileExtension;
    if (type === "patcher") {
      const extMap = this.props.mode === "daisy" ? { json: "p", jspat: "p", maxpat: "max", gendsp: "gen", dsppat: "pfaust" } : this.props.mode === "faust" ? { gendsp: "gen", dsppat: "p" } : this.props.mode === "gen" ? { gendsp: "gen" } : {};
      const obj = extMap[ext];
      if (obj)
        await this.createBox(__spreadValues({ text: `${obj} ${path}` }, boxIn));
    } else if (type === "audio") {
      await this.createBox(__spreadValues({ text: `buffer~ ${path}` }, boxIn));
    } else if (type === "image") {
      await this.createBox(__spreadValues({ text: `img ${path}` }, boxIn));
    } else if (type === "text") {
      await this.createBox(__spreadValues({ text: `ptext ${path}` }, boxIn));
    }
  }
  async deleteBox(boxId) {
    this.deselect(boxId);
    const box = await this.instance.deleteBox(boxId);
    if (!box)
      return null;
    this.emit("delete", { boxes: { [box.id]: box.toSerializable() }, lines: {} });
    return box;
  }
  createLine(lineIn) {
    const line = this.instance.createLine(lineIn);
    if (!line)
      return null;
    this.emit("create", { boxes: {}, lines: { [line.id]: line.toSerializable() } });
    return line;
  }
  deleteLine(lineId) {
    this.deselect(lineId);
    const line = this.instance.deleteLine(lineId);
    if (!line)
      return null;
    this.emit("delete", { boxes: {}, lines: { [line.id]: line.toSerializable() } });
    return line;
  }
  changeLineA(lineId, aId, aIo) {
    const e = this.instance.changeLineA(lineId, aId, aIo);
    this.emit("changeLineA", e);
  }
  changeLineB(lineId, bId, bIo) {
    const e = this.instance.changeLineB(lineId, bId, bIo);
    this.emit("changeLineB", e);
  }
  async changeBox(boxId, change) {
    var _a, _b;
    if (typeof change.zIndex === "number")
      (_a = this.instance.boxes[boxId]) == null ? void 0 : _a.setZIndex(change.zIndex);
    await ((_b = this.instance.boxes[boxId]) == null ? void 0 : _b.changeObject(change));
  }
  select(...ids) {
    ids.forEach((id) => {
      if (this.state.selected.indexOf(id) >= 0)
        return;
      if (this.boxes[id] || this.lines[id])
        this.state.selected.push(id);
    });
    this.emit("selected", this.state.selected.slice());
  }
  selectAllBoxes() {
    let ids = Object.keys(this.boxes);
    if (this.state.presentation)
      ids = ids.filter((id) => this.boxes[id].presentation);
    this.state.selected = ids;
    this.emit("selected", ids);
  }
  selectOnly(...ids) {
    this.state.selected = [];
    this.select(...ids);
  }
  deselect(...ids) {
    ids.forEach((id) => {
      const i = this.state.selected.indexOf(id);
      if (i === -1)
        return;
      this.state.selected.splice(i, 1);
    });
    this.emit("selected", this.state.selected.slice());
  }
  deselectAll() {
    this.state.selected = [];
    this.emit("selected", []);
  }
  selectedToString() {
    const lineSet = /* @__PURE__ */ new Set();
    const patcher = { lines: {}, boxes: {} };
    this.state.selected.filter((id) => id.startsWith("box") && this.boxes[id]).map((id) => this.boxes[id]).forEach((box) => {
      box.allLines.forEach((line) => lineSet.add(line));
      patcher.boxes[box.id] = box.toSerializable();
    });
    lineSet.forEach((line) => {
      if (patcher.boxes[line.aId] && patcher.boxes[line.bId])
        patcher.lines[line.id] = line.toSerializable();
    });
    if (!Object.keys(patcher.boxes))
      return void 0;
    return JSON.stringify(patcher, void 0, 4);
  }
  bringToFront() {
    this.state.selected.filter((id) => id.startsWith("box") && this.boxes[id]).map((id) => this.boxes[id]).forEach((box) => {
      box.setZIndex((0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getTimestamp)());
    });
  }
  sendToBack() {
    this.state.selected.filter((id) => id.startsWith("box") && this.boxes[id]).map((id) => this.boxes[id]).forEach((box) => {
      box.setZIndex(-(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getTimestamp)());
    });
  }
  async pasteToPatcher(clipboard) {
    const idMap = {};
    const pasted = { boxes: {}, lines: {} };
    if (!clipboard || !clipboard.boxes)
      return pasted;
    const $init = [];
    const $postInit = [];
    if (Array.isArray(clipboard.boxes) || Array.isArray(clipboard.lines))
      return pasted;
    this.instance.state.preventEmitChanged = true;
    for (const boxId in clipboard.boxes) {
      const box = clipboard.boxes[boxId];
      if (this.boxes[box.id]) {
        idMap[box.id] = "box-" + ++this.props.boxIndexCount;
        box.id = idMap[box.id];
      } else {
        idMap[box.id] = box.id;
        const numID = parseInt(box.id.match(/\d+/)[0]);
        if (numID > this.props.boxIndexCount)
          this.props.boxIndexCount = numID;
      }
      box.rect = [box.rect[0] + 30, box.rect[1] + 30, box.rect[2], box.rect[3]];
      $init.push(this.instance.createBox(box));
    }
    const createdBoxes = (await Promise.all($init)).filter((box) => !!box);
    createdBoxes.forEach((box) => {
      pasted.boxes[box.id] = box.toSerializable();
      $postInit.push(box.postInit());
    });
    await Promise.all($postInit);
    for (const lineId in clipboard.lines) {
      const line = clipboard.lines[lineId];
      line.id = "line-" + ++this.props.lineIndexCount;
      line.aIo[0] = idMap[line.aIo[0]];
      line.bIo[0] = idMap[line.bIo[0]];
      const createdLine = this.instance.createLine(line);
      if (createdLine)
        pasted.lines[createdLine.id] = createdLine.toSerializable();
    }
    this.instance.state.preventEmitChanged = false;
    if (Object.keys(pasted.boxes).length) {
      if (this.state.selectAfterEdit) {
        this.deselectAll();
        this.select(...Object.keys(pasted.boxes));
      }
      this.emit("create", pasted);
      this.instance.emitGraphChanged();
    }
    return pasted;
  }
  async create(objects) {
    const $init = [];
    const $postInit = [];
    const created = { boxes: {}, lines: {} };
    for (const boxId in objects.boxes) {
      const boxIn = objects.boxes[boxId];
      const box = new _Box__WEBPACK_IMPORTED_MODULE_2__["default"](this.instance, boxIn);
      this.boxes[box.id] = box;
      created.boxes[box.id] = box.toSerializable();
      $init.push(box.init());
      $postInit.push(box.postInit());
    }
    await Promise.all($init);
    await Promise.all($postInit);
    for (const lineId in objects.lines) {
      const lineIn = objects.lines[lineId];
      if (!this.instance.canCreateLine(lineIn))
        continue;
      const line = new _Line__WEBPACK_IMPORTED_MODULE_3__["default"](this.instance, lineIn);
      this.lines[line.id] = line;
      created.lines[line.id] = line.toSerializable();
      line.enable();
    }
    if (this.state.selectAfterEdit) {
      this.deselectAll();
      this.select(...Object.keys(objects.boxes));
    }
    this.emit("create", created);
    this.instance.emitGraphChanged();
  }
  async deleteSelected() {
    const boxSet = /* @__PURE__ */ new Set();
    const lineSet = /* @__PURE__ */ new Set();
    this.state.selected.filter((id) => id.startsWith("line")).forEach((id) => lineSet.add(this.lines[id]));
    this.state.selected.filter((id) => id.startsWith("box")).forEach((id) => {
      boxSet.add(this.boxes[id]);
      this.boxes[id].allLines.forEach((line) => lineSet.add(line));
    });
    if (!boxSet.size && !lineSet.size)
      return void 0;
    this.state.selected = [];
    const deleted = { boxes: {}, lines: {} };
    const promises = [];
    lineSet.forEach((line) => {
      deleted.lines[line.id] = line.toSerializable();
      line.destroy();
    });
    boxSet.forEach((box) => {
      deleted.boxes[box.id] = box.toSerializable();
      promises.push(box.destroy());
    });
    await Promise.all(promises);
    this.emit("selected", this.state.selected.slice());
    this.emit("delete", deleted);
    this.instance.emitGraphChanged();
    return deleted;
  }
  async delete(objects) {
    const deleted = { boxes: {}, lines: {} };
    for (const id in objects.lines) {
      console.log(`id: ${id}`);
      deleted.lines[id] = this.lines[id].destroy().toSerializable();
    }
    const promises = [];
    for (const id in objects.boxes) {
      deleted.boxes[id] = this.boxes[id].toSerializable();
      promises.push(this.boxes[id].destroy());
    }
    await Promise.all(promises);
    this.emit("selected", this.state.selected.slice());
    this.emit("delete", deleted);
    this.instance.emitGraphChanged();
  }
  async cut() {
    if (this.state.locked)
      return;
    await this.copy();
    this.deleteSelected();
  }
  async copy() {
    if (this.state.locked)
      return;
    const s = this.selectedToString();
    if (!s)
      return;
    await navigator.clipboard.writeText(s);
  }
  async paste() {
    if (this.state.locked)
      return;
    const s = await navigator.clipboard.readText();
    if (!s)
      return;
    let parsed;
    try {
      parsed = JSON.parse(s);
    } catch (e) {
    }
    await this.pasteToPatcher(parsed);
  }
  async duplicate() {
    if (this.state.locked)
      return;
    const s = this.selectedToString();
    if (!s)
      return;
    let parsed;
    try {
      parsed = JSON.parse(s);
    } catch (e) {
    }
    await this.pasteToPatcher(parsed);
  }
  async selectAll() {
    this.selectAllBoxes();
  }
  selectRegion(selectionRect, selectedBefore) {
    let [left, top, right, bottom] = selectionRect;
    if (left > right)
      [left, right] = [right, left];
    if (top > bottom)
      [top, bottom] = [bottom, top];
    const { presentation } = this.state;
    const rectKey = presentation ? "presentationRect" : "rect";
    const select = selectedBefore.slice();
    for (const boxId in this.boxes) {
      const box = this.boxes[boxId];
      if (presentation && !box.presentation)
        continue;
      const rect = box[rectKey];
      if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isTRect)(rect))
        continue;
      const [boxLeft, boxTop, boxWidth, boxHeight] = rect;
      const [boxRight, boxBottom] = [boxLeft + boxWidth, boxTop + boxHeight];
      if (boxLeft < right && boxTop < bottom && boxRight > left && boxBottom > top) {
        const i = select.indexOf(boxId);
        if (i === -1)
          select.push(boxId);
        else
          select.splice(i, 1);
      }
    }
    const deselect = this.state.selected.filter((id) => select.indexOf(id) === -1);
    this.select(...select);
    this.deselect(...deselect);
  }
  moveSelectedBox(dragOffset, refBoxID) {
    const { presentation, snapToGrid, selected } = this.state;
    const rectKey = presentation ? "presentationRect" : "rect";
    const delta = __spreadValues({}, dragOffset);
    if (refBoxID) {
      const rect = this.boxes[refBoxID][rectKey];
      if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isRectMovable)(rect))
        return { x: 0, y: 0 };
      delta.x = snapToGrid ? Math.round((rect[0] + dragOffset.x) / this.props.grid[0]) * this.props.grid[0] - rect[0] : dragOffset.x;
      delta.y = snapToGrid ? Math.round((rect[1] + dragOffset.y) / this.props.grid[1]) * this.props.grid[1] - rect[1] : dragOffset.y;
    }
    if (!delta.x && !delta.y)
      return dragOffset;
    this.move(selected, delta, presentation);
    return { x: dragOffset.x - delta.x, y: dragOffset.y - delta.y };
  }
  moveEnd(selected, delta) {
    const { presentation } = this.state;
    const rectKey = presentation ? "presentationRect" : "rect";
    let ids = selected.filter((id) => id.startsWith("box") && this.boxes[id]);
    if (presentation)
      ids = ids.filter((id) => (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isRectMovable)(this.boxes[id][rectKey]));
    const boxes = ids.map((id) => this.boxes[id]);
    boxes.forEach((box) => box.emit(presentation ? "presentationRectChanged" : "rectChanged", box));
    this.emit("moved", { delta, selected: ids, presentation: this.state.presentation });
  }
  move(selected, delta, presentation) {
    if (this.state.selectAfterEdit)
      this.select(...selected);
    const rectKey = presentation ? "presentationRect" : "rect";
    let ids = selected.filter((id) => id.startsWith("box") && this.boxes[id]);
    if (presentation)
      ids = ids.filter((id) => (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isRectMovable)(this.boxes[id][rectKey]));
    const boxes = ids.map((id) => this.boxes[id]);
    if (boxes.length === 0)
      return;
    let [left, top] = boxes[0][rectKey];
    for (let i = 1; i < boxes.length; i++) {
      const box = boxes[i];
      const [$left, $top] = box[rectKey];
      if ($left < left)
        left = $left;
      if ($top < top)
        top = $top;
    }
    delta.x = Math.max(delta.x, -left);
    delta.y = Math.max(delta.y, -top);
    if (delta.x)
      boxes.forEach((box) => box[rectKey][0] += delta.x);
    if (delta.y)
      boxes.forEach((box) => box[rectKey][1] += delta.y);
    if (!delta.x && !delta.y)
      return;
    if (presentation !== this.state.presentation)
      return;
    this.emit("moving", { selected: ids, delta, presentation });
    if (presentation)
      return;
    const lineSet = /* @__PURE__ */ new Set();
    boxes.forEach((box) => {
      box.ioLines.forEach((set) => set.forEach((line) => lineSet.add(line)));
    });
    lineSet.forEach((line) => line.emit("posChanged", line));
  }
  resizeSelectedBox(boxId, dragOffset, type) {
    const { presentation, snapToGrid, selected } = this.state;
    const rectKey = presentation ? "presentationRect" : "rect";
    const rect = this.boxes[boxId][rectKey];
    if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isRectResizable)(rect))
      return { x: 0, y: 0 };
    const delta = { x: 0, y: 0 };
    if (type === "e" || type === "se" || type === "ne") {
      delta.x = snapToGrid ? Math.round((rect[0] + rect[2] + dragOffset.x) / this.props.grid[0]) * this.props.grid[0] - rect[0] - rect[2] : dragOffset.x;
    }
    if (type === "s" || type === "se" || type === "sw") {
      delta.y = snapToGrid ? Math.round((rect[1] + rect[3] + dragOffset.y) / this.props.grid[1]) * this.props.grid[1] - rect[1] - rect[3] : dragOffset.y;
    }
    if (type === "w" || type === "nw" || type === "sw") {
      delta.x = snapToGrid ? Math.round((rect[0] + dragOffset.x) / this.props.grid[0]) * this.props.grid[0] - rect[0] : dragOffset.x;
    }
    if (type === "n" || type === "nw" || type === "ne") {
      delta.y = snapToGrid ? Math.round((rect[1] + dragOffset.y) / this.props.grid[1]) * this.props.grid[1] - rect[1] : dragOffset.y;
    }
    if (!delta.x && !delta.y)
      return dragOffset;
    this.resize(selected, delta, type, presentation);
    return { x: dragOffset.x - delta.x, y: dragOffset.y - delta.y };
  }
  resizeEnd(selected, delta, type) {
    const { presentation } = this.state;
    this.emit("resized", { delta, type, selected, presentation });
  }
  resize(selected, delta, type, presentation) {
    if (this.state.selectAfterEdit)
      this.select(...selected);
    const rectKey = presentation ? "presentationRect" : "rect";
    let ids = selected.filter((id) => id.startsWith("box") && this.boxes[id]);
    if (presentation)
      ids = ids.filter((id) => (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isRectResizable)(this.boxes[id][rectKey]));
    const boxes = ids.map((id) => this.boxes[id]);
    if (boxes.length === 0)
      return;
    let [left, top, width, height] = boxes[0][rectKey];
    for (let i = 1; i < boxes.length; i++) {
      const box = boxes[i];
      const [$left, $top, $width, $height] = box[rectKey];
      if ($left < left)
        left = $left;
      if ($top < top)
        top = $top;
      if ($width < width)
        width = $width;
      if ($height < height)
        height = $height;
    }
    if (type === "sw" || type === "w" || type === "nw")
      delta.x = Math.max(delta.x, -left);
    if (type === "nw" || type === "n" || type === "ne")
      delta.y = Math.max(delta.y, -top);
    if (type === "ne" || type === "e" || type === "se")
      delta.x = Math.max(delta.x, 15 - width);
    if (type === "sw" || type === "w" || type === "nw")
      delta.x = Math.min(delta.x, width - 15);
    if (type === "se" || type === "s" || type === "sw")
      delta.y = Math.max(delta.y, 15 - height);
    if (type === "nw" || type === "n" || type === "ne")
      delta.y = Math.min(delta.y, height - 15);
    boxes.forEach((box) => {
      var _a, _b, _c, _d;
      const sizingX = box.UI ? ((_a = box.UI) == null ? void 0 : _a.sizing) === "horizontal" || ((_b = box.UI) == null ? void 0 : _b.sizing) === "both" : true;
      const sizingY = box.UI ? ((_c = box.UI) == null ? void 0 : _c.sizing) === "vertical" || ((_d = box.UI) == null ? void 0 : _d.sizing) === "both" : true;
      if (delta.x && sizingX) {
        if (type === "ne" || type === "e" || type === "se")
          box[rectKey][2] += delta.x;
        if (type === "sw" || type === "w" || type === "nw") {
          box[rectKey][2] -= delta.x;
          box[rectKey][0] += delta.x;
        }
      }
      if (delta.y && sizingY) {
        if (type === "se" || type === "s" || type === "sw")
          box[rectKey][3] += delta.y;
        if (type === "nw" || type === "n" || type === "ne") {
          box[rectKey][3] -= delta.y;
          box[rectKey][1] += delta.y;
        }
      }
    });
    if (!delta.x && !delta.y)
      return;
    if (presentation !== this.state.presentation)
      return;
    boxes.forEach((box) => box.emit(presentation ? "presentationRectChanged" : "rectChanged", box));
    if (presentation)
      return;
    const lineSet = /* @__PURE__ */ new Set();
    boxes.forEach((box) => {
      box.ioLines.forEach((set) => set.forEach((line) => lineSet.add(line)));
    });
    lineSet.forEach((line) => line.emit("posChanged", line));
  }
  findNearestPort(left, top, from, to) {
    let nearest = [null, null];
    let minDistance = 100;
    if (to && this.getPortsCompatible(from[0], from[1], to[0], to[1])) {
      const currentPos = this.boxes[to[0]].getIoPos(to[1]);
      const currentDistance = ((currentPos.left - left) ** 2 + (currentPos.top - top) ** 2) ** 0.5;
      if (currentDistance < 100) {
        nearest = to;
        minDistance = currentDistance;
      }
    }
    for (const id in this.boxes) {
      const box = this.boxes[id];
      box.ioPositions.map((pos, i) => ({ pos, i, compatible: this.getPortsCompatible(from[0], from[1], id, i) })).filter(({ compatible }) => compatible).forEach(({ pos, i }) => {
        const distance = ((pos.left - left) ** 2 + (pos.top - top) ** 2) ** 0.5;
        if (distance < minDistance) {
          const potentialLine = { aIo: from, bIo: [id, i] };
          const canCreate = this.instance.canCreateLine(potentialLine);
          if (!canCreate)
            return;
          nearest = [id, i];
          minDistance = distance;
        }
      });
    }
    return nearest;
  }
  getLinesByIo(boxId, io) {
    const box = this.boxes[boxId];
    if (!box || io > box.ios.length) {
      return [];
    }
    const lines = [];
    if (box.text.startsWith("tie")) {
      for (let key in this.lines) {
        let line = this.lines[key];
        if (line.aId === boxId || line.bId === boxId) {
          lines.push(line);
        }
      }
    } else {
      for (let key in this.lines) {
        let line = this.lines[key];
        if (line.aId === boxId && line.aIo[1] === io || line.bId === boxId && line.bIo[1] === io) {
          lines.push(line);
        }
      }
    }
    return lines;
  }
  getConnectedPins(boxId, io) {
    let lines = this.getLinesByIo(boxId, io);
    let all_boxes = lines.flatMap((line) => [line.aIo, line.bIo]);
    let unique_boxes = Array.from(/* @__PURE__ */ new Set([...all_boxes, [boxId, io]]));
    return unique_boxes.map(([id, io2]) => this.boxes[id].meta.ios[io2].pin);
  }
  getPortsCompatible(aBox, aIo, bBox, bIo) {
    if (aBox === bBox) {
      return false;
    }
    let aPins = this.getConnectedPins(aBox, aIo);
    let bPins = this.getConnectedPins(bBox, bIo);
    return (0,_Compatibility__WEBPACK_IMPORTED_MODULE_4__.compatiblePins)([...aPins, ...bPins]);
  }
  // TODO -- this is where the magic happens
  highlightNearestPort(findSrc, dragOffset, from, to) {
    const origPos = to ? this.boxes[to[0]].getIoPos(to[1]) : this.boxes[from[0]].getIoPos(from[1]);
    const left = origPos.left + dragOffset.x;
    const top = origPos.top + dragOffset.y;
    const [boxId, portIndex] = this.findNearestPort(left, top, from, to);
    if (boxId)
      this.highlightPort(boxId, findSrc, portIndex);
    else
      this.unhighlightPort();
    return [boxId, portIndex];
  }
  highlightBox(boxId) {
    this.emit("highlightBox", boxId);
  }
  highlightPort(boxId, isSrc, portIndex) {
    this.emit("highlightPort", { boxId, isSrc, i: portIndex });
  }
  unhighlightPort() {
    this.emit("highlightPort", null);
  }
  bubblePorts(boxId, portIndex, pin) {
    this.emit("bubblePorts", { boxId, i: portIndex, pin });
  }
  unBubblePorts() {
    this.emit("bubblePorts", null);
  }
  tempLine(findSrc, from) {
    this.emit("tempLine", { findSrc, from });
    this.bubblePorts(from[0], from[1], this.boxes[from[0]].meta.ios[from[1]].pin);
    return this;
  }
  inspector(box) {
    if (box)
      this.emit("inspector");
    else if (this.state.selected.length) {
      const found = this.state.selected.find((id) => id.startsWith("box"));
      if (found && this.boxes[found])
        this.emit("inspector");
    }
  }
  reference(box) {
    if (box)
      this.emit("reference");
    else if (this.state.selected.length) {
      const found = this.state.selected.find((id) => id.startsWith("box"));
      if (found && this.boxes[found])
        this.emit("reference");
    }
  }
  dockUI(box) {
    if (box && box.UI.dockable)
      this.emit("dockUI", box.id);
    else if (this.state.selected.length) {
      const found = this.state.selected.find((id) => id.startsWith("box"));
      if (found && this.boxes[found] && this.boxes[found].UI.dockable)
        this.emit("dockUI", found);
    }
  }
  onUiResized() {
  }
  async toTempData() {
    return this.instance.toSerializable();
  }
}


/***/ }),

/***/ "./src/core/hardware/Line.ts":
/*!***********************************!*\
  !*** ./src/core/hardware/Line.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HardwareLine)
/* harmony export */ });
/* harmony import */ var _utils_TypedEventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/TypedEventEmitter */ "./src/utils/TypedEventEmitter.ts");


class HardwareLine extends _utils_TypedEventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(patcherIn, lineIn) {
    super();
    this.disabled = true;
    this.updateType = () => {
      const type = this.calcType();
      if (type !== this._type) {
        this._type = type;
        this.emit("typeChanged", type);
      }
    };
    this.id = lineIn.id;
    this.aIo = lineIn.aIo;
    this.bIo = lineIn.bIo;
    this.disabled = true;
    this._patcher = patcherIn;
    const { aBox, bBox } = this;
    this._type = this.calcType();
    if (aBox) {
      aBox.on("metaUpdated", this.updateType);
      aBox.addIoLine(this, true);
    }
    if (bBox) {
      bBox.on("metaUpdated", this.updateType);
      bBox.addIoLine(this, false);
    }
  }
  static compare(line1, line2) {
    return line2.positionHash - line1.positionHash;
  }
  get presentation() {
    return this.aBox && this.aBox.presentation && this.bBox && this.bBox.presentation;
  }
  setA(a) {
    const aId = a[0];
    const aIo = a[1];
    if (aId === this.aIo[0] && aIo === this.aIo[1])
      return this;
    this.aBox.off("metaUpdated", this.updateType);
    this.disable();
    this.aBox.removeIoLine(this, true);
    this.aIo = [aId, aIo];
    this.aBox.addIoLine(this, true);
    this.enable();
    this.aBox.on("metaUpdated", this.updateType);
    this.updateType();
    return this.uiUpdateA();
  }
  getA() {
    return this.aIo;
  }
  uiUpdateA() {
    this.emit("aPosChanged", this.aPos);
    return this;
  }
  setB(b) {
    const bId = b[0];
    const bIo = b[1];
    if (bId === this.bIo[0] && bIo === this.bIo[1])
      return this;
    this.aBox.off("metaUpdated", this.updateType);
    this.disable();
    this.bBox.removeIoLine(this, false);
    this.bIo = [bId, bIo];
    this.bBox.removeIoLine(this, false);
    this.enable();
    this.bBox.on("metaUpdated", this.updateType);
    this.updateType();
    return this.uiUpdateB();
  }
  getB() {
    return this.aIo;
  }
  uiUpdateB() {
    this.emit("bPosChanged", this.bPos);
    return this;
  }
  disable(bool) {
    if (bool === false)
      return this.enable();
    if (this.disabled)
      return this;
    this.disabled = true;
    const { aBox, bBox } = this;
    if (this._patcher.getLinesByBox(this.aId, this.bId, this.aIo[1], this.bIo[1]).length > 1)
      return this;
    aBox.disconnectedIo(this.aIo[1], this.bIo[1], bBox.id, this.id);
    bBox.disconnectedIo(this.bIo[1], this.aIo[1], aBox.id, this.id);
    return this;
  }
  enable(bool) {
    if (bool === false)
      return this.disable();
    if (!this.disabled)
      return this;
    const { aBox, bBox } = this;
    if (this.aIo[1] >= aBox.ios.length || this.bIo[1] >= bBox.ios.length)
      return this._patcher.deleteLine(this.id);
    if (this._patcher.getLinesByBox(this.aId, this.bId, this.aIo[1], this.bIo[1]).length > 1)
      return this;
    this.disabled = false;
    aBox.connectedIo(this.aIo[1], this.bIo[1], bBox.id, this.id);
    bBox.connectedIo(this.bIo[1], this.aIo[1], aBox.id, this.id);
    return this;
  }
  destroy() {
    this.bBox.off("metaUpdated", this.updateType);
    this.aBox.off("metaUpdated", this.updateType);
    this.disable();
    this.aBox.removeIoLine(this, true);
    this.bBox.removeIoLine(this, false);
    delete this._patcher.lines[this.id];
    return this;
  }
  pass(data) {
    this.emit("passData", data);
    return this.disabled ? this : this.bBox.fn(this.bIo[1], data);
  }
  get positionHash() {
    const { top, left } = this._patcher.boxes[this.bIo[0]].getIoPos(this.bIo[1]);
    return left * 65536 + top;
  }
  get aPos() {
    return this._patcher.boxes[this.aIo[0]].getIoPos(this.aIo[1]);
  }
  get bPos() {
    return this._patcher.boxes[this.bIo[0]].getIoPos(this.bIo[1]);
  }
  get aId() {
    return this.aIo[0];
  }
  // get srcOutlet() {
  //     return this.src[1];
  // }
  get bId() {
    return this.bIo[0];
  }
  // get destInlet() {
  //     return this.bIo[1];
  // }
  get aBox() {
    return this._patcher.boxes[this.aIo[0]];
  }
  get bBox() {
    return this._patcher.boxes[this.bIo[0]];
  }
  calcType() {
    return "analog";
  }
  get type() {
    return this._type;
  }
  toString() {
    return JSON.stringify(this.toSerializable());
  }
  toSerializable() {
    const { id, aIo, bIo, disabled } = this;
    return { id, aIo: [...aIo], bIo: [...bIo], disabled };
  }
}


/***/ })

};
//# sourceMappingURL=6f8cdacb7de946ab9a2c.worklet.js.map