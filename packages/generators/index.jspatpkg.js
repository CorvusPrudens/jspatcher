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
      });
      this.on("postInit", async () => {
        const { dspId, constants, merger, splitter, argsOffset } = this._;
        const url = (0,_workletCreator__WEBPACK_IMPORTED_MODULE_2__["default"])(Processor, dspId, this.audioCtx.sampleRate, dependencies, enums);
        await JsWorkletManager.addModule(this.audioCtx, dspId, url);
        const node = new AudioWorkletNode(this.audioCtx, dspId);
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
          const argValue = this.args[i - this._.argsOffset];
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

/***/ "./src/objects/block/line.ts":
/*!***********************************!*\
  !*** ./src/objects/block/line.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Counter)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");

class Counter extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = {
      start: 0,
      last_output: 0,
      grain: 20,
      points: [],
      num_points: 0,
      intervalRef: null,
      timeoutRef: null,
      time: 0,
      current_point: 0
    };
  }
  get_output() {
    const now = performance.now();
    const current_point = this._.points[this._.current_point];
    let progress = current_point.duration === 0 ? 1 : (now - this._.time) / current_point.duration;
    if (progress > 1)
      progress = 1;
    const output = this._.start + (current_point.value - this._.start) * progress;
    return output;
  }
  subscribe() {
    super.subscribe();
    const handleUpdate = () => {
      const current_point = this._.points[this._.current_point];
      const now = performance.now();
      if (now - this._.time >= current_point.duration) {
        this._.current_point++;
        if (this._.current_point >= this._.num_points) {
          this._.current_point = 0;
          this.outlet(1, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
          this.outlet(0, current_point.value);
          if (this._.intervalRef) {
            window.clearInterval(this._.intervalRef);
            this._.intervalRef = null;
          }
          return;
        }
        this._.time = now;
        this._.start = current_point.value;
      }
      const output = this.get_output();
      this.outlet(0, output);
    };
    const handleTimeout = () => {
      handleUpdate();
      this._.intervalRef = window.setInterval(handleUpdate, this._.grain);
    };
    const activateTimer = () => {
      if (this._.timeoutRef) {
        window.clearTimeout(this._.timeoutRef);
        this._.timeoutRef = null;
      }
      if (this._.intervalRef) {
        window.clearInterval(this._.intervalRef);
        this._.intervalRef = null;
      }
      const timeout = this._.grain;
      this._.timeoutRef = window.setTimeout(handleTimeout, timeout);
      this._.time = performance.now();
    };
    this.on("preInit", () => {
      this.inlets = 2;
      this.outlets = 2;
      let maxpoints = this.getProp("maxpoints");
      this._.points = Array.from({ length: maxpoints }, () => ({ value: 0, duration: 0 }));
      if (this.args.length >= 1) {
        this._.start = this.args[0];
      }
      if (this.args.length >= 2) {
        this._.grain = this.args[1];
        if (this._.grain < 1) {
          this.error("grain must be greater than or equal to 1");
        }
      }
    });
    this.on("propsUpdated", ({ props }) => {
      let maxpoints = this.getProp("maxpoints");
      this._.points = Array.from({ length: maxpoints }, () => ({ value: 0, duration: 0 }));
    });
    this.on("argsUpdated", ({ args }) => {
      if (args.length >= 1) {
        this._.start = args[0];
      }
      if (args.length >= 2) {
        this._.grain = args[1];
        if (this._.grain < 1) {
          this.error("grain must be greater than or equal to 1");
        }
      }
    });
    this.on("inlet", async ({ data, inlet }) => {
      if (inlet === 0) {
        if (typeof data === "number") {
          this._.start = data;
          if (this._.intervalRef) {
            window.clearInterval(this._.intervalRef);
            this._.intervalRef = null;
          }
          this.outlet(0, this._.start);
          return;
        } else if (data.length == 1) {
          this._.start = data[0];
          if (this._.intervalRef) {
            window.clearInterval(this._.intervalRef);
            this._.intervalRef = null;
          }
          this.outlet(0, this._.start);
          return;
        } else {
          const input_points = data.length / 2;
          const max_points = input_points > this._.points.length ? this._.points.length : input_points;
          for (let i = 0; i < max_points; i++) {
            const index = i * 2;
            this._.points[i].value = data[index];
            this._.points[i].duration = data[index + 1];
          }
          this._.num_points = max_points;
          this._.current_point = 0;
          activateTimer();
        }
      } else if (inlet === 1) {
        if (typeof data === "number") {
          this._.grain = data;
          if (this._.grain < 1) {
            this.error("grain must be greater than or equal to 1");
          }
        }
      }
    });
    this.on("destroy", () => {
      if (this._.timeoutRef) {
        window.clearTimeout(this._.timeoutRef);
        this._.timeoutRef = null;
      }
      if (this._.intervalRef) {
        window.clearInterval(this._.intervalRef);
        this._.intervalRef = null;
      }
    });
  }
}
Counter.package = "electrosmith";
Counter.author = "Corvus Prudens";
Counter.version = "1.0";
Counter.description = "Generates linear sequences of numbers given a set of points.";
Counter.inlets = [
  {
    isHot: true,
    type: "anything",
    description: "A single number to set the current value, or a list of number pairs to set the sequence"
  },
  {
    isHot: false,
    type: "number",
    description: "The output rate in milliseconds"
  }
];
Counter.outlets = [
  {
    type: "number",
    description: "The current value in the sequence"
  },
  {
    type: "bang",
    description: "Bang when the sequence is complete"
  }
];
Counter.args = [
  {
    type: "number",
    description: "The initial value",
    optional: true
  },
  {
    type: "number",
    description: "The output rate in milliseconds",
    optional: true
  }
];
Counter.props = {
  maxpoints: {
    type: "number",
    default: 32,
    description: "The maximum number of points in the sequence"
  }
};


/***/ }),

/***/ "./src/objects/block/metro.ts":
/*!************************************!*\
  !*** ./src/objects/block/metro.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Metro)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");


class Metro extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
  constructor() {
    super(...arguments);
    this._ = {
      time: +this.args[0],
      active: this.getProp("active"),
      intervalRef: null,
      timeoutRef: null,
      last: 0
    };
  }
  subscribe() {
    super.subscribe();
    const handleTimeout = () => {
      this._.last = performance.now();
      this.outlet(0, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
      this._.intervalRef = window.setInterval(() => {
        this._.last = performance.now();
        this.outlet(0, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
      }, this._.time);
    };
    const activateTimer = (time) => {
      if (this._.timeoutRef) {
        window.clearTimeout(this._.timeoutRef);
        this._.timeoutRef = null;
      }
      if (this._.intervalRef) {
        window.clearInterval(this._.intervalRef);
        this._.intervalRef = null;
      }
      if (time && this._.active) {
        const timeout = Math.max(0, this._.last + this._.time - performance.now());
        this._.timeoutRef = window.setTimeout(handleTimeout, timeout);
      }
      this._.time = time;
    };
    this.on("preInit", () => {
      this.inlets = 2;
      this.outlets = 1;
    });
    this.on("postInit", () => {
      activateTimer(+this.args[0]);
    });
    this.on("updateArgs", () => {
      if (typeof this.args[0] === "number") {
        activateTimer(Math.max(0, +this.args[0]));
      }
    });
    this.on("updateProps", () => {
      this._.active = this.getProp("active");
    });
    this.on("inlet", ({ data: rawData, inlet }) => {
      if (inlet === 0) {
        let data = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_1__.extractFirst)(rawData);
        if ((0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          this._.active = true;
        } else if (typeof data === "number") {
          if (data > 0)
            this._.active = true;
          else
            this._.active = false;
        }
        activateTimer(this._.time);
      } else if (inlet === 1) {
        let data = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_1__.extractFirst)(rawData);
        activateTimer(Math.max(0, +data));
      }
    });
    this.on("destroy", () => {
      if (this._.timeoutRef) {
        window.clearTimeout(this._.timeoutRef);
        this._.timeoutRef = null;
      }
      if (this._.intervalRef) {
        window.clearInterval(this._.intervalRef);
        this._.intervalRef = null;
      }
    });
  }
}
Metro.description = "Metronome that outputs bangs according to the specified time";
Metro.inlets = [{
  isHot: true,
  type: "anything",
  description: "Start or stop the metronome"
}, {
  isHot: false,
  type: "number",
  description: "interval in milliseconds"
}];
Metro.outlets = [{
  type: "bang",
  description: "metronomic bangs"
}];
Metro.args = [{
  type: "number",
  optional: true,
  default: 1,
  description: "Initial interval in milliseconds"
}];
Metro.props = {
  active: {
    type: "boolean",
    default: false,
    description: "Globally activate or deactivate the metronome"
  }
};


/***/ }),

/***/ "./src/objects/dsp/adsr.ts":
/*!*********************************!*\
  !*** ./src/objects/dsp/adsr.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSR_SEG": () => (/* binding */ ADSR_SEG),
/* harmony export */   "Adsr": () => (/* binding */ Adsr)
/* harmony export */ });
var ADSR_SEG = /* @__PURE__ */ ((ADSR_SEG2) => {
  ADSR_SEG2[ADSR_SEG2["IDLE"] = 0] = "IDLE";
  ADSR_SEG2[ADSR_SEG2["ATTACK"] = 1] = "ATTACK";
  ADSR_SEG2[ADSR_SEG2["DECAY"] = 2] = "DECAY";
  ADSR_SEG2[ADSR_SEG2["RELEASE"] = 4] = "RELEASE";
  return ADSR_SEG2;
})(ADSR_SEG || {});
class Adsr {
  constructor(sample_rate, blockSize = 1) {
    this.sample_rate_ = sample_rate / blockSize;
    this.attackShape_ = -1;
    this.attackTarget_ = 0;
    this.attackTime_ = -1;
    this.decayTime_ = -1;
    this.releaseTime_ = -1;
    this.sus_level_ = 0.7;
    this.x_ = 0;
    this.gate_ = false;
    this.mode_ = 0 /* IDLE */;
    this.SetTime(1 /* ATTACK */, 0.1);
    this.SetTime(2 /* DECAY */, 0.1);
    this.SetTime(4 /* RELEASE */, 0.1);
  }
  Retrigger(hard) {
    this.mode_ = 1 /* ATTACK */;
    if (hard)
      this.x_ = 0;
  }
  SetTime(seg, time) {
    switch (seg) {
      case 1 /* ATTACK */:
        this.SetAttackTime(time, 0);
        break;
      case 2 /* DECAY */:
        [this.decayTime_, this.decayD0_] = this.SetTimeConstant(time, this.decayTime_, this.decayD0_);
        break;
      case 4 /* RELEASE */:
        [this.releaseTime_, this.releaseD0_] = this.SetTimeConstant(time, this.releaseTime_, this.releaseD0_);
        break;
      default:
        return;
    }
  }
  SetAttackTime(timeInS, shape) {
    if (timeInS != this.attackTime_ || shape != this.attackShape_) {
      this.attackTime_ = timeInS;
      this.attackShape_ = shape;
      if (timeInS > 0) {
        let x = shape;
        let target = 9 * Math.pow(x, 10) + 0.3 * x + 1.01;
        this.attackTarget_ = target;
        let logTarget = Math.log(1 - 1 / target);
        this.attackD0_ = 1 - Math.exp(logTarget / (timeInS * this.sample_rate_));
      } else
        this.attackD0_ = 1;
    }
  }
  SetDecayTime(timeInS) {
    [this.decayTime_, this.decayD0_] = this.SetTimeConstant(timeInS, this.decayTime_, this.decayD0_);
  }
  SetReleaseTime(timeInS) {
    [this.releaseTime_, this.releaseD0_] = this.SetTimeConstant(timeInS, this.releaseTime_, this.releaseD0_);
  }
  SetTimeConstant(timeInS, time, coeff) {
    if (timeInS != time) {
      time = timeInS;
      if (time > 0) {
        const target = Math.log(1 / Math.E);
        coeff = 1 - Math.exp(target / (time * this.sample_rate_));
      } else
        coeff = 1;
    }
    return [time, coeff];
  }
  SetSustainLevel(sus_level) {
    sus_level = sus_level <= 0 ? -0.01 : sus_level > 1 ? 1 : sus_level;
    this.sus_level_ = sus_level;
  }
  GetCurrentSegment() {
    return this.mode_;
  }
  IsRunning() {
    return this.mode_ != 0 /* IDLE */;
  }
  Process(gate) {
    let out = 0;
    if (gate && !this.gate_)
      this.mode_ = 1 /* ATTACK */;
    else if (!gate && this.gate_)
      this.mode_ = 4 /* RELEASE */;
    this.gate_ = gate;
    let D0 = this.attackD0_;
    if (this.mode_ == 2 /* DECAY */)
      D0 = this.decayD0_;
    else if (this.mode_ == 4 /* RELEASE */)
      D0 = this.releaseD0_;
    let target = this.mode_ == 2 /* DECAY */ ? this.sus_level_ : -0.01;
    switch (this.mode_) {
      case 0 /* IDLE */:
        out = 0;
        break;
      case 1 /* ATTACK */:
        this.x_ += D0 * (this.attackTarget_ - this.x_);
        out = this.x_;
        if (out > 1) {
          this.x_ = out = 1;
          this.mode_ = 2 /* DECAY */;
        }
        break;
      case 2 /* DECAY */:
      case 4 /* RELEASE */:
        this.x_ += D0 * (target - this.x_);
        out = this.x_;
        if (out < 0) {
          this.x_ = out = 0;
          this.mode_ = 0 /* IDLE */;
        }
      default:
        break;
    }
    return out;
  }
}


/***/ }),

/***/ "./src/objects/dsp/adsrObject.ts":
/*!***************************************!*\
  !*** ./src/objects/dsp/adsrObject.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdsrObject)
/* harmony export */ });
/* harmony import */ var _adsr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adsr */ "./src/objects/dsp/adsr.ts");
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");


class AdsrObject extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_1__["default"] {
  process(inputs, outputs, parameters) {
    const gate = inputs[0][0];
    const attackTime = inputs[0][1];
    const decayTime = inputs[0][2];
    const sustainLevel = inputs[0][3];
    const releaseTime = inputs[0][4];
    const outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      this.adsr.SetTime(_adsr__WEBPACK_IMPORTED_MODULE_0__.ADSR_SEG.ATTACK, attackTime[i] / 1e3);
      this.adsr.SetTime(_adsr__WEBPACK_IMPORTED_MODULE_0__.ADSR_SEG.DECAY, decayTime[i] / 1e3);
      this.adsr.SetTime(_adsr__WEBPACK_IMPORTED_MODULE_0__.ADSR_SEG.RELEASE, releaseTime[i] / 1e3);
      this.adsr.SetSustainLevel(sustainLevel[i]);
      outputStream[i] = this.adsr.Process(gate[i] > 0);
    }
    return true;
  }
  init(sampleRate) {
    this.adsr = new _adsr__WEBPACK_IMPORTED_MODULE_0__.Adsr(sampleRate);
  }
}
AdsrObject.description = "ADSR Envelope";
AdsrObject.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "gate input"
  },
  {
    isHot: true,
    type: "signal",
    description: "attack time in milliseconds"
  },
  {
    isHot: true,
    type: "signal",
    description: "decay time in milliseconds"
  },
  {
    isHot: true,
    type: "signal",
    description: "sustain level"
  },
  {
    isHot: true,
    type: "signal",
    description: "release time in milliseconds"
  }
];
AdsrObject.outlets = [
  {
    type: "signal",
    description: "envelope output",
    varLength: true
  }
];
AdsrObject.args = [
  {
    type: "number",
    optional: true,
    description: "attack time in milliseconds",
    default: 250
  },
  {
    type: "number",
    optional: true,
    description: "decay time in milliseconds",
    default: 500
  },
  {
    type: "number",
    optional: true,
    description: "sustain level",
    default: 1
  },
  {
    type: "number",
    optional: true,
    description: "release time in milliseconds",
    default: 500
  }
];
AdsrObject.argsOffset = 1;


/***/ }),

/***/ "./src/objects/dsp/cycle.ts":
/*!**********************************!*\
  !*** ./src/objects/dsp/cycle.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cycle)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

class Cycle extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let frequency = inputs[0][0];
    let phase = inputs[0][1];
    let outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      let step = frequency[i] / this.sample_rate_;
      let phase_offset = Math.min(Math.max(phase[i], 0), 1);
      this.phase_ += step;
      if (this.phase_ >= 1)
        this.phase_ -= 1;
      outputStream[i] = Math.sin((this.phase_ + phase_offset) * 2 * Math.PI);
    }
    return true;
  }
  init(sampleRate) {
    this.sample_rate_ = sampleRate;
    this.phase_ = 0;
  }
}
Cycle.description = "Pure sine wave";
Cycle.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "frequency",
    varLength: true
  },
  {
    isHot: true,
    type: "signal",
    description: "phase offset",
    varLength: true
  }
];
Cycle.outlets = [
  {
    type: "signal",
    description: "output",
    varLength: true
  }
];
Cycle.args = [
  {
    type: "number",
    optional: true,
    description: "frequency",
    default: 440
  },
  {
    type: "number",
    optional: true,
    description: "phase offset",
    default: 0
  }
];
Cycle.argsOffset = 0;


/***/ }),

/***/ "./src/objects/dsp/oscillator.ts":
/*!***************************************!*\
  !*** ./src/objects/dsp/oscillator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Oscillator": () => (/* binding */ Oscillator),
/* harmony export */   "Waveform": () => (/* binding */ Waveform)
/* harmony export */ });
var Waveform = /* @__PURE__ */ ((Waveform2) => {
  Waveform2[Waveform2["WAVE_SIN"] = 0] = "WAVE_SIN";
  Waveform2[Waveform2["WAVE_TRI"] = 1] = "WAVE_TRI";
  Waveform2[Waveform2["WAVE_SAW"] = 2] = "WAVE_SAW";
  Waveform2[Waveform2["WAVE_RAMP"] = 3] = "WAVE_RAMP";
  Waveform2[Waveform2["WAVE_SQUARE"] = 4] = "WAVE_SQUARE";
  Waveform2[Waveform2["WAVE_POLYBLEP_TRI"] = 5] = "WAVE_POLYBLEP_TRI";
  Waveform2[Waveform2["WAVE_POLYBLEP_SAW"] = 6] = "WAVE_POLYBLEP_SAW";
  Waveform2[Waveform2["WAVE_POLYBLEP_SQUARE"] = 7] = "WAVE_POLYBLEP_SQUARE";
  Waveform2[Waveform2["WAVE_LAST"] = 8] = "WAVE_LAST";
  return Waveform2;
})(Waveform || {});
class Oscillator {
  constructor(sampleRate) {
    this.srRecip = 1 / sampleRate;
    this.nyquist = sampleRate / 2;
    this.freq = 100;
    this.amp = 0.5;
    this.pw = 0.5;
    this.phase = 0;
    this.phaseInc = this.CalcPhaseInc(this.freq);
    this.waveform = 0 /* WAVE_SIN */;
    this.eoc = true;
    this.eor = true;
    this.lastOut = 0;
  }
  SetFreq(f) {
    const clamped = this.fclamp(f, 0, this.nyquist);
    this.freq = clamped;
    this.phaseInc = this.CalcPhaseInc(clamped);
  }
  SetAmp(a) {
    this.amp = a;
  }
  SetWaveform(wf) {
    this.waveform = wf < 8 /* WAVE_LAST */ ? wf : 0 /* WAVE_SIN */;
  }
  SetPw(pw) {
    this.pw = this.fclamp(pw, 0, 1);
  }
  IsEOR() {
    return this.eor;
  }
  IsEOC() {
    return this.eoc;
  }
  IsRising() {
    return this.phase < 0.5;
  }
  IsFalling() {
    return this.phase >= 0.5;
  }
  PhaseAdd(_phase) {
    this.phase += _phase;
  }
  Reset(_phase = 0) {
    this.phase = _phase;
  }
  CalcPhaseInc(f) {
    return f * this.srRecip;
  }
  fclamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
  Process() {
    let out;
    let t;
    switch (this.waveform) {
      case 0 /* WAVE_SIN */:
        out = Math.sin(this.phase * 2 * Math.PI);
        break;
      case 1 /* WAVE_TRI */:
        t = -1 + 2 * this.phase;
        out = 2 * (Math.abs(t) - 0.5);
        break;
      case 2 /* WAVE_SAW */:
        out = -1 * (this.phase * 2 - 1);
        break;
      case 3 /* WAVE_RAMP */:
        out = this.phase * 2 - 1;
        break;
      case 4 /* WAVE_SQUARE */:
        out = this.phase < this.pw ? 1 : -1;
        break;
      case 5 /* WAVE_POLYBLEP_TRI */:
        t = this.phase;
        out = this.phase < 0.5 ? 1 : -1;
        out += this.Polyblep(this.phaseInc, t);
        out -= this.Polyblep(this.phaseInc, (t + 0.5) % 1);
        out = this.phaseInc * out + (1 - this.phaseInc) * this.lastOut;
        this.lastOut = out;
        out *= 4;
        break;
      case 6 /* WAVE_POLYBLEP_SAW */:
        t = this.phase;
        out = 2 * t - 1;
        out -= this.Polyblep(this.phaseInc, t);
        out *= -1;
        break;
      case 7 /* WAVE_POLYBLEP_SQUARE */:
        t = this.phase;
        out = this.phase < this.pw ? 1 : -1;
        out += this.Polyblep(this.phaseInc, t);
        out -= this.Polyblep(this.phaseInc, (t + (1 - this.pw)) % 1);
        out *= 0.707;
        break;
      default:
        out = 0;
        break;
    }
    this.phase += this.phaseInc;
    if (this.phase > 1) {
      this.phase -= 1;
      this.eoc = true;
    } else {
      this.eoc = false;
    }
    this.eor = this.phase - this.phaseInc < 0.5 && this.phase >= 0.5;
    return out * this.amp;
  }
  Polyblep(phaseInc, t) {
    let dt = phaseInc;
    if (t < dt) {
      t /= dt;
      return t + t - t * t - 1;
    } else if (t > 1 - dt) {
      t = (t - 1) / dt;
      return t * t + t + t + 1;
    } else {
      return 0;
    }
  }
}


/***/ }),

/***/ "./src/objects/dsp/phasor.ts":
/*!***********************************!*\
  !*** ./src/objects/dsp/phasor.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Phasor)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

class Phasor extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let frequency = inputs[0][0];
    let phase = inputs[0][1];
    let outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      let step = frequency[i] / this.sample_rate_;
      step = Math.max(Math.min(step, 1), -1);
      let phase_offset = Math.min(Math.max(phase[i], 0), 1);
      this.phase_ += step;
      if (this.phase_ >= 1)
        this.phase_ -= 1;
      else if (this.phase_ < 0)
        this.phase_ += 1;
      outputStream[i] = (this.phase_ + phase_offset) % 1;
    }
    return true;
  }
  init(sampleRate) {
    this.sample_rate_ = sampleRate;
    this.phase_ = 0;
  }
}
Phasor.description = "Pure ramp wave";
Phasor.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "frequency",
    varLength: true
  },
  {
    isHot: true,
    type: "signal",
    description: "phase offset",
    varLength: true
  }
];
Phasor.outlets = [
  {
    type: "signal",
    description: "output",
    varLength: true
  }
];
Phasor.args = [
  {
    type: "number",
    optional: true,
    description: "frequency",
    default: 440
  },
  {
    type: "number",
    optional: true,
    description: "phase offset",
    default: 0
  }
];
Phasor.argsOffset = 0;
Phasor.docs = "generators/docs/phasor.html";


/***/ }),

/***/ "./src/objects/dsp/pramp.ts":
/*!**********************************!*\
  !*** ./src/objects/dsp/pramp.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PureRamp)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");
/* harmony import */ var _oscillator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oscillator */ "./src/objects/dsp/oscillator.ts");


class PureRamp extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let frequency = inputs[0][0];
    let outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      this.osc.SetFreq(frequency[i]);
      outputStream[i] = this.osc.Process() * -1;
    }
    return true;
  }
  init(sampleRate) {
    this.osc = new _oscillator__WEBPACK_IMPORTED_MODULE_1__.Oscillator(sampleRate);
    this.osc.SetAmp(1);
    this.osc.SetWaveform(_oscillator__WEBPACK_IMPORTED_MODULE_1__.Waveform.WAVE_SAW);
  }
}
PureRamp.description = "Pure Ramp wave oscillator";
PureRamp.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "frequency",
    varLength: true
  }
];
PureRamp.outlets = [
  {
    type: "signal",
    description: "output",
    varLength: true
  }
];
PureRamp.args = [
  {
    type: "number",
    optional: true,
    description: "frequency",
    default: 440
  }
];
PureRamp.argsOffset = 0;


/***/ }),

/***/ "./src/objects/dsp/prect.ts":
/*!**********************************!*\
  !*** ./src/objects/dsp/prect.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PureRect)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");
/* harmony import */ var _oscillator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oscillator */ "./src/objects/dsp/oscillator.ts");


class PureRect extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let frequency = inputs[0][0];
    let pulseWidth = inputs[0][1];
    let outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      this.osc.SetFreq(frequency[i]);
      this.osc.SetPw(pulseWidth[i]);
      outputStream[i] = this.osc.Process();
    }
    return true;
  }
  init(sampleRate) {
    this.osc = new _oscillator__WEBPACK_IMPORTED_MODULE_1__.Oscillator(sampleRate);
    this.osc.SetAmp(1);
    this.osc.SetWaveform(_oscillator__WEBPACK_IMPORTED_MODULE_1__.Waveform.WAVE_SQUARE);
  }
}
PureRect.description = "Pure Rectangle wave oscillator";
PureRect.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "frequency",
    varLength: true
  },
  {
    isHot: true,
    type: "signal",
    description: "pulse width"
  }
];
PureRect.outlets = [
  {
    type: "signal",
    description: "output",
    varLength: true
  }
];
PureRect.args = [
  {
    type: "number",
    optional: true,
    description: "frequency",
    default: 440
  },
  {
    type: "number",
    optional: true,
    description: "pulse width",
    default: 0.5
  }
];
PureRect.argsOffset = 0;


/***/ }),

/***/ "./src/objects/dsp/psaw.ts":
/*!*********************************!*\
  !*** ./src/objects/dsp/psaw.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PureSaw)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");
/* harmony import */ var _oscillator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oscillator */ "./src/objects/dsp/oscillator.ts");


class PureSaw extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let frequency = inputs[0][0];
    let outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      this.osc.SetFreq(frequency[i]);
      outputStream[i] = this.osc.Process();
    }
    return true;
  }
  init(sampleRate) {
    this.osc = new _oscillator__WEBPACK_IMPORTED_MODULE_1__.Oscillator(sampleRate);
    this.osc.SetAmp(1);
    this.osc.SetWaveform(_oscillator__WEBPACK_IMPORTED_MODULE_1__.Waveform.WAVE_SAW);
  }
}
PureSaw.description = "Pure Sawtooth wave oscillator";
PureSaw.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "frequency",
    varLength: true
  }
];
PureSaw.outlets = [
  {
    type: "signal",
    description: "output",
    varLength: true
  }
];
PureSaw.args = [
  {
    type: "number",
    optional: true,
    description: "frequency",
    default: 440
  }
];
PureSaw.argsOffset = 0;


/***/ }),

/***/ "./src/objects/dsp/ptri.ts":
/*!*********************************!*\
  !*** ./src/objects/dsp/ptri.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PureTri)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");
/* harmony import */ var _oscillator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oscillator */ "./src/objects/dsp/oscillator.ts");


class PureTri extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let frequency = inputs[0][0];
    let outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      this.osc.SetFreq(frequency[i]);
      outputStream[i] = this.osc.Process();
    }
    return true;
  }
  init(sampleRate) {
    this.osc = new _oscillator__WEBPACK_IMPORTED_MODULE_1__.Oscillator(sampleRate);
    this.osc.SetAmp(1);
    this.osc.SetWaveform(_oscillator__WEBPACK_IMPORTED_MODULE_1__.Waveform.WAVE_TRI);
  }
}
PureTri.description = "Pure Triangle wave oscillator";
PureTri.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "frequency",
    varLength: true
  }
];
PureTri.outlets = [
  {
    type: "signal",
    description: "output",
    varLength: true
  }
];
PureTri.args = [
  {
    type: "number",
    optional: true,
    description: "frequency",
    default: 440
  }
];
PureTri.argsOffset = 0;


/***/ }),

/***/ "./src/objects/dsp/ramp.ts":
/*!*********************************!*\
  !*** ./src/objects/dsp/ramp.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ramp)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");
/* harmony import */ var _oscillator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oscillator */ "./src/objects/dsp/oscillator.ts");


class Ramp extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let frequency = inputs[0][0];
    let outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      this.osc.SetFreq(frequency[i]);
      outputStream[i] = this.osc.Process() * -1;
    }
    return true;
  }
  init(sampleRate) {
    this.osc = new _oscillator__WEBPACK_IMPORTED_MODULE_1__.Oscillator(sampleRate);
    this.osc.SetAmp(1);
    this.osc.SetWaveform(_oscillator__WEBPACK_IMPORTED_MODULE_1__.Waveform.WAVE_POLYBLEP_SAW);
  }
}
Ramp.description = "Ramp wave oscillator";
Ramp.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "frequency",
    varLength: true
  }
];
Ramp.outlets = [
  {
    type: "signal",
    description: "output",
    varLength: true
  }
];
Ramp.args = [
  {
    type: "number",
    optional: true,
    description: "frequency",
    default: 440
  }
];
Ramp.argsOffset = 0;


/***/ }),

/***/ "./src/objects/dsp/rect.ts":
/*!*********************************!*\
  !*** ./src/objects/dsp/rect.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Rect)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");
/* harmony import */ var _oscillator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oscillator */ "./src/objects/dsp/oscillator.ts");


class Rect extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let frequency = inputs[0][0];
    let pulseWidth = inputs[0][1];
    let outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      this.osc.SetFreq(frequency[i]);
      this.osc.SetPw(pulseWidth[i]);
      outputStream[i] = this.osc.Process();
    }
    return true;
  }
  init(sampleRate) {
    this.osc = new _oscillator__WEBPACK_IMPORTED_MODULE_1__.Oscillator(sampleRate);
    this.osc.SetAmp(1);
    this.osc.SetWaveform(_oscillator__WEBPACK_IMPORTED_MODULE_1__.Waveform.WAVE_POLYBLEP_SQUARE);
  }
}
Rect.description = "Rectangle wave oscillator";
Rect.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "frequency",
    varLength: true
  },
  {
    isHot: true,
    type: "signal",
    description: "pulse width"
  }
];
Rect.outlets = [
  {
    type: "signal",
    description: "output",
    varLength: true
  }
];
Rect.args = [
  {
    type: "number",
    optional: true,
    description: "frequency",
    default: 440
  },
  {
    type: "number",
    optional: true,
    description: "pulse width",
    default: 0.5
  }
];
Rect.argsOffset = 0;


/***/ }),

/***/ "./src/objects/dsp/sah.ts":
/*!********************************!*\
  !*** ./src/objects/dsp/sah.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SampleAndHoldObject)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

var Mode = /* @__PURE__ */ ((Mode2) => {
  Mode2[Mode2["MODE_SAMPLE_HOLD"] = 0] = "MODE_SAMPLE_HOLD";
  Mode2[Mode2["MODE_TRACK_HOLD"] = 1] = "MODE_TRACK_HOLD";
  Mode2[Mode2["MODE_LAST"] = 2] = "MODE_LAST";
  return Mode2;
})(Mode || {});
class SampleAndHoldObject extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.track_ = 0;
    this.sample_ = 0;
    this.previous_ = false;
  }
  process(inputs, outputs, parameters) {
    const signalInput = inputs[0][0];
    const triggerInput = inputs[0][1];
    const outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      this.update(triggerInput[i] > 0, signalInput[i]);
      outputStream[i] = this.sample_;
    }
    return true;
  }
  update(trigger, input) {
    if (trigger) {
      if (!this.previous_) {
        this.sample_ = input;
      }
      this.track_ = input;
    }
    this.previous_ = trigger;
  }
  init(sampleRate) {
    this.track_ = 0;
    this.sample_ = 0;
    this.previous_ = false;
  }
}
SampleAndHoldObject.description = "Sample and Hold";
SampleAndHoldObject.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "Signal to be sampled/tracked and held"
  },
  {
    isHot: true,
    type: "signal",
    description: "Trigger input"
  }
];
SampleAndHoldObject.outlets = [
  {
    type: "signal",
    description: "Sample and hold output"
  }
];
SampleAndHoldObject.argsOffset = 0;


/***/ }),

/***/ "./src/objects/dsp/saw.ts":
/*!********************************!*\
  !*** ./src/objects/dsp/saw.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Saw)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");
/* harmony import */ var _oscillator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oscillator */ "./src/objects/dsp/oscillator.ts");


class Saw extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let frequency = inputs[0][0];
    let outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      this.osc.SetFreq(frequency[i]);
      outputStream[i] = this.osc.Process();
    }
    return true;
  }
  init(sampleRate) {
    this.osc = new _oscillator__WEBPACK_IMPORTED_MODULE_1__.Oscillator(sampleRate);
    this.osc.SetAmp(1);
    this.osc.SetWaveform(_oscillator__WEBPACK_IMPORTED_MODULE_1__.Waveform.WAVE_POLYBLEP_SAW);
  }
}
Saw.description = "Sawtooth wave oscillator";
Saw.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "frequency",
    varLength: true
  }
];
Saw.outlets = [
  {
    type: "signal",
    description: "output",
    varLength: true
  }
];
Saw.args = [
  {
    type: "number",
    optional: true,
    description: "frequency",
    default: 440
  }
];
Saw.argsOffset = 0;


/***/ }),

/***/ "./src/objects/dsp/tri.ts":
/*!********************************!*\
  !*** ./src/objects/dsp/tri.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tri)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");
/* harmony import */ var _oscillator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oscillator */ "./src/objects/dsp/oscillator.ts");


class Tri extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let frequency = inputs[0][0];
    let outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      this.osc.SetFreq(frequency[i]);
      outputStream[i] = this.osc.Process();
    }
    return true;
  }
  init(sampleRate) {
    this.osc = new _oscillator__WEBPACK_IMPORTED_MODULE_1__.Oscillator(sampleRate);
    this.osc.SetAmp(1);
    this.osc.SetWaveform(_oscillator__WEBPACK_IMPORTED_MODULE_1__.Waveform.WAVE_POLYBLEP_TRI);
  }
}
Tri.description = "Triangle wave oscillator";
Tri.inlets = [
  {
    isHot: true,
    type: "signal",
    description: "frequency",
    varLength: true
  }
];
Tri.outlets = [
  {
    type: "signal",
    description: "output",
    varLength: true
  }
];
Tri.args = [
  {
    type: "number",
    optional: true,
    description: "frequency",
    default: 440
  }
];
Tri.argsOffset = 0;


/***/ }),

/***/ "./src/objects/dsp/whitenoiseObject.ts":
/*!*********************************************!*\
  !*** ./src/objects/dsp/whitenoiseObject.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WhiteNoiseObject)
/* harmony export */ });
/* harmony import */ var _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/web/jsDspProcessor */ "../../common/web/jsDspProcessor.ts");

class WhiteNoiseObject extends _common_web_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  process(inputs, outputs, parameters) {
    let outputStream = outputs[0][0];
    for (let i = 0; i < outputStream.length; i++) {
      outputStream[i] = Math.random() * 2 - 1;
    }
    return true;
  }
  init(sampleRate) {
  }
}
WhiteNoiseObject.description = "Simple pseudo-random white noise";
WhiteNoiseObject.inlets = [];
WhiteNoiseObject.outlets = [
  {
    type: "signal",
    description: "white noise"
  }
];
WhiteNoiseObject.args = [];
WhiteNoiseObject.argsOffset = 0;


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
/* harmony import */ var _objects_dsp_cycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/dsp/cycle */ "./src/objects/dsp/cycle.ts");
/* harmony import */ var _objects_dsp_phasor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/dsp/phasor */ "./src/objects/dsp/phasor.ts");
/* harmony import */ var _objects_block_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/block/line */ "./src/objects/block/line.ts");
/* harmony import */ var _objects_block_metro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects/block/metro */ "./src/objects/block/metro.ts");
/* harmony import */ var _common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/web/jsDspObject */ "../../common/web/jsDspObject.ts");
/* harmony import */ var _objects_dsp_saw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects/dsp/saw */ "./src/objects/dsp/saw.ts");
/* harmony import */ var _objects_dsp_tri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objects/dsp/tri */ "./src/objects/dsp/tri.ts");
/* harmony import */ var _objects_dsp_rect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./objects/dsp/rect */ "./src/objects/dsp/rect.ts");
/* harmony import */ var _objects_dsp_ramp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./objects/dsp/ramp */ "./src/objects/dsp/ramp.ts");
/* harmony import */ var _objects_dsp_pramp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./objects/dsp/pramp */ "./src/objects/dsp/pramp.ts");
/* harmony import */ var _objects_dsp_prect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./objects/dsp/prect */ "./src/objects/dsp/prect.ts");
/* harmony import */ var _objects_dsp_psaw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./objects/dsp/psaw */ "./src/objects/dsp/psaw.ts");
/* harmony import */ var _objects_dsp_ptri__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./objects/dsp/ptri */ "./src/objects/dsp/ptri.ts");
/* harmony import */ var _objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./objects/dsp/oscillator */ "./src/objects/dsp/oscillator.ts");
/* harmony import */ var _objects_dsp_adsr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./objects/dsp/adsr */ "./src/objects/dsp/adsr.ts");
/* harmony import */ var _objects_dsp_adsrObject__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./objects/dsp/adsrObject */ "./src/objects/dsp/adsrObject.ts");
/* harmony import */ var _objects_dsp_whitenoiseObject__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./objects/dsp/whitenoiseObject */ "./src/objects/dsp/whitenoiseObject.ts");
/* harmony import */ var _objects_dsp_sah__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./objects/dsp/sah */ "./src/objects/dsp/sah.ts");


















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => ({
  "cycle~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_4__.generateObject)(_objects_dsp_cycle__WEBPACK_IMPORTED_MODULE_0__["default"], "cycle~"),
  "phasor~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_4__.generateObject)(_objects_dsp_phasor__WEBPACK_IMPORTED_MODULE_1__["default"], "phasor~"),
  "adsr~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_4__.generateObject)(_objects_dsp_adsrObject__WEBPACK_IMPORTED_MODULE_15__["default"], "adsr~", [_objects_dsp_adsr__WEBPACK_IMPORTED_MODULE_14__.Adsr], [{ name: "ADSR_SEG", item: _objects_dsp_adsr__WEBPACK_IMPORTED_MODULE_14__.ADSR_SEG }]),
  "saw~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_4__.generateObject)(_objects_dsp_saw__WEBPACK_IMPORTED_MODULE_5__["default"], "saw~", [_objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Oscillator], [{ name: "Waveform", item: _objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Waveform }]),
  "tri~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_4__.generateObject)(_objects_dsp_tri__WEBPACK_IMPORTED_MODULE_6__["default"], "tri~", [_objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Oscillator], [{ name: "Waveform", item: _objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Waveform }]),
  "rect~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_4__.generateObject)(_objects_dsp_rect__WEBPACK_IMPORTED_MODULE_7__["default"], "rect~", [_objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Oscillator], [{ name: "Waveform", item: _objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Waveform }]),
  "ramp~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_4__.generateObject)(_objects_dsp_ramp__WEBPACK_IMPORTED_MODULE_8__["default"], "ramp~", [_objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Oscillator], [{ name: "Waveform", item: _objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Waveform }]),
  "pramp~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_4__.generateObject)(_objects_dsp_pramp__WEBPACK_IMPORTED_MODULE_9__["default"], "pramp~", [_objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Oscillator], [{ name: "Waveform", item: _objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Waveform }]),
  "prect~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_4__.generateObject)(_objects_dsp_prect__WEBPACK_IMPORTED_MODULE_10__["default"], "prect~", [_objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Oscillator], [{ name: "Waveform", item: _objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Waveform }]),
  "psaw~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_4__.generateObject)(_objects_dsp_psaw__WEBPACK_IMPORTED_MODULE_11__["default"], "psaw~", [_objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Oscillator], [{ name: "Waveform", item: _objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Waveform }]),
  "ptri~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_4__.generateObject)(_objects_dsp_ptri__WEBPACK_IMPORTED_MODULE_12__["default"], "ptri~", [_objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Oscillator], [{ name: "Waveform", item: _objects_dsp_oscillator__WEBPACK_IMPORTED_MODULE_13__.Waveform }]),
  "noise~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_4__.generateObject)(_objects_dsp_whitenoiseObject__WEBPACK_IMPORTED_MODULE_16__["default"], "noise~"),
  "line": _objects_block_line__WEBPACK_IMPORTED_MODULE_2__["default"],
  "metro": _objects_block_metro__WEBPACK_IMPORTED_MODULE_3__["default"],
  "sah~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_4__.generateObject)(_objects_dsp_sah__WEBPACK_IMPORTED_MODULE_17__["default"], "sah~")
}));

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=index.jspatpkg.js.map