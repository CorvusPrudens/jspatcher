/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
function generateObject(Processor, name) {
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
        const url = (0,_workletCreator__WEBPACK_IMPORTED_MODULE_2__["default"])(Processor, dspId, this.audioCtx.sampleRate);
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
  }, _a.package = _index__WEBPACK_IMPORTED_MODULE_0__.name, _a.author = _index__WEBPACK_IMPORTED_MODULE_0__.author, _a.version = _index__WEBPACK_IMPORTED_MODULE_0__.version, _a.description = _index__WEBPACK_IMPORTED_MODULE_0__.description, _a.inlets = Processor.inlets, _a.outlets = Processor.outlets, _a.args = Processor.args, _a.props = Processor.props, _a.UI = _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultUI, _a;
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
  "smoothInput": {
    type: "number",
    default: 0,
    description: "How much smoothing to apply over the block"
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

const getJsWorkletProcessor = (processor, dspId, sampleRate) => {
  const inherited_string = processor.toString().replace(/extends (.*?) {/, `extends ${_jsDspProcessor__WEBPACK_IMPORTED_MODULE_0__["default"].name} {`);
  const processorCode = `

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
  const url = URL.createObjectURL(new Blob([processorCode], { type: "text/javascript" }));
  return url;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getJsWorkletProcessor);


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
    for (let i = 0; i < frequency.length; i++) {
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

/***/ "../../common/web/package.json":
/*!*************************************!*\
  !*** ../../common/web/package.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"@electrosmith/package-math","version":"1.0.0","description":"The math package for jspatcher","main":"dist/index.js","scripts":{"build":"webpack --mode development","build-watch":"webpack --mode development --watch --stats-children"},"keywords":["jspatcher"],"jspatcher":{"isJSPatcherPackage":true,"thumbnail":"","jspatpkg":"index.jspatpkg.js"},"author":"Corvus Prudens","license":"MIT","repository":"https://github.com/electro-smith/Patcher-Objects","devDependencies":{"@jspatcher/jspatcher":"^0.0.9","@types/react":"^17.0.19","clean-webpack-plugin":"^4.0.0-alpha.0","css-loader":"^6.4.0","esbuild-loader":"^2.15.1","react":"^17.0.2","sass":"^1.45.2","sass-loader":"^12.2.0","style-loader":"^3.3.0","typescript":"^4.4.2","webpack":"^5.51.1","webpack-cli":"^4.8.0"}}');

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
/* harmony import */ var _common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/web/jsDspObject */ "../../common/web/jsDspObject.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => ({
  "cycle~": (0,_common_web_jsDspObject__WEBPACK_IMPORTED_MODULE_1__.generateObject)(_objects_dsp_cycle__WEBPACK_IMPORTED_MODULE_0__["default"], "cycle~")
}));

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=index.jspatpkg.js.map