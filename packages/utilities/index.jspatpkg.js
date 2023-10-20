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
/* harmony export */   "extractFirstIfSingle": () => (/* binding */ extractFirstIfSingle),
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
  // Produces a function that iterates over two lists,
  // performs the given operation on any pair of numbers,
  // and returns the shortest collection between the two
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
  }
  return data;
}
function extractFirstIfSingle(data) {
  if ((data instanceof Message || data instanceof Array) && data.length === 1) {
    return data[0];
  }
  return data;
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
function extractFirst(data) {
  if (data instanceof Array) {
    return data[0];
  }
  return data;
}
function generateObject(Processor, name, dependencies, enums) {
  var _a;
  let props = Processor.props;
  for (const [key, value] of Object.entries(Processor.paramDescriptors)) {
    props[key] = {
      type: "number",
      default: value.defaultValue,
      description: value.description,
      alwaysSerialize: value.alwaysSerialize
    };
  }
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
    updateParams() {
      const { node } = this._;
      if (!node)
        return;
      for (const [name2, param] of node.parameters) {
        const value = this.getProp(name2);
        if (name2 in this.meta.props)
          param.setValueAtTime(value, 0);
      }
    }
    subscribe() {
      super.subscribe();
      this.on("preInit", () => {
        var _a2;
        const { inputs, outputs } = {
          inputs: Processor.inlets.length,
          outputs: Processor.outlets.length
        };
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
        this.inletAudioConnections = this._.constants.map((node) => ({
          node: node.offset,
          index: 0
        }));
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
        const url = (0,_workletCreator__WEBPACK_IMPORTED_MODULE_2__["default"])(
          Processor,
          dspId,
          this.audioCtx.sampleRate,
          dependencies,
          enums
        );
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
        this.updateParams();
      });
      this.on("propsUpdated", () => {
        this.updateParams();
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
        const value = extractFirst(data);
        if (typeof value === "number") {
          if (this._.constants[inlet] && !this._.constantsConnected[inlet]) {
            const constant = this._.constants[inlet];
            constant.offset.value = constant.offset.value;
            constant.offset.linearRampToValueAtTime(
              value,
              this.audioCtx.currentTime + this.getProp("smoothInput")
            );
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
  }, _a.package = _index__WEBPACK_IMPORTED_MODULE_0__.name, _a.author = _index__WEBPACK_IMPORTED_MODULE_0__.author, _a.version = _index__WEBPACK_IMPORTED_MODULE_0__.version, _a.description = Processor.description, _a.inlets = Processor.inlets, _a.outlets = Processor.outlets, _a.args = Processor.args, _a.props = props, _a.docs = Processor.docs, _a.helpFiles = Processor.helpFiles, _a.UI = _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultUI, _a;
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
  // static get parameterDescriptors() {
  //     const params = [] as JsParamDescriptor[];
  //     for (const name in this.paramDescriptors) {
  //         params.push(this.paramDescriptors[name]);
  //     }
  //     return params;
  // }
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

/***/ "../../common/web/scaleFunction.ts":
/*!*****************************************!*\
  !*** ../../common/web/scaleFunction.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scale": () => (/* binding */ scale)
/* harmony export */ });

function scale(input, inputMin, inputMax, outputMin, outputMax) {
  const inputRange = inputMax - inputMin;
  const outputRange = outputMax - outputMin;
  if (inputRange === 0) {
    return outputMin;
  }
  return (input - inputMin) * outputRange / inputRange + outputMin;
}


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

        const ParameterDescriptors = ${JSON.stringify(
    processor.paramDescriptors
  )}

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
                return Object.entries(ParameterDescriptors).map(([_, value]) => value);
            }
        }

        // TODO -- fix already registered error
        registerProcessor("${dspId}", JsWorkletProcessor);

    `;
  const processorCodeCleaned = processorCode.replace(
    /_.+?__WEBPACK_IMPORTED_MODULE_\d+__\./g,
    ""
  );
  const url = URL.createObjectURL(
    new Blob([processorCodeCleaned], { type: "text/javascript" })
  );
  return url;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getJsWorkletProcessor);


/***/ }),

/***/ "./src/objects/block/append.ts":
/*!*************************************!*\
  !*** ./src/objects/block/append.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Append": () => (/* binding */ Append)
/* harmony export */ });
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");



class Append extends _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { result: void 0, appender: void 0 };
  }
  updateAppender(args) {
    if (args.length == 0) {
      this._.appender = void 0;
    } else {
      this._.appender = args[0];
    }
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 2;
      this.outlets = 1;
      this.updateAppender(this.args);
    });
    this.on("updateArgs", (args) => {
      this.updateAppender(args);
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_1__.isBang)(data)) {
          try {
            if (data instanceof Array || data instanceof _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.Message) {
              this._.result = _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.Message.from(data);
            } else {
              this._.result = _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.Message.from([data]);
            }
            if (this._.appender instanceof Array || this._.appender instanceof _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.Message) {
              this._.result = _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.Message.from(this._.result.concat(this._.appender));
            } else {
              this._.result.push(this._.appender);
            }
            this.outlet(0, this._.result);
          } catch (e) {
            this.error(e);
            return;
          }
        } else {
          this.outlet(0, this._.result);
        }
      } else if (inlet === 1) {
        this.updateAppender([data]);
      }
    });
  }
}
Append.description = "Append a value to a message";
Append.inlets = [
  {
    isHot: true,
    type: "anything",
    description: "The input message"
  },
  {
    isHot: false,
    type: "anything",
    description: "The item to append"
  }
];
Append.outlets = [{
  type: "anything",
  description: "The resulting message"
}];
Append.args = [{
  type: "anything",
  optional: true,
  description: "The item to append"
}];
Append.docs = "utilities/docs/append.html";
Append.helpFiles = ["utilities/help/append.bell"];


/***/ }),

/***/ "./src/objects/block/change.ts":
/*!*************************************!*\
  !*** ./src/objects/block/change.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Change)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Change extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { result: this.args[0] || void 0 };
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 1;
    });
    this.on("argsUpdated", ({ args }) => {
      if (args.length > 0)
        this._.result = args[0];
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          try {
            if (this._.result != data) {
              this._.result = data;
              this.outlet(0, this._.result);
            }
          } catch (e) {
            this.error(e);
            return;
          }
        } else {
          this.outlet(0, this._.result);
        }
      }
    });
  }
}
Change.description = "Output a value only when the input stream changes";
Change.inlets = [{
  isHot: true,
  type: "anything",
  description: "The input data stream"
}];
Change.outlets = [{
  type: "anything",
  description: "A value that has changed"
}];
Change.args = [{
  type: "anything",
  optional: true,
  description: "An initial value to compare against"
}];
Change.docs = "utilities/docs/change.html";
Change.helpFiles = ["utilities/help/change.bell"];


/***/ }),

/***/ "./src/objects/block/counter.ts":
/*!**************************************!*\
  !*** ./src/objects/block/counter.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Counter)
/* harmony export */ });
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");



class Counter extends _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { start: 0, stop: 0, step: 1, current_step: 0, num_satisfied: 0 };
  }
  updateRange(args) {
    if (args.length === 1) {
      this._.start = 0;
      this._.stop = +args[0];
      this._.step = 1;
    } else if (args.length === 2) {
      this._.start = +args[0];
      this._.stop = +args[1];
      this._.step = 1;
    } else {
      this._.start = +args[0];
      this._.stop = +args[1];
      this._.step = +args[2];
    }
    if (this._.start <= this._.stop) {
      if (this._.step <= 0) {
        this.error("iteration will never terminate");
        return;
      }
    } else if (this._.start > this._.stop) {
      if (this._.step >= 0) {
        this.error("iteration will never terminate");
        return;
      }
    }
    this._.current_step = this._.start;
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 3;
      this.updateRange(this.args);
    });
    this.on("argsUpdated", ({ args }) => {
      this.updateRange(args);
    });
    this.on("inlet", ({ inlet, data }) => {
      if (inlet === 0) {
        this.outlet(0, this._.current_step);
        this._.current_step += this._.step;
        if (this._.start <= this._.stop) {
          if (this._.current_step + this._.step > this._.stop) {
            this._.num_satisfied += 1;
            this.outlet(1, new _sdk__WEBPACK_IMPORTED_MODULE_1__.Bang());
            this.outlet(2, this._.num_satisfied);
            this._.current_step = this._.start;
          }
        } else if (this._.start > this._.stop) {
          if (this._.current_step + this._.step < this._.stop) {
            this._.num_satisfied += 1;
            this.outlet(1, new _sdk__WEBPACK_IMPORTED_MODULE_1__.Bang());
            this.outlet(2, this._.num_satisfied);
            this._.current_step = this._.start;
          }
        }
      } else if (inlet === 1) {
        const step = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.extractFirst)(data);
        if (typeof step !== "number")
          return;
        this._.current_step = step > this._.stop ? this._.stop : step < this._.start ? this._.start : step;
      }
    });
  }
}
Counter.package = "electrosmith";
Counter.author = "Corvus Prudens";
Counter.version = "1.0";
Counter.description = "Iterates over the given range.";
Counter.inlets = [
  {
    isHot: true,
    type: "bang",
    description: "Advance the range one step"
  },
  {
    isHot: false,
    type: "number",
    description: "Set the current step in the range"
  }
];
Counter.outlets = [
  {
    type: "number",
    description: "The current step in the range"
  },
  {
    type: "bang",
    description: "Bang when the range is satisfied"
  },
  {
    type: "number",
    description: "Outputs the number of ranges satisfied"
  }
];
Counter.args = [
  {
    type: "number",
    description: "The number of iterations if one argument is provided, or the start of the range",
    optional: false
  },
  {
    type: "number",
    description: "The end of the range",
    optional: true
  },
  {
    type: "number",
    description: "The step size",
    optional: true
  }
];
Counter.docs = "utilities/docs/counter.html";


/***/ }),

/***/ "./src/objects/block/dbtopow.ts":
/*!**************************************!*\
  !*** ./src/objects/block/dbtopow.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dbtopow)
/* harmony export */ });
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");



class Dbtopow extends _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { power: void 0 };
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
          let value = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.extractFirst)(data);
          try {
            if (value <= 0) {
              this._.power = 0;
            } else {
              if (value > 870)
                value = 870;
              this._.power = Math.exp(2.302585092994046 * 0.1 * (value - 100));
            }
          } catch (e) {
            this.error(e);
            return;
          }
        }
        this.outlet(0, this._.power);
      }
    });
  }
}
Dbtopow.package = "electrosmith";
Dbtopow.author = "btice";
Dbtopow.version = "1.0";
Dbtopow.description = "Convert decibels to power units (equal to the square of RMS Amplitude)";
Dbtopow.inlets = [
  {
    isHot: true,
    type: "number",
    description: "Decibels"
  }
];
Dbtopow.outlets = [{
  type: "number",
  description: "Power"
}];
Dbtopow.docs = "utilities/docs/dbtopow.html";


/***/ }),

/***/ "./src/objects/block/dbtorms.ts":
/*!**************************************!*\
  !*** ./src/objects/block/dbtorms.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dbtorms)
/* harmony export */ });
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");



class Dbtorms extends _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { rms: void 0 };
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
          let value = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.extractFirst)(data);
          try {
            if (value <= 0) {
              this._.rms = 0;
            } else {
              if (value > 485)
                value = 485;
              this._.rms = Math.exp(2.302585092994046 * 0.05 * (value - 100));
            }
          } catch (e) {
            this.error(e);
            return;
          }
        }
        this.outlet(0, this._.rms);
      }
    });
  }
}
Dbtorms.package = "electrosmith";
Dbtorms.author = "btice";
Dbtorms.version = "1.0";
Dbtorms.description = "Convert decibels to power units (equal to the square of RMS Amplitude)";
Dbtorms.inlets = [
  {
    isHot: true,
    type: "number",
    description: "Decibels"
  }
];
Dbtorms.outlets = [{
  type: "number",
  description: "RMS Amplitude"
}];
Dbtorms.docs = "utilities/docs/dbtorms.html";


/***/ }),

/***/ "./src/objects/block/ftom.ts":
/*!***********************************!*\
  !*** ./src/objects/block/ftom.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ftom)
/* harmony export */ });
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");



class Ftom extends _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { note: void 0 };
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
          const value = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.extractFirst)(data);
          try {
            if (value <= 0) {
              this._.note = -1500;
            } else {
              this._.note = 12 * Math.log(value / 220) / Math.log(2) + 57.01;
            }
          } catch (e) {
            this.error(e);
            return;
          }
        }
        this.outlet(0, this._.note);
      }
    });
  }
}
Ftom.package = "electrosmith";
Ftom.author = "btice";
Ftom.version = "1.0";
Ftom.description = "Convert frequency in Hz to midi note number";
Ftom.inlets = [
  {
    isHot: true,
    type: "number",
    description: "Frequency"
  }
];
Ftom.outlets = [{
  type: "number",
  description: "Midi Note Number"
}];
Ftom.docs = "utilities/docs/ftom.html";


/***/ }),

/***/ "./src/objects/block/gate.ts":
/*!***********************************!*\
  !*** ./src/objects/block/gate.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gate)
/* harmony export */ });
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");



class Gate extends _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { selection: 0, data: 0 };
  }
  handleUpdateArgs(args) {
    if (args.length !== 1) {
      this.error("Outlet count required");
      return;
    }
    const outlets = +args[0];
    this.outlets = outlets;
    this.setMeta({
      outlets: [
        ...new Array(outlets).fill({
          type: "anything",
          description: "The value in the right inlet if the index matches"
        })
      ]
    });
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.handleUpdateArgs(this.args);
      this.inlets = 2;
    });
    this.on("updateArgs", (args) => {
      this.handleUpdateArgs(args);
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_1__.isBang)(data)) {
          const value = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.extractFirst)(data);
          if (typeof value === "number") {
            const clamped = Math.min(Math.abs(Math.floor(value)), this.outlets);
            this._.selection = clamped;
          }
        }
      } else if (inlet === 1) {
        if (this._.selection > 0) {
          this.outlet(this._.selection - 1, data);
        }
      }
    });
  }
}
Gate.description = "Route an inlet to multiple outlets";
Gate.inlets = [
  {
    isHot: false,
    type: "number",
    description: "Which outlet to send the input to"
  },
  {
    isHot: true,
    type: "anything",
    description: "The value to send out selected outlet"
  }
];
Gate.args = [{
  type: "number",
  optional: false,
  default: 2,
  description: "The number of outlets to select from"
}];
Gate.docs = "utilities/docs/gate.html";
Gate.helpFiles = ["utilities/help/gate.bell"];


/***/ }),

/***/ "./src/objects/block/iter.ts":
/*!***********************************!*\
  !*** ./src/objects/block/iter.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Iter)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Iter extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { start: 0, stop: 0, step: 1 };
  }
  updateRange(args) {
    const processed = args.map((arg) => Math.floor(+arg));
    if (args.length === 1) {
      this._.start = 0;
      this._.stop = processed[0];
      this._.step = 1;
    } else if (args.length === 2) {
      this._.start = processed[0];
      this._.stop = processed[1];
      this._.step = 1;
    } else {
      this._.start = processed[0];
      this._.stop = processed[1];
      this._.step = processed[2];
    }
    if (this._.start <= this._.stop && this._.step <= 0) {
      this.error("iteration will never terminate");
      return;
    } else if (this._.start > this._.stop && this._.step >= 0) {
      this.error("iteration will never terminate");
      return;
    }
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 3;
      this.updateRange(this.args);
    });
    this.on("argsUpdated", ({ args }) => {
      this.updateRange(args);
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (this._.start <= this._.stop) {
          if (this._.step <= 0) {
            this.error("iteration will never terminate");
            return;
          }
          for (let i = this._.start; i < this._.stop; i += this._.step) {
            this.outlet(2, i);
            this.outlet(0, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
          }
          this.outlet(1, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
        } else {
          if (this._.step >= 0) {
            this.error("iteration will never terminate");
            return;
          }
          for (let i = this._.start; i > this._.stop; i += this._.step) {
            this.outlet(2, i);
            this.outlet(0, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
          }
          this.outlet(1, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
        }
      }
    });
  }
}
Iter.package = "electrosmith";
Iter.author = "Corvus Prudens";
Iter.version = "1.0";
Iter.description = "Repeatedly produce bangs until the range is satisfied.";
Iter.inlets = [
  {
    isHot: true,
    type: "bang",
    description: "Start the iteration"
  }
];
Iter.outlets = [
  {
    type: "bang",
    description: "Bang for each step in the range"
  },
  {
    type: "bang",
    description: "Bang when the range is satisfied"
  },
  {
    type: "number",
    description: "Outputs the value at each step in the range"
  }
];
Iter.args = [
  {
    type: "number",
    description: "The number of iterations if one argument is provided, or the start of the range",
    optional: false
  },
  {
    type: "number",
    description: "The end of the range",
    optional: true
  },
  {
    type: "number",
    description: "The step size",
    optional: true
  }
];
Iter.docs = "utilities/docs/iter.html";
Iter.helpFiles = ["utilities/help/iter.bell"];


/***/ }),

/***/ "./src/objects/block/loadbang.ts":
/*!***************************************!*\
  !*** ./src/objects/block/loadbang.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loadbang)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Loadbang extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 1;
      this.patcher.on("postInited", () => this.outlet(0, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang()));
    });
    this.on("inlet", ({ inlet }) => {
      if (inlet === 0)
        this.outlet(0, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
    });
  }
}
Loadbang.description = "Bang on patcher load.";
Loadbang.inlets = [{
  isHot: true,
  type: "anything",
  description: "Anything to transform to a bang."
}];
Loadbang.outlets = [{
  type: "bang",
  description: "Bang on patcher load or inlet."
}];
Loadbang.docs = "utilities/docs/loadbang.html";
Loadbang.helpFiles = ["utilities/help/loadbang.bell"];


/***/ }),

/***/ "./src/objects/block/loadmess.ts":
/*!***************************************!*\
  !*** ./src/objects/block/loadmess.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loadmess)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Loadmess extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 1;
      if (this.args.length < 1) {
        this.error("No message to output on patcher load.");
        return;
      }
      this.patcher.on("postInited", () => this.outlet(0, this.args[0]));
    });
    this.on("inlet", ({ inlet }) => {
      if (inlet === 0) {
        if (this.args.length < 1) {
          this.error("No message to output on patcher load.");
          return;
        }
        this.outlet(0, this.args[0]);
      }
    });
  }
}
Loadmess.description = "Output the given message on patcher load.";
Loadmess.inlets = [{
  isHot: true,
  type: "anything",
  description: "Trigger the message output."
}];
Loadmess.outlets = [{
  type: "anything",
  description: "Sent out on patcher load or inlet."
}];
Loadmess.args = [{
  type: "anything",
  optional: false,
  description: "Message to output on patcher load."
}];
Loadmess.docs = "utilities/docs/loadmess.html";
Loadmess.helpFiles = ["utilities/help/loadmess.bell"];


/***/ }),

/***/ "./src/objects/block/mtof.ts":
/*!***********************************!*\
  !*** ./src/objects/block/mtof.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mtof)
/* harmony export */ });
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");



class Mtof extends _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { freq: void 0 };
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
          const value = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.extractFirst)(data);
          try {
            if (value <= -1500) {
              this._.freq = 0;
            } else if (value > 1499) {
              this._.freq = 440 * Math.exp(0.0577625565 * (1499 - 69));
            } else {
              this._.freq = 440 * Math.exp(0.0577625565 * (value - 69));
            }
          } catch (e) {
            this.error(e);
            return;
          }
        }
        this.outlet(0, this._.freq);
      }
    });
  }
}
Mtof.package = "electrosmith";
Mtof.author = "beserge";
Mtof.version = "1.0";
Mtof.description = "Convert midi note number to frequency in Hz";
Mtof.inlets = [
  {
    isHot: true,
    type: "number",
    description: "Midi Note Number"
  }
];
Mtof.outlets = [{
  type: "number",
  description: "Frequency"
}];
Mtof.docs = "utilities/docs/mtof.html";


/***/ }),

/***/ "./src/objects/block/pack.ts":
/*!***********************************!*\
  !*** ./src/objects/block/pack.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pack": () => (/* binding */ Pack)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Pack extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
  constructor() {
    super(...arguments);
    //   static docs: string = "utilities/docs/append.html";
    //   static helpFiles: string[] = ["utilities/help/append.bell"];
    this._ = { value: void 0 };
  }
  resizeInlets(count) {
    if (count < 1) {
      this.error("Cannot pack less than 1 element");
      return;
    }
    let new_meta = Array.from({ length: count }, (_, i) => {
      return {
        type: "anything",
        description: `Element ${i + 1}`,
        isHot: i === 0
      };
    });
    this.setMeta({ inlets: new_meta });
    this.inlets = count;
    this._.value = Array.from({ length: count }, () => 0);
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.outlets = 1;
      this.resizeInlets(this.args[0]);
    });
    this.on("updateArgs", (args) => {
      this.resizeInlets(args[0]);
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet < this._.value.length) {
        this._.value[inlet] = data;
      }
      if (inlet === 0)
        this.outlet(0, this._.value);
    });
  }
}
Pack.description = "Pack the inputs into a list";
Pack.inlets = [
  {
    isHot: true,
    type: "anything",
    description: "Element 1"
  }
];
Pack.outlets = [
  {
    type: "anything",
    description: "The packed list"
  }
];
Pack.args = [
  {
    type: "number",
    optional: true,
    default: 2,
    description: "The number of elements to pack"
  }
];


/***/ }),

/***/ "./src/objects/block/powtodb.ts":
/*!**************************************!*\
  !*** ./src/objects/block/powtodb.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Powtodb)
/* harmony export */ });
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");



class Powtodb extends _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { decibels: void 0 };
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
          const value = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.extractFirst)(data);
          try {
            if (value <= 0) {
              this._.decibels = 0;
            } else {
              this._.decibels = 100 + 10 / 2.302585092994046 * Math.log(value);
              if (this._.decibels < 0) {
                this._.decibels = 0;
              }
            }
          } catch (e) {
            this.error(e);
            return;
          }
        }
        this.outlet(0, this._.decibels);
      }
    });
  }
}
Powtodb.package = "electrosmith";
Powtodb.author = "btice";
Powtodb.version = "1.0";
Powtodb.description = "Convert power units (equal to square of RMS Amplitude), to decibels";
Powtodb.inlets = [
  {
    isHot: true,
    type: "number",
    description: "Power"
  }
];
Powtodb.outlets = [{
  type: "number",
  description: "Decibels"
}];
Powtodb.docs = "utilities/docs/powtodb.html";
Powtodb.helpFiles = ["utilities/help/powtodb.bell"];


/***/ }),

/***/ "./src/objects/block/prepend.ts":
/*!**************************************!*\
  !*** ./src/objects/block/prepend.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prepend": () => (/* binding */ Prepend)
/* harmony export */ });
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");



class Prepend extends _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { result: void 0, prepender: void 0 };
  }
  updatePrepender(args) {
    if (args.length == 0) {
      this._.prepender = void 0;
    } else {
      this._.prepender = args[0];
    }
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 2;
      this.outlets = 1;
      this.updatePrepender(this.args);
    });
    this.on("updateArgs", (args) => {
      this.updatePrepender(args);
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_1__.isBang)(data)) {
          try {
            if (this._.prepender) {
              if (this._.prepender instanceof Array || this._.prepender instanceof _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.Message) {
                this._.result = _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.Message.from(this._.prepender);
              } else {
                this._.result = _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.Message.from([this._.prepender]);
              }
            } else {
              this._.result = new _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.Message();
            }
            if (data instanceof Array || data instanceof _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.Message) {
              this._.result = _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.Message.from(this._.result.concat(data));
            } else {
              this._.result.push(data);
            }
            this.outlet(0, this._.result);
          } catch (e) {
            this.error(e);
            return;
          }
        } else {
          this.outlet(0, this._.result);
        }
      } else if (inlet === 1) {
        this.updatePrepender([data]);
      }
    });
  }
}
Prepend.description = "Prepend a value to a message";
Prepend.inlets = [
  {
    isHot: true,
    type: "anything",
    description: "The input message"
  },
  {
    isHot: false,
    type: "anything",
    description: "The item to prepend"
  }
];
Prepend.outlets = [{
  type: "anything",
  description: "The resulting message"
}];
Prepend.args = [{
  type: "anything",
  optional: true,
  description: "The item to prepend"
}];
Prepend.docs = "utilities/docs/prepend.html";
Prepend.helpFiles = ["utilities/help/prepend.bell"];


/***/ }),

/***/ "./src/objects/block/rmstodb.ts":
/*!**************************************!*\
  !*** ./src/objects/block/rmstodb.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Rmstodb)
/* harmony export */ });
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");



class Rmstodb extends _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { decibels: void 0 };
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
          const value = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.extractFirst)(data);
          try {
            if (value <= 0) {
              this._.decibels = 0;
            } else {
              this._.decibels = 100 + 20 / 2.302585092994046 * Math.log(value);
              if (this._.decibels < 0) {
                this._.decibels = 0;
              }
            }
          } catch (e) {
            this.error(e);
            return;
          }
        }
        this.outlet(0, this._.decibels);
      }
    });
  }
}
Rmstodb.package = "electrosmith";
Rmstodb.author = "btice";
Rmstodb.version = "1.0";
Rmstodb.description = "Convert RMS Amplitude to Decibels";
Rmstodb.inlets = [
  {
    isHot: true,
    type: "number",
    description: "RMS"
  }
];
Rmstodb.outlets = [{
  type: "number",
  description: "Decibels"
}];
Rmstodb.docs = "utilities/docs/rmstodb.html";


/***/ }),

/***/ "./src/objects/block/route.ts":
/*!************************************!*\
  !*** ./src/objects/block/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Route extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { discriminants: [] };
  }
  handleUpdateArgs(args) {
    if (args.length < 1) {
      this.error("At least one discriminant required");
      return;
    }
    this.outlets = args.length + 1;
    this.inlets = args.length + 1;
    this._.discriminants = args;
    this.setMeta({
      inlets: [
        {
          isHot: true,
          type: "anything",
          description: "The list to route"
        },
        ...args.map(
          (_, index) => ({
            isHot: false,
            type: "anything",
            description: `Set discriminant ${index + 1}`
          })
        )
      ],
      outlets: [
        ...args.map(
          (_, index) => ({
            type: "anything",
            description: `The list if the first element matches discriminant ${index + 1}`
          })
        ),
        {
          type: "anything",
          description: "The list if the first element does not match any discriminant"
        }
      ]
    });
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.handleUpdateArgs(this.args);
    });
    this.on("updateArgs", (args) => {
      this.handleUpdateArgs(args);
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (data instanceof Array && data.length > 1) {
          const discriminant = data[0];
          const index = this._.discriminants.indexOf(discriminant);
          if (index !== -1) {
            this.outlet(index, data.slice(1));
          } else {
            this.outlet(this.outlets - 1, data);
          }
        } else {
          this.outlet(this.outlets - 1, data);
        }
      } else if (inlet <= this._.discriminants.length) {
        this._.discriminants[inlet - 1] = data;
      }
    });
  }
}
Route.description = "Route a list based on the first element";
Route.inlets = [
  {
    isHot: true,
    type: "anything",
    description: "The list to route"
  }
];
Route.args = [
  {
    type: "anything",
    optional: false,
    description: "The routing discriminant"
  }
];
Route.outlets = [];
Route.docs = "utilities/docs/route.html";
Route.helpFiles = ["utilities/help/route.bell"];


/***/ }),

/***/ "./src/objects/block/scale.ts":
/*!************************************!*\
  !*** ./src/objects/block/scale.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scale)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");
/* harmony import */ var _common_web_scaleFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/web/scaleFunction */ "../../common/web/scaleFunction.ts");
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");




class Scale extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { output: void 0, inputLow: void 0, inputHigh: void 0, outputLow: void 0, outputHigh: void 0 };
  }
  updateRange(args) {
    this._.inputLow = args[0] || 0;
    this._.inputHigh = args[1] || 0;
    this._.outputLow = args[2] || 0;
    this._.outputHigh = args[3] || 0;
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 5;
      this.outlets = 1;
    });
    this.on("postInit", () => {
      this.updateRange(this.args);
    });
    this.on("argsUpdated", ({ args }) => {
      this.updateRange(args);
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          try {
            const value = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_2__.extractFirst)(data);
            if (typeof value === "number")
              this._.output = (0,_common_web_scaleFunction__WEBPACK_IMPORTED_MODULE_1__.scale)(value, this._.inputLow, this._.inputHigh, this._.outputLow, this._.outputHigh);
          } catch (e) {
            this.error(e);
            return;
          }
        }
        this.outlet(0, this._.output);
      } else if (inlet === 1) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          this._.inputLow = +data;
        }
      } else if (inlet === 2) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          this._.inputHigh = +data;
        }
      } else if (inlet === 3) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          this._.outputLow = +data;
        }
      } else if (inlet === 4) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          this._.outputHigh = +data;
        }
      }
    });
  }
}
Scale.package = "electrosmith";
Scale.author = "Corvus Prudens";
Scale.version = "1.0";
Scale.description = "Scale a number from an input range to an output range";
Scale.inlets = [
  {
    isHot: true,
    type: "number",
    description: "Number to scale"
  },
  {
    isHot: false,
    type: "number",
    description: "Input range minimum"
  },
  {
    isHot: false,
    type: "number",
    description: "Input range maximum"
  },
  {
    isHot: false,
    type: "number",
    description: "Output range minimum"
  },
  {
    isHot: false,
    type: "number",
    description: "Output range maximum"
  }
];
Scale.outlets = [{
  type: "number",
  description: "Scaled number"
}];
Scale.args = [
  {
    optional: true,
    type: "number",
    description: "Input range minimum"
  },
  {
    optional: true,
    type: "number",
    description: "Input range maximum"
  },
  {
    optional: true,
    type: "number",
    description: "Output range minimum"
  },
  {
    optional: true,
    type: "number",
    description: "Output range maximum"
  }
];
Scale.docs = "utilities/docs/scale.html";
Scale.helpFiles = ["utilities/help/scale.bell"];


/***/ }),

/***/ "./src/objects/block/scalec.ts":
/*!*************************************!*\
  !*** ./src/objects/block/scalec.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScaleClamped)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");
/* harmony import */ var _common_web_scaleFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/web/scaleFunction */ "../../common/web/scaleFunction.ts");
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");




class ScaleClamped extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { output: void 0, inputLow: void 0, inputHigh: void 0, outputLow: void 0, outputHigh: void 0 };
  }
  updateRange(args) {
    this._.inputLow = args[0] || 0;
    this._.inputHigh = args[1] || 0;
    this._.outputLow = args[2] || 0;
    this._.outputHigh = args[3] || 0;
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 5;
      this.outlets = 1;
    });
    this.on("postInit", () => {
      this.updateRange(this.args);
    });
    this.on("argsUpdated", ({ args }) => {
      this.updateRange(args);
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          try {
            const value = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_2__.extractFirst)(data);
            if (typeof value === "number") {
              const clamped = Math.min(Math.max(value, this._.inputLow), this._.inputHigh);
              this._.output = (0,_common_web_scaleFunction__WEBPACK_IMPORTED_MODULE_1__.scale)(clamped, this._.inputLow, this._.inputHigh, this._.outputLow, this._.outputHigh);
            }
          } catch (e) {
            this.error(e);
            return;
          }
        }
        this.outlet(0, this._.output);
      } else if (inlet === 1) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          this._.inputLow = +data;
        }
      } else if (inlet === 2) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          this._.inputHigh = +data;
        }
      } else if (inlet === 3) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          this._.outputLow = +data;
        }
      } else if (inlet === 4) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          this._.outputHigh = +data;
        }
      }
    });
  }
}
ScaleClamped.package = "electrosmith";
ScaleClamped.author = "Corvus Prudens";
ScaleClamped.version = "1.0";
ScaleClamped.description = "Scale a number from an input range to an output range with clamping";
ScaleClamped.inlets = [
  {
    isHot: true,
    type: "number",
    description: "Number to scale"
  },
  {
    isHot: false,
    type: "number",
    description: "Input range minimum"
  },
  {
    isHot: false,
    type: "number",
    description: "Input range maximum"
  },
  {
    isHot: false,
    type: "number",
    description: "Output range minimum"
  },
  {
    isHot: false,
    type: "number",
    description: "Output range maximum"
  }
];
ScaleClamped.outlets = [{
  type: "number",
  description: "Scaled number"
}];
ScaleClamped.args = [
  {
    optional: true,
    type: "number",
    description: "Input range minimum"
  },
  {
    optional: true,
    type: "number",
    description: "Input range maximum"
  },
  {
    optional: true,
    type: "number",
    description: "Output range minimum"
  },
  {
    optional: true,
    type: "number",
    description: "Output range maximum"
  }
];
ScaleClamped.docs = "utilities/docs/scalec.html";
ScaleClamped.helpFiles = ["utilities/help/scalec.bell"];


/***/ }),

/***/ "./src/objects/block/select.ts":
/*!*************************************!*\
  !*** ./src/objects/block/select.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");



class Select extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { selectors: [] };
  }
  handleUpdateArgs(args) {
    if (args.length == 0) {
      this.error("No value to compare against");
      return;
    }
    this._.selectors = args;
    this.setMeta({
      inlets: [
        {
          isHot: true,
          type: "anything",
          description: "The input to evaluate"
        },
        ...new Array(args.length).fill({
          isHot: false,
          type: "anything",
          description: "The value to compare against for this index"
        })
      ],
      outlets: [
        ...new Array(args.length).fill({
          type: "bang",
          description: "Bangs when the input matches the selector at this index"
        }),
        {
          type: "anything",
          description: "Any input that did not match"
        }
      ]
    });
    this.inlets = args.length + 1;
    this.outlets = args.length + 1;
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.handleUpdateArgs(this.args);
    });
    this.on("argsUpdated", ({ args }) => {
      this.handleUpdateArgs(args);
    });
    this.on("inlet", ({ data: rawData, inlet }) => {
      if (inlet === 0) {
        for (let i = 0; i < this._.selectors.length; i++) {
          let data = rawData;
          if (!(this._.selectors[i] instanceof Array)) {
            data = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_1__.extractFirst)(rawData);
          }
          if (data === this._.selectors[i]) {
            this.outlet(i, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
            return;
          }
        }
        this.outlet(this._.selectors.length, rawData);
      } else if (inlet > 0 && inlet <= this._.selectors.length) {
        this._.selectors[inlet - 1] = rawData;
      }
    });
  }
}
Select.description = "Output a bang when the value matches";
Select.inlets = [{
  isHot: true,
  type: "anything",
  description: "The input to evaluate"
}];
Select.outlets = [
  {
    type: "anything",
    description: "Any input that did not match"
  }
];
Select.args = [{
  type: "anything",
  optional: false,
  description: "The value to compare against"
}];
Select.docs = "utilities/docs/select.html";
Select.helpFiles = ["utilities/help/select.bell"];


/***/ }),

/***/ "./src/objects/block/swap.ts":
/*!***********************************!*\
  !*** ./src/objects/block/swap.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Swap)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Swap extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { out2: void 0, arg: this.args[0] };
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 2;
      this.outlets = 2;
    });
    this.on("updateArgs", (args) => {
      this._.arg = void 0;
      this._.out2 = void 0;
      if (!args || args.length === 0)
        return;
      this._.arg = args[0];
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          try {
            this._.out2 = data;
          } catch (e) {
            this.error(e);
            return;
          }
        }
        this.outlet(1, this._.out2);
        this.outlet(0, this._.arg);
      } else if (inlet === 1) {
        this._.arg = data;
      }
    });
  }
}
Swap.description = "Swap input values";
Swap.inlets = [
  {
    isHot: true,
    type: "anything",
    description: "The value to output on the second outlet"
  },
  {
    isHot: false,
    type: "anything",
    description: "The value to output on the first outlet"
  }
];
Swap.outlets = [
  {
    type: "anything",
    description: "The value from the second inlet"
  },
  {
    type: "anything",
    description: "The value from the first inlet"
  }
];
Swap.args = [{
  type: "anything",
  optional: true,
  default: 0,
  description: "Initial value to send out the first inlet"
}];
Swap.docs = "utilities/docs/swap.html";
Swap.helpFiles = ["utilities/help/swap.bell"];


/***/ }),

/***/ "./src/objects/block/switch.ts":
/*!*************************************!*\
  !*** ./src/objects/block/switch.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Switch)
/* harmony export */ });
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");



class Switch extends _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = { selection: 0, data: 0 };
  }
  handleUpdateArgs(args) {
    if (args.length !== 1) {
      this.error("Inlet count required");
      return;
    }
    const inlets = +args[0];
    this.inlets = inlets + 1;
    this.setMeta({
      inlets: [
        {
          isHot: false,
          type: "number",
          description: "Which inlet to route to the output"
        },
        ...new Array(inlets).fill({
          isHot: true,
          type: "anything",
          description: "The value to output on the first outlet"
        })
      ]
    });
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.handleUpdateArgs(this.args);
      this.outlets = 1;
    });
    this.on("updateArgs", (args) => {
      this.handleUpdateArgs(args);
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_1__.isBang)(data)) {
          const value = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.extractFirst)(data);
          if (typeof value === "number") {
            const clamped = Math.min(Math.abs(Math.floor(+data)), this.inlets - 1);
            this._.selection = clamped;
          }
        }
      } else {
        if (inlet === this._.selection) {
          this.outlet(0, data);
        }
      }
    });
  }
}
Switch.description = "Route multiple inlets to a single outlet";
Switch.inlets = [
  {
    isHot: false,
    type: "number",
    description: "Which inlet to route to the output"
  }
];
Switch.outlets = [
  {
    type: "anything",
    description: "The value from the selected inlet"
  }
];
Switch.args = [{
  type: "number",
  optional: false,
  default: 2,
  description: "The number of inlets to select from"
}];
Switch.docs = "utilities/docs/switch.html";
Switch.helpFiles = ["utilities/help/switch.bell"];


/***/ }),

/***/ "./src/objects/block/unpack.ts":
/*!*************************************!*\
  !*** ./src/objects/block/unpack.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Unpack": () => (/* binding */ Unpack)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Unpack extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
  constructor() {
    super(...arguments);
    //   static docs: string = "utilities/docs/append.html";
    //   static helpFiles: string[] = ["utilities/help/append.bell"];
    this._ = { value: void 0 };
  }
  resizeOutlets(count) {
    let new_meta = Array.from({ length: count }, (_, i) => {
      return {
        type: "anything",
        description: `Element ${i + 1}`
      };
    });
    this.setMeta({ outlets: new_meta });
    this.outlets = count;
    this._.value = Array.from({ length: count }, () => 0);
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.resizeOutlets(this.args[0]);
    });
    this.on("updateArgs", (args) => {
      this.resizeOutlets(args[0]);
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          try {
            if (data instanceof Array) {
              this._.value = data;
              let max_len = Math.min(data.length, this._.value.length);
              for (let i = 0; i < max_len; i++)
                this._.value[i] = data[i];
            }
          } catch (e) {
            this.error(e);
            return;
          }
        }
        for (let i = this._.value.length - 1; i > -1; i--) {
          this.outlet(i, this._.value[i]);
        }
      }
    });
  }
}
Unpack.description = "Unpack a list";
Unpack.inlets = [
  {
    isHot: true,
    type: "anything",
    description: "The input list"
  }
];
Unpack.outlets = [
  {
    type: "anything",
    description: "Element 1"
  },
  {
    type: "anything",
    description: "Element 2"
  }
];
Unpack.args = [
  {
    type: "number",
    optional: true,
    default: 2,
    description: "The number of elements to unpack"
  }
];


/***/ }),

/***/ "./src/objects/dsp/mtof_audio.ts":
/*!***************************************!*\
  !*** ./src/objects/dsp/mtof_audio.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MtofAudio)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");


class MtofAudio extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    const frequency = inputs[0][0];
    const outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      const data = frequency[i];
      if (data <= -1500) {
        outputStream[i] = 0;
      } else if (data > 1499) {
        outputStream[i] = 440 * Math.exp(0.0577625565 * (1499 - 69));
      } else {
        outputStream[i] = 440 * Math.exp(0.0577625565 * (data - 69));
      }
    }
    return true;
  }
}
MtofAudio.description = "Convert midi note number to frequency in Hz";
MtofAudio.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "Midi Note Number"
  }
];
MtofAudio.outlets = [{
  type: "signal",
  description: "Frequency"
}];
MtofAudio.argsOffset = 0;
MtofAudio.docs = "utilities/docs/mtof_audio.html";
MtofAudio.helpFiles = ["utilities/help/mtof~.bell"];


/***/ }),

/***/ "./src/objects/dsp/scale_audio.ts":
/*!****************************************!*\
  !*** ./src/objects/dsp/scale_audio.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScaleAudio)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");
/* harmony import */ var _common_web_scaleFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/web/scaleFunction */ "../../common/web/scaleFunction.ts");



class ScaleAudio extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    const inputStream = inputs[0][0];
    const inputLow = inputs[0][1];
    const inputHigh = inputs[0][2];
    const outputLow = inputs[0][3];
    const outputHigh = inputs[0][4];
    const outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      const data = inputStream[i];
      outputStream[i] = (0,_common_web_scaleFunction__WEBPACK_IMPORTED_MODULE_1__.scale)(data, inputLow[i], inputHigh[i], outputLow[i], outputHigh[i]);
    }
    return true;
  }
}
ScaleAudio.description = "Scale a number from an input range to an output range";
ScaleAudio.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "Number to scale"
  },
  {
    isHot: false,
    type: "signal",
    description: "Input range minimum"
  },
  {
    isHot: false,
    type: "signal",
    description: "Input range maximum"
  },
  {
    isHot: false,
    type: "signal",
    description: "Output range minimum"
  },
  {
    isHot: false,
    type: "signal",
    description: "Output range maximum"
  }
];
ScaleAudio.outlets = [{
  type: "signal",
  description: "Scaled number"
}];
ScaleAudio.args = [
  {
    optional: true,
    type: "number",
    description: "Input range minimum",
    default: 0
  },
  {
    optional: true,
    type: "number",
    description: "Input range maximum",
    default: 0
  },
  {
    optional: true,
    type: "number",
    description: "Output range minimum",
    default: 0
  },
  {
    optional: true,
    type: "number",
    description: "Output range maximum",
    default: 0
  }
];
ScaleAudio.argsOffset = 1;
ScaleAudio.docs = "utilities/docs/scale_audio.html";
ScaleAudio.helpFiles = ["utilities/help/scale_audio.bell"];


/***/ }),

/***/ "./src/objects/dsp/scalec_audio.ts":
/*!*****************************************!*\
  !*** ./src/objects/dsp/scalec_audio.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScaleClampedAudio)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");
/* harmony import */ var _common_web_scaleFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/web/scaleFunction */ "../../common/web/scaleFunction.ts");



class ScaleClampedAudio extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    const inputStream = inputs[0][0];
    const inputLow = inputs[0][1];
    const inputHigh = inputs[0][2];
    const outputLow = inputs[0][3];
    const outputHigh = inputs[0][4];
    const outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      const data = inputStream[i];
      const clamped = Math.min(Math.max(data, inputLow[i]), inputHigh[i]);
      outputStream[i] = (0,_common_web_scaleFunction__WEBPACK_IMPORTED_MODULE_1__.scale)(clamped, inputLow[i], inputHigh[i], outputLow[i], outputHigh[i]);
    }
    return true;
  }
}
ScaleClampedAudio.description = "Scale a number from an input range to an output range with clamping";
ScaleClampedAudio.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "Number to scale"
  },
  {
    isHot: false,
    type: "signal",
    description: "Input range minimum"
  },
  {
    isHot: false,
    type: "signal",
    description: "Input range maximum"
  },
  {
    isHot: false,
    type: "signal",
    description: "Output range minimum"
  },
  {
    isHot: false,
    type: "signal",
    description: "Output range maximum"
  }
];
ScaleClampedAudio.outlets = [{
  type: "signal",
  description: "Scaled number"
}];
ScaleClampedAudio.args = [
  {
    optional: true,
    type: "number",
    description: "Input range minimum",
    default: 0
  },
  {
    optional: true,
    type: "number",
    description: "Input range maximum",
    default: 0
  },
  {
    optional: true,
    type: "number",
    description: "Output range minimum",
    default: 0
  },
  {
    optional: true,
    type: "number",
    description: "Output range maximum",
    default: 0
  }
];
ScaleClampedAudio.argsOffset = 1;
ScaleClampedAudio.docs = "utilities/docs/scalec_audio.html";
ScaleClampedAudio.helpFiles = ["utilities/help/scalec_audio.bell"];


/***/ }),

/***/ "./src/objects/dsp/snapshot.ts":
/*!*************************************!*\
  !*** ./src/objects/dsp/snapshot.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SnapshotObject)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");
/* harmony import */ var _common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/web/jsDspObject */ "../../common/web/jsDspObject.ts");



const SnapshotModule = `
    class JsWorkletProcessor extends AudioWorkletProcessor {

        interval;
        accumulator;
        increment;

        constructor(options) {
            super(options);

            this.interval = 0.02;
            this.accumulator = 0;
            this.increment = 1 / sampleRate;

            this.port.onmessage = (e) => {
                this.interval = e.data / 1000;
            }
        }

        process(inputs, outputs, parameters) {
            const input = inputs[0][0];

            for (let i = 0; i < input.length; i++) {
                const level = input[i];
                this.accumulator += this.increment;
                if (this.accumulator >= this.interval) {
                    this.port.postMessage(level);
                    this.accumulator -= this.interval;
                }
            }

            return true;
        }

        // static get parameterDescriptors() {
        //     return ProcessorClass.parameterDescriptors;
        // }
    }

    registerProcessor("snapshot~", JsWorkletProcessor);
`;
const _SnapshotObject = class extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = {
      dspId: "snapshot~",
      defaultInputs: [],
      constants: [],
      constantsConnected: [],
      argsOffset: 0
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
  handleUpdateArgs(args) {
    if (this._.node && args.length > 0) {
      this._.node.port.postMessage(+args[0]);
    }
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      const { inputs, outputs } = { inputs: _SnapshotObject.inlets.length, outputs: _SnapshotObject.outlets.length };
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
      this.inlets = inputs;
      this.outlets = outputs;
      this.disconnectAudio();
      this.inletAudioConnections = this._.constants.map((node) => ({ node: node.offset, index: 0 }));
      this.connectAudio();
    });
    this.on("postInit", async () => {
      const { dspId, constants, merger, argsOffset } = this._;
      const url = URL.createObjectURL(new Blob([SnapshotModule], { type: "text/javascript" }));
      await _common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_1__.JsWorkletManager.addModule(this.audioCtx, dspId, url);
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
      constants.forEach((constant, i) => {
        var _a;
        const argValue = this.args[i - argsOffset];
        if (!this._.constantsConnected[i])
          constant.offset.value = typeof argValue === "number" ? +argValue : (_a = this._.defaultInputs[i]) != null ? _a : 0;
        constant.start();
      });
      this.handleUpdateArgs(this.args);
      this._.node.port.onmessage = (e) => {
        this.outlet(0, e.data);
      };
    });
    this.on("argsUpdated", ({ args }) => {
      this._.constants.forEach((constant, i) => {
        var _a;
        const argValue = +this.args[i - this._.argsOffset];
        if (!this._.constantsConnected[i])
          constant.offset.value = typeof argValue === "number" ? +argValue : (_a = this._.defaultInputs[i]) != null ? _a : 0;
      });
      this.handleUpdateArgs(args);
    });
    this.on("inlet", ({ inlet, data }) => {
      var _a;
      if (inlet === 1) {
        (_a = this._.node) == null ? void 0 : _a.port.postMessage(+data);
      }
    });
    this.on("connectedInlet", () => this.checkAndFillUnconnected());
    this.on("disconnectedInlet", () => this.checkAndFillUnconnected());
    this.on("destroy", () => {
      const { constants, merger, node } = this._;
      constants.forEach((constant) => constant == null ? void 0 : constant.disconnect());
      merger == null ? void 0 : merger.disconnect();
      node == null ? void 0 : node.disconnect();
    });
  }
};
let SnapshotObject = _SnapshotObject;
// static package = package_name;
SnapshotObject.author = "Corvus Prudens";
SnapshotObject.version = "1.0.0";
SnapshotObject.description = "Take a snapshot of a signal";
SnapshotObject.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "Input signal"
  },
  {
    isHot: false,
    type: "number",
    description: "Sampling interval in milliseconds"
  }
];
SnapshotObject.outlets = [
  {
    type: "number",
    description: "Signal value at the point of the trigger"
  }
];
SnapshotObject.args = [
  {
    type: "number",
    optional: true,
    description: "Sampling interval in milliseconds",
    default: 20
  }
];
SnapshotObject.docs = "utilities/docs/snapshot.html";
SnapshotObject.helpFiles = ["utilities/help/snapshot~.bell"];
SnapshotObject.UI = _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultUI;



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
/* harmony import */ var _objects_block_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/block/change */ "./src/objects/block/change.ts");
/* harmony import */ var _objects_block_swap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/block/swap */ "./src/objects/block/swap.ts");
/* harmony import */ var _objects_block_mtof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/block/mtof */ "./src/objects/block/mtof.ts");
/* harmony import */ var _objects_block_ftom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects/block/ftom */ "./src/objects/block/ftom.ts");
/* harmony import */ var _objects_block_powtodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objects/block/powtodb */ "./src/objects/block/powtodb.ts");
/* harmony import */ var _objects_block_dbtopow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects/block/dbtopow */ "./src/objects/block/dbtopow.ts");
/* harmony import */ var _objects_block_dbtorms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objects/block/dbtorms */ "./src/objects/block/dbtorms.ts");
/* harmony import */ var _objects_block_rmstodb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./objects/block/rmstodb */ "./src/objects/block/rmstodb.ts");
/* harmony import */ var _objects_block_iter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./objects/block/iter */ "./src/objects/block/iter.ts");
/* harmony import */ var _objects_block_counter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./objects/block/counter */ "./src/objects/block/counter.ts");
/* harmony import */ var _objects_block_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./objects/block/select */ "./src/objects/block/select.ts");
/* harmony import */ var _objects_block_append__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./objects/block/append */ "./src/objects/block/append.ts");
/* harmony import */ var _objects_block_prepend__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./objects/block/prepend */ "./src/objects/block/prepend.ts");
/* harmony import */ var _objects_dsp_mtof_audio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./objects/dsp/mtof_audio */ "./src/objects/dsp/mtof_audio.ts");
/* harmony import */ var _common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/web/jsDspObject */ "../../common/web/jsDspObject.ts");
/* harmony import */ var _objects_block_scale__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./objects/block/scale */ "./src/objects/block/scale.ts");
/* harmony import */ var _objects_block_scalec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./objects/block/scalec */ "./src/objects/block/scalec.ts");
/* harmony import */ var _objects_dsp_scale_audio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./objects/dsp/scale_audio */ "./src/objects/dsp/scale_audio.ts");
/* harmony import */ var _objects_dsp_scalec_audio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./objects/dsp/scalec_audio */ "./src/objects/dsp/scalec_audio.ts");
/* harmony import */ var _common_web_scaleFunction__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../common/web/scaleFunction */ "../../common/web/scaleFunction.ts");
/* harmony import */ var _objects_block_loadbang__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./objects/block/loadbang */ "./src/objects/block/loadbang.ts");
/* harmony import */ var _objects_block_loadmess__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./objects/block/loadmess */ "./src/objects/block/loadmess.ts");
/* harmony import */ var _objects_block_switch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./objects/block/switch */ "./src/objects/block/switch.ts");
/* harmony import */ var _objects_block_gate__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./objects/block/gate */ "./src/objects/block/gate.ts");
/* harmony import */ var _objects_dsp_snapshot__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./objects/dsp/snapshot */ "./src/objects/dsp/snapshot.ts");
/* harmony import */ var _objects_block_unpack__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./objects/block/unpack */ "./src/objects/block/unpack.ts");
/* harmony import */ var _objects_block_pack__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./objects/block/pack */ "./src/objects/block/pack.ts");
/* harmony import */ var _objects_block_route__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./objects/block/route */ "./src/objects/block/route.ts");





























/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => ({
  change: _objects_block_change__WEBPACK_IMPORTED_MODULE_0__["default"],
  swap: _objects_block_swap__WEBPACK_IMPORTED_MODULE_1__["default"],
  mtof: _objects_block_mtof__WEBPACK_IMPORTED_MODULE_2__["default"],
  ftom: _objects_block_ftom__WEBPACK_IMPORTED_MODULE_3__["default"],
  powtodb: _objects_block_powtodb__WEBPACK_IMPORTED_MODULE_4__["default"],
  dbtopow: _objects_block_dbtopow__WEBPACK_IMPORTED_MODULE_5__["default"],
  dbtorms: _objects_block_dbtorms__WEBPACK_IMPORTED_MODULE_6__["default"],
  rmstodb: _objects_block_rmstodb__WEBPACK_IMPORTED_MODULE_7__["default"],
  iter: _objects_block_iter__WEBPACK_IMPORTED_MODULE_8__["default"],
  counter: _objects_block_counter__WEBPACK_IMPORTED_MODULE_9__["default"],
  select: _objects_block_select__WEBPACK_IMPORTED_MODULE_10__["default"],
  append: _objects_block_append__WEBPACK_IMPORTED_MODULE_11__.Append,
  prepend: _objects_block_prepend__WEBPACK_IMPORTED_MODULE_12__.Prepend,
  scale: _objects_block_scale__WEBPACK_IMPORTED_MODULE_15__["default"],
  scalec: _objects_block_scalec__WEBPACK_IMPORTED_MODULE_16__["default"],
  "mtof~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_14__.generateObject)(_objects_dsp_mtof_audio__WEBPACK_IMPORTED_MODULE_13__["default"], "mtof~"),
  "scale~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_14__.generateObject)(_objects_dsp_scale_audio__WEBPACK_IMPORTED_MODULE_17__["default"], "scale~", [_common_web_scaleFunction__WEBPACK_IMPORTED_MODULE_19__.scale]),
  "scalec~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_14__.generateObject)(_objects_dsp_scalec_audio__WEBPACK_IMPORTED_MODULE_18__["default"], "scalec~", [_common_web_scaleFunction__WEBPACK_IMPORTED_MODULE_19__.scale]),
  loadbang: _objects_block_loadbang__WEBPACK_IMPORTED_MODULE_20__["default"],
  loadmess: _objects_block_loadmess__WEBPACK_IMPORTED_MODULE_21__["default"],
  switch: _objects_block_switch__WEBPACK_IMPORTED_MODULE_22__["default"],
  gate: _objects_block_gate__WEBPACK_IMPORTED_MODULE_23__["default"],
  "snapshot~": _objects_dsp_snapshot__WEBPACK_IMPORTED_MODULE_24__["default"],
  unpack: _objects_block_unpack__WEBPACK_IMPORTED_MODULE_25__.Unpack,
  pack: _objects_block_pack__WEBPACK_IMPORTED_MODULE_26__.Pack,
  route: _objects_block_route__WEBPACK_IMPORTED_MODULE_27__["default"]
}));

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=index.jspatpkg.js.map