/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../frontend/src/core/message.ts":
/*!*********************************************!*\
  !*** ../../../frontend/src/core/message.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Message": () => (/* binding */ Message),
/* harmony export */   "extractFirst": () => (/* binding */ extractFirst),
/* harmony export */   "isMessage": () => (/* binding */ isMessage)
/* harmony export */ });
class Message extends Array {
  static from(tokens) {
    const newArr = new Message();
    for (let i = 0; i < tokens.length; i++) {
      newArr[i] = tokens[i];
    }
    return newArr;
  }
  startsWith(value) {
    if (this.length) {
      return this[0] === value;
    }
    return false;
  }
  endsWith(value) {
    if (this.length) {
      return this[this.length - 1] === value;
    }
    return false;
  }
  arithmetic(op) {
    return (other) => {
      const result = new Message();
      const minLength = Math.min(this.length, other.length);
      for (let i = 0; i < minLength; i++) {
        if (typeof this[i] === "number" && typeof other[i] === "number") {
          result.push(op(this[i], other[i]));
        } else {
          result.push(this[i]);
        }
      }
      return result;
    };
  }
}
function isMessage(value) {
  return value instanceof Message;
}
function extractFirst(data) {
  if (data instanceof Message || data instanceof Array) {
    return data[0];
  } else {
    return data;
  }
}


/***/ }),

/***/ "../../common/web/index.ts":
/*!*********************************!*\
  !*** ../../common/web/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "author": () => (/* binding */ author),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "jspatcher": () => (/* binding */ jspatcher),
/* harmony export */   "keywords": () => (/* binding */ keywords),
/* harmony export */   "license": () => (/* binding */ license),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
/* harmony import */ var _package_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package-info */ "../../common/web/package-info.ts");
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

const name = _package_info__WEBPACK_IMPORTED_MODULE_0__["default"].name.split("/").pop().replace(/^package-/, "");
const { author, license, keywords, version, description, jspatcher } = _package_info__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__spreadValues({ name, author, license, keywords, version, description }, jspatcher));


/***/ }),

/***/ "../../common/web/jsDspObject.ts":
/*!***************************************!*\
  !*** ../../common/web/jsDspObject.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsWorkletManager": () => (/* binding */ JsWorkletManager),
/* harmony export */   "generateObject": () => (/* binding */ generateObject)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "../../common/web/index.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdk */ "../../common/web/sdk.ts");
/* harmony import */ var _workletCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workletCreator */ "../../common/web/workletCreator.ts");



class JsWorkletManager {
  constructor() {
  }
  static getSet() {
    if (!JsWorkletManager.registered_modules) {
      JsWorkletManager.registered_modules = /* @__PURE__ */ new Set();
    }
    return JsWorkletManager.registered_modules;
  }
  static async addModule(audioCtx, name, url) {
    let set = JsWorkletManager.getSet();
    if (!set.has(name)) {
      set.add(name);
      await audioCtx.audioWorklet.addModule(url);
    }
  }
}
function generateObject(Processor, name, dependencies, enums) {
  var _a;
  return _a = class extends _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultObject {
    constructor() {
      super(...arguments);
      this._ = {
        dspId: name,
        defaultInputs: [],
        constants: [],
        constantsConnected: [],
        argsOffset: Processor.argsOffset || 0
      };
    }
    get audioConnections() {
      return this.inletLines.map((set) => [...set].find((l) => !l.disabled && l.isConnectableByAudio)).map((l) => !!l);
    }
    checkAndFillUnconnected() {
      const { audioConnections } = this;
      const { constants, constantsConnected } = this._;
      if (!this.inlets)
        return;
      for (let i = 0; i < this.inlets; i++) {
        if (audioConnections[i] === constantsConnected[i])
          continue;
        const constant = constants[i];
        if (audioConnections[i]) {
          constant.offset.value = 0;
        } else if (!audioConnections[i] && !constantsConnected[i]) {
          constant.offset.value = this._.defaultInputs[i] || 0;
        }
        constantsConnected[i] = audioConnections[i];
      }
    }
    subscribe() {
      super.subscribe();
      this.on("preInit", () => {
        var _a2;
        const { inputs, outputs } = { inputs: Processor.inlets.length, outputs: Processor.outlets.length };
        if (inputs) {
          const merger = this.audioCtx.createChannelMerger(inputs);
          this._.merger = merger;
          for (let i = 0; i < inputs; i++) {
            const constant = this.audioCtx.createConstantSource();
            this._.constants[i] = constant;
            constant.connect(merger, 0, i);
            this._.constantsConnected[i] = false;
          }
        }
        const splitter = this.audioCtx.createChannelSplitter(outputs);
        this._.splitter = splitter;
        this.inlets = inputs;
        this.outlets = outputs;
        this.disconnectAudio();
        this.inletAudioConnections = this._.constants.map((node) => ({ node: node.offset, index: 0 }));
        this.outletAudioConnections = new Array(outputs).fill(null).map((v, i) => ({ node: splitter, index: i }));
        this.connectAudio();
        for (let i = 0; i < this.inlets; i++) {
          if (i >= this._.argsOffset) {
            const arg = this.meta.args[i - this._.argsOffset];
            if (arg) {
              this._.defaultInputs[i] = (_a2 = arg.default) != null ? _a2 : 0;
            }
          } else {
            this._.defaultInputs[i] = 0;
          }
        }
      });
      this.on("postInit", async () => {
        const { dspId, constants, merger, splitter, argsOffset } = this._;
        const url = (0,_workletCreator__WEBPACK_IMPORTED_MODULE_2__["default"])(Processor, dspId, this.audioCtx.sampleRate, dependencies, enums);
        await JsWorkletManager.addModule(this.audioCtx, dspId, url);
        let attempts = 0;
        let node;
        while (true) {
          try {
            node = new AudioWorkletNode(this.audioCtx, dspId);
            break;
          } catch (e) {
            attempts++;
            await new Promise((r) => setTimeout(r, 10));
            if (attempts >= 10) {
              this.error(`Failed to create AudioWorkletNode for ${dspId}`);
              return;
            }
          }
        }
        this._.node = node;
        this.checkAndFillUnconnected();
        merger == null ? void 0 : merger.connect(node);
        node.connect(splitter);
        constants.forEach((constant, i) => {
          var _a2;
          const argValue = this.args[i - argsOffset];
          if (!this._.constantsConnected[i])
            constant.offset.value = typeof argValue === "number" ? +argValue : (_a2 = this._.defaultInputs[i]) != null ? _a2 : 0;
          constant.start();
        });
      });
      this.on("argsUpdated", () => {
        this._.constants.forEach((constant, i) => {
          var _a2;
          const argValue = +this.args[i - this._.argsOffset];
          if (!this._.constantsConnected[i])
            constant.offset.value = typeof argValue === "number" ? +argValue : (_a2 = this._.defaultInputs[i]) != null ? _a2 : 0;
        });
      });
      this.on("inlet", ({ inlet, data }) => {
        if (typeof data === "number") {
          if (this._.constants[inlet] && !this._.constantsConnected[inlet]) {
            const constant = this._.constants[inlet];
            constant.offset.value = constant.offset.value;
            constant.offset.linearRampToValueAtTime(data, this.audioCtx.currentTime + this.getProp("smoothInput"));
          }
        }
      });
      this.on("connectedInlet", () => this.checkAndFillUnconnected());
      this.on("disconnectedInlet", () => this.checkAndFillUnconnected());
      this.on("destroy", () => {
        const { constants, merger, splitter, node } = this._;
        constants.forEach((constant) => constant == null ? void 0 : constant.disconnect());
        merger == null ? void 0 : merger.disconnect();
        splitter == null ? void 0 : splitter.disconnect();
        node == null ? void 0 : node.disconnect();
      });
    }
  }, _a.package = _index__WEBPACK_IMPORTED_MODULE_0__.name, _a.author = _index__WEBPACK_IMPORTED_MODULE_0__.author, _a.version = _index__WEBPACK_IMPORTED_MODULE_0__.version, _a.description = Processor.description, _a.inlets = Processor.inlets, _a.outlets = Processor.outlets, _a.args = Processor.args, _a.props = Processor.props, _a.docs = Processor.docs, _a.UI = _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultUI, _a;
}


/***/ }),

/***/ "../../common/web/jsDspProcessor.ts":
/*!******************************************!*\
  !*** ../../common/web/jsDspProcessor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsParamDescriptor": () => (/* binding */ JsParamDescriptor),
/* harmony export */   "default": () => (/* binding */ JsDspProcessor)
/* harmony export */ });
class JsParamDescriptor {
}
class JsDspProcessor {
  static get parameterDescriptors() {
    const params = [];
    for (const name in this.paramDescriptors) {
      params.push(this.paramDescriptors[name]);
    }
    return params;
  }
  init(sampleRate) {
  }
  process(inputs, outputs, parameters) {
    return true;
  }
}
JsDspProcessor.paramDescriptors = {};
JsDspProcessor.inlets = [];
JsDspProcessor.outlets = [];
JsDspProcessor.args = [];
JsDspProcessor.props = {
  smoothInput: {
    type: "number",
    default: 267e-5,
    description: "Linear interpolation coefficient to block-rate input values in seconds"
  }
};


/***/ }),

/***/ "../../common/web/package-info.ts":
/*!****************************************!*\
  !*** ../../common/web/package-info.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "../../common/web/package.json");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/ (_package_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_package_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_package_json__WEBPACK_IMPORTED_MODULE_0__, 2))));


/***/ }),

/***/ "../../common/web/sdk.ts":
/*!*******************************!*\
  !*** ../../common/web/sdk.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bang": () => (/* binding */ Bang),
/* harmony export */   "BaseObject": () => (/* binding */ BaseObject),
/* harmony export */   "BaseUI": () => (/* binding */ BaseUI),
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "CanvasUI": () => (/* binding */ CanvasUI),
/* harmony export */   "DefaultObject": () => (/* binding */ DefaultObject),
/* harmony export */   "DefaultUI": () => (/* binding */ DefaultUI),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "Patcher": () => (/* binding */ Patcher),
/* harmony export */   "React": () => (/* binding */ React),
/* harmony export */   "Utils": () => (/* binding */ Utils),
/* harmony export */   "generateDefaultObject": () => (/* binding */ generateDefaultObject),
/* harmony export */   "generateRemoteObject": () => (/* binding */ generateRemoteObject),
/* harmony export */   "generateRemotedObject": () => (/* binding */ generateRemotedObject),
/* harmony export */   "isBang": () => (/* binding */ isBang)
/* harmony export */ });
const sdk = globalThis.jspatcherEnv.sdk;
const {
  React,
  Patcher,
  Box,
  Line,
  BaseObject,
  BaseUI,
  DefaultObject,
  DefaultUI,
  CanvasUI,
  Utils,
  generateRemotedObject,
  generateDefaultObject,
  generateRemoteObject,
  Bang,
  isBang
} = sdk;


/***/ }),

/***/ "../../common/web/workletCreator.ts":
/*!******************************************!*\
  !*** ../../common/web/workletCreator.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

const getJsWorkletProcessor = (processor, dspId, sampleRate, dependencies, enums) => {
  const inherited_string = processor.toString().replace(/extends (.*?) {/, `extends ${_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"].name} {`);
  const js_enums = enums ? enums.map((e) => `const ${e.name} = ${JSON.stringify(e.item)}`).join("\n") : "";
  const deps = dependencies ? dependencies.map((dep) => `const ${dep.name} = ${dep.toString()}`).join("\n") : "";
  const processorCode = `

        ${js_enums}

        ${deps}

        const ${_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"].name} = ${_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"].toString()}

        const ProcessorClass = ${inherited_string}

        class JsWorkletProcessor extends AudioWorkletProcessor {

            constructor(options) {
                super(options);
                this.processor = new ProcessorClass();
                this.processor.init(${sampleRate});
            }

            process(inputs, outputs, parameters) {
                return this.processor.process(inputs, outputs, parameters);
            }

            static get parameterDescriptors() {
                return ProcessorClass.parameterDescriptors;
            }
        }

        // TODO -- fix already registered error
        registerProcessor("${dspId}", JsWorkletProcessor);

    `;
  const processorCodeCleaned = processorCode.replace(/_.+?__WEBPACK_IMPORTED_MODULE_\d+__\./g, "");
  const url = URL.createObjectURL(new Blob([processorCodeCleaned], { type: "text/javascript" }));
  return url;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getJsWorkletProcessor);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "author": () => (/* binding */ author),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "jspatcher": () => (/* binding */ jspatcher),
/* harmony export */   "keywords": () => (/* binding */ keywords),
/* harmony export */   "license": () => (/* binding */ license),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
/* harmony import */ var _package_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package-info */ "./src/package-info.ts");
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

const name = _package_info__WEBPACK_IMPORTED_MODULE_0__["default"].name.split("/").pop().replace(/^package-/, "");
const { author, license, keywords, version, description, jspatcher } = _package_info__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__spreadValues({ name, author, license, keywords, version, description }, jspatcher));


/***/ }),

/***/ "./src/objects/block/base.ts":
/*!***********************************!*\
  !*** ./src/objects/block/base.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Op)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/index.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Op extends _sdk__WEBPACK_IMPORTED_MODULE_1__.BaseObject {
}
Op.package = _index__WEBPACK_IMPORTED_MODULE_0__.name;
Op.author = _index__WEBPACK_IMPORTED_MODULE_0__.author;
Op.version = _index__WEBPACK_IMPORTED_MODULE_0__.version;
Op.description = _index__WEBPACK_IMPORTED_MODULE_0__.description;


/***/ }),

/***/ "./src/objects/block/binary.ts":
/*!*************************************!*\
  !*** ./src/objects/block/binary.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Binary)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/objects/block/base.ts");
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");



class Binary extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    this._ = { arg: this.args[0], result: void 0 };
  }
  prepareInput(input) {
    const forceInt = this.getProp("forceInt");
    if (input instanceof Array && input.length == 1) {
      const first = +(0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_2__.extractFirst)(input);
      return forceInt ? Math.floor(first) : first;
    }
    return forceInt ? Math.floor(+input) : +input;
  }
  handleUpdateArgs(args) {
    this._.arg = void 0;
    this._.result = void 0;
    if (!args || args.length === 0)
      return;
    this._.arg = this.prepareInput(args[0]);
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 2;
      this.outlets = 1;
      this.handleUpdateArgs(this.args);
    });
    this.on("updateArgs", (args) => {
      this.handleUpdateArgs(args);
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          try {
            const result = this.execute(this.prepareInput(data), this._.arg);
            this._.result = this.prepareInput(result);
          } catch (e) {
            this.error(e);
            return;
          }
        }
        this.outlet(0, this._.result);
      } else if (inlet === 1) {
        this._.arg = this.prepareInput(data);
      }
    });
  }
}
Binary.description = "Binary Operation";
Binary.inlets = [{
  isHot: true,
  type: "anything",
  description: "First element"
}, {
  isHot: false,
  type: "anything",
  description: "Second element"
}];
Binary.outlets = [{
  type: "anything",
  description: "Result"
}];
Binary.args = [{
  type: "anything",
  optional: true,
  default: 0,
  description: "Initial second element"
}];
Binary.props = {
  forceInt: {
    type: "boolean",
    default: false,
    description: "Convert inputs and outputs to integers"
  }
};


/***/ }),

/***/ "./src/objects/block/unary.ts":
/*!************************************!*\
  !*** ./src/objects/block/unary.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Unary)
/* harmony export */ });
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./src/objects/block/base.ts");



class Unary extends _base__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super(...arguments);
    this._ = { result: void 0 };
  }
  prepareInput(input) {
    const forceInt = this.getProp("forceInt");
    if (input instanceof Array && input.length == 1) {
      const first = +(0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.extractFirst)(input);
      return forceInt ? Math.floor(first) : first;
    }
    return forceInt ? Math.floor(+input) : +input;
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 1;
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_1__.isBang)(data)) {
          try {
            this._.result = this.prepareInput(this.execute(this.prepareInput(data)));
          } catch (e) {
            this.error(e);
            return;
          }
        }
        this.outlet(0, this._.result);
      }
    });
  }
}
Unary.description = "Unary Operation";
Unary.inlets = [{
  isHot: true,
  type: "anything",
  description: "First element"
}];
Unary.outlets = [{
  type: "anything",
  description: "Result"
}];
Unary.props = {
  forceInt: {
    type: "boolean",
    default: false,
    description: "Convert inputs and outputs to integers"
  }
};


/***/ }),

/***/ "./src/objects/dsp/abs.ts":
/*!********************************!*\
  !*** ./src/objects/dsp/abs.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Abs)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

class Abs extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let in1 = inputs[0][0];
    let outputStream = outputs[0][0];
    for (let i = 0; i < in1.length; i++) {
      outputStream[i] = Math.abs(in1[i]);
    }
    return true;
  }
}
Abs.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "audio input connection 1",
    varLength: true
  }
];
Abs.outlets = [
  {
    type: "signal",
    description: "audio output connection",
    varLength: true
  }
];
Abs.argsOffset = 0;
Abs.docs = "math/docs/abs~.html";


/***/ }),

/***/ "./src/objects/dsp/add.ts":
/*!********************************!*\
  !*** ./src/objects/dsp/add.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Add)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

class Add extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let in1 = inputs[0][0];
    let in2 = inputs[0][1];
    let outputStream = outputs[0][0];
    for (let i = 0; i < in1.length; i++) {
      outputStream[i] = in1[i] + in2[i];
    }
    return true;
  }
}
Add.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "audio input connection 1",
    varLength: true
  },
  {
    isHot: true,
    type: "signal",
    description: "audio input connection 2",
    varLength: true
  }
];
Add.outlets = [
  {
    type: "signal",
    description: "audio output connection",
    varLength: true
  }
];
Add.args = [
  {
    type: "number",
    optional: true,
    description: "initial argument",
    default: 0
  }
];
Add.argsOffset = 1;
Add.docs = "math/docs/add~.html";


/***/ }),

/***/ "./src/objects/dsp/bp.ts":
/*!*******************************!*\
  !*** ./src/objects/dsp/bp.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bp)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

class Bp extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let inputStream = inputs[0][0];
    let centerFrequency = inputs[0][1];
    let q = inputs[0][2];
    let outputStream = outputs[0][0];
    for (let i = 0; i < inputStream.length; i++) {
      let r = 0;
      let oneminusr = 0;
      let omega = 0;
      let qcos = 0;
      if (centerFrequency[i] < 1e-3) {
        centerFrequency[i] = 10;
      }
      if (q[i] < 0) {
        q[i] = 0;
      }
      this.freq_ = centerFrequency[i];
      this.q_ = q[i];
      omega = centerFrequency[i] * (2 * Math.PI) / this.sample_rate_;
      if (q[i] < 1e-3) {
        oneminusr = 1;
      } else {
        oneminusr = omega / q[i];
      }
      if (oneminusr > 1) {
        oneminusr = 1;
      }
      r = 1 - oneminusr;
      if (omega >= -(0.5 * Math.PI) && omega <= 0.5 * Math.PI) {
        let g = omega * omega;
        qcos = g * g * g * (-1 / 720) + g * g * (1 / 24) - g * 0.5 + 1;
      } else {
        qcos = 0;
      }
      this.coef1_ = 2 * qcos * r;
      this.coef2_ = -r * r;
      this.gain_ = 2 * oneminusr * (oneminusr + r * omega);
      let last = this.x1_;
      let prev = this.x2_;
      let coef1 = this.coef1_;
      let coef2 = this.coef2_;
      let gain = this.gain_;
      let output = inputStream[i] + coef1 * last + coef2 * prev;
      outputStream[i] = gain * output;
      prev = last;
      last = output;
      this.x1_ = last;
      this.x2_ = prev;
    }
    return true;
  }
  init(sampleRate) {
    this.sample_rate_ = sampleRate;
    this.x1_ = 0;
    this.x2_ = 0;
    this.coef1_ = 0;
    this.coef2_ = 0;
    this.gain_ = 0;
    this.q_ = 0;
    this.freq_ = 0;
    this.f_ = 0;
  }
}
Bp.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "audio signal",
    varLength: true
  },
  {
    isHot: true,
    type: "signal",
    description: "center frequency",
    varLength: true
  },
  {
    isHot: true,
    type: "signal",
    description: "Q (controls bandwidth)",
    varLength: true
  }
];
Bp.outlets = [
  {
    type: "signal",
    description: "output",
    varLength: true
  }
];
Bp.args = [
  {
    type: "number",
    optional: true,
    description: "initial center frequency",
    default: 1e3
  },
  {
    type: "number",
    optional: true,
    description: "initial q",
    default: 1
  }
];
Bp.argsOffset = 1;
Bp.docs = "math/docs/bp.html";


/***/ }),

/***/ "./src/objects/dsp/div.ts":
/*!********************************!*\
  !*** ./src/objects/dsp/div.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Div)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

class Div extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let in1 = inputs[0][0];
    let in2 = inputs[0][1];
    let outputStream = outputs[0][0];
    for (let i = 0; i < in1.length; i++) {
      outputStream[i] = in1[i] / in2[i];
    }
    return true;
  }
}
Div.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "audio input connection 1",
    varLength: true
  },
  {
    isHot: true,
    type: "signal",
    description: "audio input connection 2",
    varLength: true
  }
];
Div.outlets = [
  {
    type: "signal",
    description: "audio output connection",
    varLength: true
  }
];
Div.args = [
  {
    type: "number",
    optional: true,
    description: "initial argument",
    default: 0
  }
];
Div.argsOffset = 1;
Div.docs = "math/docs/div~.html";


/***/ }),

/***/ "./src/objects/dsp/hip.ts":
/*!********************************!*\
  !*** ./src/objects/dsp/hip.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hip)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

class Hip extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let inputStream = inputs[0][0];
    let frequency = inputs[0][1];
    let outputStream = outputs[0][0];
    let last = 0;
    let coef = 0;
    let normal = 0;
    let newval = 0;
    for (let i = 0; i < inputStream.length; i++) {
      this.hz_ = frequency[i];
      if (this.hz_ < 0) {
        this.hz_ = 0;
      }
      this.coef_ = 1 - this.hz_ * (2 * Math.PI) / this.sample_rate_;
      if (this.coef_ < 0) {
        this.coef_ = 0;
      } else if (this.coef_ > 1) {
        this.coef_ = 1;
      }
      coef = this.coef_;
      last = this.last_;
      if (coef < 1) {
        normal = 0.5 * (1 + coef);
        newval = inputStream[i] + coef * last;
        outputStream[i] = normal * (newval - last);
        last = newval;
        this.last_ = last;
      } else {
        outputStream[i] = inputStream[i];
        this.last_ = 0;
      }
    }
    return true;
  }
  init(sampleRate) {
    this.sample_rate_ = sampleRate;
    this.hz_ = 0;
    this.coef_ = 0;
    this.last_ = 0;
  }
}
Hip.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "audio signal",
    varLength: true
  },
  {
    isHot: true,
    type: "signal",
    description: "rolloff frequency",
    varLength: true
  }
];
Hip.outlets = [
  {
    type: "signal",
    description: "output",
    varLength: true
  }
];
Hip.args = [
  {
    type: "number",
    optional: true,
    description: "rolloff frequency",
    default: 100
  }
];
Hip.argsOffset = 1;
Hip.docs = "math/docs/hip.html";


/***/ }),

/***/ "./src/objects/dsp/lop.ts":
/*!********************************!*\
  !*** ./src/objects/dsp/lop.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lop)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

class Lop extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let inputStream = inputs[0][0];
    let frequency = inputs[0][1];
    let outputStream = outputs[0][0];
    this.conversion_ = 2 * Math.PI / this.sample_rate_;
    let coef = 0;
    let feedback = 0;
    let last = this.last_;
    for (let i = 0; i < inputStream.length; i++) {
      last = this.last_;
      if (frequency[i] != this.hz_) {
        this.hz_ = frequency[i];
        coef = frequency[i] * this.conversion_;
        if (coef > 1) {
          coef = 1;
        } else if (coef < 0) {
          coef = 0;
        }
        this.coef_ = coef;
      } else {
        coef = this.coef_;
      }
      feedback = 1 - coef;
      last = coef * inputStream[i] + feedback * last;
      outputStream[i] = last;
      this.last_ = last;
    }
    return true;
  }
  init(sampleRate) {
    this.sample_rate_ = sampleRate;
    this.conversion_ = 0;
    this.last_ = 0;
    this.hz_ = 0;
    this.coef_ = 0;
  }
}
Lop.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "audio signal",
    varLength: true
  },
  {
    isHot: true,
    type: "signal",
    description: "rolloff frequency",
    varLength: true
  }
];
Lop.outlets = [
  {
    type: "signal",
    description: "output",
    varLength: true
  }
];
Lop.args = [
  {
    type: "number",
    optional: true,
    description: "rolloff frequency",
    default: 1e3
  }
];
Lop.argsOffset = 1;
Lop.docs = "math/docs/lop.html";


/***/ }),

/***/ "./src/objects/dsp/mul.ts":
/*!********************************!*\
  !*** ./src/objects/dsp/mul.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mul)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

class Mul extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let in1 = inputs[0][0];
    let in2 = inputs[0][1];
    let outputStream = outputs[0][0];
    for (let i = 0; i < in1.length; i++) {
      outputStream[i] = in1[i] * in2[i];
    }
    return true;
  }
}
Mul.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "audio input connection 1",
    varLength: true
  },
  {
    isHot: true,
    type: "signal",
    description: "audio input connection 2",
    varLength: true
  }
];
Mul.outlets = [
  {
    type: "signal",
    description: "audio output connection",
    varLength: true
  }
];
Mul.args = [
  {
    type: "number",
    optional: true,
    description: "initial argument",
    default: 0
  }
];
Mul.argsOffset = 1;
Mul.docs = "math/docs/mul~.html";


/***/ }),

/***/ "./src/objects/dsp/rev_div.ts":
/*!************************************!*\
  !*** ./src/objects/dsp/rev_div.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReverseDiv)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

class ReverseDiv extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let in1 = inputs[0][0];
    let in2 = inputs[0][1];
    let outputStream = outputs[0][0];
    for (let i = 0; i < in1.length; i++) {
      outputStream[i] = in2[i] / in1[i];
    }
    return true;
  }
}
ReverseDiv.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "audio input connection 1",
    varLength: true
  },
  {
    isHot: true,
    type: "signal",
    description: "audio input connection 2",
    varLength: true
  }
];
ReverseDiv.outlets = [
  {
    type: "signal",
    description: "audio output connection",
    varLength: true
  }
];
ReverseDiv.args = [
  {
    type: "number",
    optional: true,
    description: "initial argument",
    default: 0
  }
];
ReverseDiv.argsOffset = 1;


/***/ }),

/***/ "./src/objects/dsp/rev_sub.ts":
/*!************************************!*\
  !*** ./src/objects/dsp/rev_sub.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReverseSub)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

class ReverseSub extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let in1 = inputs[0][0];
    let in2 = inputs[0][1];
    let outputStream = outputs[0][0];
    for (let i = 0; i < in1.length; i++) {
      outputStream[i] = in2[i] - in1[i];
    }
    return true;
  }
}
ReverseSub.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "audio input connection 1",
    varLength: true
  },
  {
    isHot: true,
    type: "signal",
    description: "audio input connection 2",
    varLength: true
  }
];
ReverseSub.outlets = [
  {
    type: "signal",
    description: "audio output connection",
    varLength: true
  }
];
ReverseSub.args = [
  {
    type: "number",
    optional: true,
    description: "initial argument",
    default: 0
  }
];
ReverseSub.argsOffset = 1;


/***/ }),

/***/ "./src/objects/dsp/sub.ts":
/*!********************************!*\
  !*** ./src/objects/dsp/sub.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sub)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

class Sub extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let in1 = inputs[0][0];
    let in2 = inputs[0][1];
    let outputStream = outputs[0][0];
    for (let i = 0; i < in1.length; i++) {
      outputStream[i] = in1[i] - in2[i];
    }
    return true;
  }
}
Sub.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "audio input connection 1",
    varLength: true
  },
  {
    isHot: true,
    type: "signal",
    description: "audio input connection 2",
    varLength: true
  }
];
Sub.outlets = [
  {
    type: "signal",
    description: "audio output connection",
    varLength: true
  }
];
Sub.args = [
  {
    type: "number",
    optional: true,
    description: "initial argument",
    default: 0
  }
];
Sub.argsOffset = 1;
Sub.docs = "math/docs/sub~.html";


/***/ }),

/***/ "./src/package-info.ts":
/*!*****************************!*\
  !*** ./src/package-info.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ "./package.json");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/ (_package_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_package_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_package_json__WEBPACK_IMPORTED_MODULE_0__, 2))));


/***/ }),

/***/ "./src/sdk.ts":
/*!********************!*\
  !*** ./src/sdk.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bang": () => (/* binding */ Bang),
/* harmony export */   "BaseObject": () => (/* binding */ BaseObject),
/* harmony export */   "BaseUI": () => (/* binding */ BaseUI),
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "CanvasUI": () => (/* binding */ CanvasUI),
/* harmony export */   "DefaultObject": () => (/* binding */ DefaultObject),
/* harmony export */   "DefaultUI": () => (/* binding */ DefaultUI),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "Patcher": () => (/* binding */ Patcher),
/* harmony export */   "React": () => (/* binding */ React),
/* harmony export */   "Utils": () => (/* binding */ Utils),
/* harmony export */   "generateDefaultObject": () => (/* binding */ generateDefaultObject),
/* harmony export */   "generateRemoteObject": () => (/* binding */ generateRemoteObject),
/* harmony export */   "generateRemotedObject": () => (/* binding */ generateRemotedObject),
/* harmony export */   "isBang": () => (/* binding */ isBang)
/* harmony export */ });
const sdk = globalThis.jspatcherEnv.sdk;
const {
  React,
  Patcher,
  Box,
  Line,
  BaseObject,
  BaseUI,
  DefaultObject,
  DefaultUI,
  CanvasUI,
  Utils,
  generateRemotedObject,
  generateDefaultObject,
  generateRemoteObject,
  Bang,
  isBang
} = sdk;


/***/ }),

/***/ "../../common/web/package.json":
/*!*************************************!*\
  !*** ../../common/web/package.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"@electrosmith/package-math","version":"1.0.0","description":"The math package for jspatcher","main":"dist/index.js","scripts":{"build":"webpack --mode development","build-watch":"webpack --mode development --watch --stats-children"},"keywords":["jspatcher"],"jspatcher":{"isJSPatcherPackage":true,"thumbnail":"","jspatpkg":"index.jspatpkg.js"},"author":"Corvus Prudens","license":"MIT","repository":"https://github.com/electro-smith/Patcher-Objects","devDependencies":{"@jspatcher/jspatcher":"file:../../../frontend","@types/react":"^17.0.19","clean-webpack-plugin":"^4.0.0-alpha.0","css-loader":"^6.4.0","esbuild-loader":"^2.15.1","react":"^17.0.2","sass":"^1.45.2","sass-loader":"^12.2.0","style-loader":"^3.3.0","typescript":"^4.4.2","webpack":"^5.51.1","webpack-cli":"^4.8.0"}}');

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"@electrosmith/package-math","version":"1.0.0","description":"The math package for jspatcher","main":"dist/index.js","scripts":{"build":"webpack --mode development","build-watch":"webpack --mode development --watch --stats-children"},"keywords":["jspatcher"],"jspatcher":{"isJSPatcherPackage":true,"thumbnail":"","jspatpkg":"index.jspatpkg.js"},"author":"Corvus Prudens","license":"MIT","repository":"https://github.com/electro-smith/Patcher-Objects","devDependencies":{"@jspatcher/jspatcher":"file:../../../frontend","@types/react":"^17.0.19","clean-webpack-plugin":"^4.0.0-alpha.0","css-loader":"^6.4.0","esbuild-loader":"^2.15.1","react":"^17.0.2","sass":"^1.45.2","sass-loader":"^12.2.0","style-loader":"^3.3.0","typescript":"^4.4.2","webpack":"^5.51.1","webpack-cli":"^4.8.0"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/index.jspatpkg.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _objects_block_binary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/block/binary */ "./src/objects/block/binary.ts");
/* harmony import */ var _objects_block_unary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/block/unary */ "./src/objects/block/unary.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk */ "./src/sdk.ts");
/* harmony import */ var _common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/web/jsDspObject */ "../../common/web/jsDspObject.ts");
/* harmony import */ var _objects_dsp_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objects/dsp/add */ "./src/objects/dsp/add.ts");
/* harmony import */ var _objects_dsp_mul__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects/dsp/mul */ "./src/objects/dsp/mul.ts");
/* harmony import */ var _objects_dsp_sub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objects/dsp/sub */ "./src/objects/dsp/sub.ts");
/* harmony import */ var _objects_dsp_div__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./objects/dsp/div */ "./src/objects/dsp/div.ts");
/* harmony import */ var _objects_dsp_rev_div__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./objects/dsp/rev_div */ "./src/objects/dsp/rev_div.ts");
/* harmony import */ var _objects_dsp_rev_sub__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./objects/dsp/rev_sub */ "./src/objects/dsp/rev_sub.ts");
/* harmony import */ var _objects_dsp_hip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./objects/dsp/hip */ "./src/objects/dsp/hip.ts");
/* harmony import */ var _objects_dsp_lop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./objects/dsp/lop */ "./src/objects/dsp/lop.ts");
/* harmony import */ var _objects_dsp_bp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./objects/dsp/bp */ "./src/objects/dsp/bp.ts");
/* harmony import */ var _objects_dsp_abs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./objects/dsp/abs */ "./src/objects/dsp/abs.ts");
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
var _a, _b;














const Binary = (0,_sdk__WEBPACK_IMPORTED_MODULE_2__.generateDefaultObject)(_objects_block_binary__WEBPACK_IMPORTED_MODULE_0__["default"]);
const Unary = (0,_sdk__WEBPACK_IMPORTED_MODULE_2__.generateDefaultObject)(_objects_block_unary__WEBPACK_IMPORTED_MODULE_1__["default"]);
const BinaryObjects = {};
const binary_functions = {
  "+": { f: (a, b) => a + b, n: "Add", d: "math/docs/add.html" },
  "-": { f: (a, b) => a - b, n: "Sub", d: "math/docs/sub.html" },
  "!-": { f: (a, b) => b - a, n: "Reverse Sub", d: "" },
  "*": { f: (a, b) => a * b, n: "Mul", d: "math/docs/mul.html" },
  "/": { f: (a, b) => a / b, n: "Div", d: "math/docs/div.html" },
  "!/": { f: (a, b) => b / a, n: "Reverse Div", d: "" },
  "==": { f: (a, b) => a == b, n: "Equal", d: "math/docs/equal.html" },
  "!=": { f: (a, b) => a != b, n: "Not equal", d: "math/docs/notequal.html" },
  ">": { f: (a, b) => a > b, n: "Greater", d: "math/docs/greaterthan.html" },
  ">=": { f: (a, b) => a >= b, n: "Greater or equal", d: "math/docs/greaterthanorequal.html" },
  "<": { f: (a, b) => a < b, n: "Less", d: "math/docs/lessthan.html" },
  "<=": { f: (a, b) => a <= b, n: "Less or equal", d: "math/docs/lessthanorequal.html" },
  "&&": { f: (a, b) => a && b, n: "Boolean AND", d: "math/docs/andlogical.html" },
  "||": { f: (a, b) => a || b, n: "Boolean OR", d: "math/docs/orlogical.html" },
  "max": { f: (a, b) => a > b ? a : b, n: "Max", d: "math/docs/max.html" },
  "min": { f: (a, b) => a < b ? a : b, n: "Min", d: "math/docs/min.html" },
  "pow": { f: (a, b) => a ** b, n: "Power", d: "" },
  "%": { f: (a, b) => a % b, n: "Mod", d: "math/docs/mod.html" },
  "!%": { f: (a, b) => b % a, n: "Reverse Mod", d: "" }
};
for (const key in binary_functions) {
  BinaryObjects[key] = (_a = class extends Binary {
    constructor() {
      super(...arguments);
      this.execute = binary_functions[key].f;
    }
    static get _name() {
      return binary_functions[key].n;
    }
  }, _a.description = binary_functions[key].n, _a.docs = binary_functions[key].d, _a);
}
const UnaryObjects = {
  "abs~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_3__.generateObject)(_objects_dsp_abs__WEBPACK_IMPORTED_MODULE_13__["default"], "Abs")
};
const unary_functions = {
  "!": { f: (a) => !a, n: "Not", d: "" },
  "~": { f: (a) => ~a, n: "Invert", d: "" },
  "abs": { f: (a) => Math.abs(a), n: "Absolute Value", d: "math/docs/abs.html" }
};
for (const key in unary_functions) {
  UnaryObjects[key] = (_b = class extends Unary {
    constructor() {
      super(...arguments);
      this.execute = unary_functions[key].f;
    }
    static get _name() {
      return unary_functions[key].n;
    }
  }, _b.description = unary_functions[key].n, _b.docs = unary_functions[key].d, _b);
}
const BinaryAudioObjects = {
  "+~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_3__.generateObject)(_objects_dsp_add__WEBPACK_IMPORTED_MODULE_4__["default"], "Add"),
  "-~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_3__.generateObject)(_objects_dsp_sub__WEBPACK_IMPORTED_MODULE_6__["default"], "Sub"),
  "*~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_3__.generateObject)(_objects_dsp_mul__WEBPACK_IMPORTED_MODULE_5__["default"], "Mul"),
  "/~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_3__.generateObject)(_objects_dsp_div__WEBPACK_IMPORTED_MODULE_7__["default"], "Div"),
  "!/~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_3__.generateObject)(_objects_dsp_rev_div__WEBPACK_IMPORTED_MODULE_8__["default"], "Reverse Div"),
  "!-~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_3__.generateObject)(_objects_dsp_rev_sub__WEBPACK_IMPORTED_MODULE_9__["default"], "Reverse Sub")
};
const FilterAudioObjects = {
  "hip~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_3__.generateObject)(_objects_dsp_hip__WEBPACK_IMPORTED_MODULE_10__["default"], "Hip"),
  "lop~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_3__.generateObject)(_objects_dsp_lop__WEBPACK_IMPORTED_MODULE_11__["default"], "Lop"),
  "bp~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_3__.generateObject)(_objects_dsp_bp__WEBPACK_IMPORTED_MODULE_12__["default"], "Bp")
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, BinaryObjects), UnaryObjects), BinaryAudioObjects), FilterAudioObjects));

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=index.jspatpkg.js.map