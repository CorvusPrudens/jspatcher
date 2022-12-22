/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/objects/AudioIn.ts":
/*!********************************!*\
  !*** ./src/objects/AudioIn.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioIn)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");
/* harmony import */ var _webaudio_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webaudio_base */ "./src/objects/webaudio_base.ts");
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


const _AudioIn = class extends _webaudio_base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    this._ = { node: void 0, stream: void 0, search: void 0 };
    this.handleDeviceChange = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const enums = devices.filter((d) => d.kind === "audioinput").map((d) => d.label || d.deviceId);
      const { meta } = this;
      meta.args[0] = __spreadProps(__spreadValues({}, _AudioIn.args[0]), { type: "enum", enums });
      this.setMeta(meta);
    };
    this.newSearch = async (search) => {
      this._.search = search;
      let deviceId;
      if (search) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const device = devices.find((d) => d.kind === "audioinput" && (d.deviceId === search || d.label === search));
        if (device)
          deviceId = device.deviceId;
      }
      this._.stream = await navigator.mediaDevices.getUserMedia({ audio: this.getConstraints(deviceId) });
      if (this._.stream)
        this.resetNode();
    };
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 2;
    });
    this.on("postInit", () => {
      const search = this.box.args[0];
      navigator.mediaDevices.addEventListener("devicechange", this.handleDeviceChange);
      this.handleDeviceChange();
      this.newSearch(search);
    });
    this.on("updateArgs", (args) => {
      this.newSearch(args[0]);
    });
    this.on("updateProps", () => {
      this.newSearch(this._.search);
    });
    this.on("inlet", async ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          await this.newSearch(data);
        }
        if (this.node)
          this.outlet(1, this.node);
      }
    });
    this.on("destroy", () => {
      navigator.mediaDevices.removeEventListener("devicechange", this.handleDeviceChange);
    });
  }
  getConstraints(deviceId) {
    return {
      deviceId,
      autoGainControl: this.getProp("autoGainControl"),
      channelCount: this.getProp("channelCount"),
      echoCancellation: this.getProp("echoCancellation"),
      latency: this.getProp("latency"),
      noiseSuppression: this.getProp("noiseSuppression"),
      sampleRate: this.getProp("sampleRate"),
      sampleSize: this.getProp("sampleSize")
    };
  }
  resetNode() {
    this.disconnectAudio();
    if (this._.stream) {
      this.node = this.audioCtx.createMediaStreamSource(this._.stream);
      this.node.channelInterpretation = "discrete";
    }
    this.outletAudioConnections[0] = { node: this.node, index: 0 };
    this.connectAudio();
  }
};
let AudioIn = _AudioIn;
AudioIn.description = "Get Audio input from device name or ID";
AudioIn.inlets = [{
  isHot: true,
  type: "anything",
  description: "string to fetch device name or ID, bang to output Node"
}];
AudioIn.outlets = [{
  type: "signal",
  description: "Node connection"
}, {
  type: "object",
  description: "Instance: MediaStreamAudioSourceNode"
}];
AudioIn.args = [{
  type: "string",
  optional: false,
  description: "Device name or ID"
}];
AudioIn.props = {
  autoGainControl: {
    type: "boolean",
    default: false,
    description: "Automatic gain control"
  },
  channelCount: {
    type: "number",
    default: void 0,
    description: "The number of independent channels of sound"
  },
  echoCancellation: {
    type: "boolean",
    default: false,
    description: "Remove all the sound being played from the input signals recorded by the microphones"
  },
  latency: {
    type: "number",
    default: void 0,
    description: "The latency or latency range, in seconds"
  },
  noiseSuppression: {
    type: "boolean",
    default: false,
    description: "Noise suppression"
  },
  sampleRate: {
    type: "number",
    default: void 0,
    description: "The sample rate in samples per second for the audio data"
  },
  sampleSize: {
    type: "number",
    default: void 0,
    description: "The linear sample size in bits"
  }
};



/***/ }),

/***/ "./src/objects/AudioOut.tsx":
/*!**********************************!*\
  !*** ./src/objects/AudioOut.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioOut)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");
/* harmony import */ var _webaudio_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webaudio_base */ "./src/objects/webaudio_base.ts");
/* harmony import */ var _AudioIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioIn */ "./src/objects/AudioIn.ts");
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



const supportSetSinkId = window.MediaStreamAudioDestinationNode && HTMLMediaElement.prototype.setSinkId;
const _AudioOut = class extends _webaudio_base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    this._ = supportSetSinkId ? { node: this.audioCtx.destination, msadn: this.audioCtx.createMediaStreamDestination(), audio: new Audio(), search: void 0 } : { node: this.audioCtx.destination };
    this.inletAudioConnections = [{ node: this.node, index: 0 }];
    this.handleDeviceChange = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const enums = devices.filter((d) => d.kind === "audiooutput").map((d) => d.label || d.deviceId);
      const { meta } = this;
      meta.args[0] = __spreadProps(__spreadValues({}, _AudioOut.args[0]), { type: "enum", enums });
      this.setMeta(meta);
    };
    this.newSearch = async (search) => {
      if (!supportSetSinkId)
        return;
      this._.search = search;
      if (!search || search === "default") {
        this.resetNode();
        return;
      }
      const { audio } = this._;
      let deviceId = audio.sinkId || "default";
      const devices = await navigator.mediaDevices.enumerateDevices();
      const device = devices.find((d) => d.kind === "audiooutput" && (d.deviceId === search || d.label === search));
      if (device)
        deviceId = device.deviceId;
      if (audio.sinkId !== deviceId) {
        if (audio.played)
          audio.pause();
        audio.setSinkId(deviceId);
        audio.play();
      }
      this.resetNode(true);
    };
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 1;
    });
    this.on("postInit", () => {
      this.node.channelInterpretation = "discrete";
      if (supportSetSinkId) {
        this._.msadn.channelInterpretation = "discrete";
        const { audio, msadn } = this._;
        const { stream } = msadn;
        if ("srcObject" in audio)
          audio.srcObject = stream;
        else
          audio.src = URL.createObjectURL(stream);
        const search = this.box.args[0];
        navigator.mediaDevices.addEventListener("devicechange", this.handleDeviceChange);
        this.on("destroy", () => {
          navigator.mediaDevices.removeEventListener("devicechange", this.handleDeviceChange);
        });
        this.handleDeviceChange();
        this.newSearch(search);
      }
    });
    this.on("updateArgs", (args) => {
      this.newSearch(args[0]);
    });
    this.on("updateProps", () => {
      this.newSearch(this._.search);
    });
    this.on("inlet", async ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          await this.newSearch(data);
        }
        if (this.node)
          this.outlet(1, this.node);
      }
    });
  }
  getConstraints(deviceId) {
    return {
      deviceId,
      autoGainControl: this.getProp("autoGainControl"),
      channelCount: this.getProp("channelCount"),
      echoCancellation: this.getProp("echoCancellation"),
      latency: this.getProp("latency"),
      noiseSuppression: this.getProp("noiseSuppression"),
      sampleRate: this.getProp("sampleRate"),
      sampleSize: this.getProp("sampleSize")
    };
  }
  resetNode(msadn) {
    if (msadn) {
      if (this.node !== this._.msadn) {
        this.disconnectAudio();
        this.node = this._.msadn;
        this.inletAudioConnections[0] = { node: this.node, index: 0 };
        this.connectAudio();
      }
    } else {
      if (this.node !== this.audioCtx.destination) {
        this.disconnectAudio();
        this.node = this.audioCtx.destination;
        this.inletAudioConnections[0] = { node: this.node, index: 0 };
        this.connectAudio();
      }
    }
  }
};
let AudioOut = _AudioOut;
AudioOut.description = "Get Audio output from device name or ID (if supported)";
AudioOut.inlets = [{
  isHot: true,
  type: "signal",
  description: "Node connection, string to fetch device name or ID, bang to output Node"
}];
AudioOut.outlets = [{
  type: "object",
  description: `Instance: ${supportSetSinkId ? "MediaStreamAudioDestinationNode | " : ""}AudioDestinationNode`
}];
AudioOut.args = supportSetSinkId ? _AudioIn__WEBPACK_IMPORTED_MODULE_2__["default"].args : [];
AudioOut.props = supportSetSinkId ? _AudioIn__WEBPACK_IMPORTED_MODULE_2__["default"].props : {};
AudioOut.UI = supportSetSinkId ? class AudioOutUI extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultUI {
  constructor() {
    super(...arguments);
    this.refContainer = _sdk__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
  }
  componentDidMount() {
    super.componentDidMount();
    const div = this.refContainer.current;
    const { audio } = this.object._;
    if (div && audio) {
      audio.style.display = "none";
      div.appendChild(audio);
    }
  }
  render() {
    const textContainerProps = __spreadProps(__spreadValues({}, this.props.textContainerProps), { ref: this.refContainer });
    return /* @__PURE__ */ _sdk__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultUI, __spreadValues({
      textContainerProps
    }, this.props));
  }
} : _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultUI;



/***/ }),

/***/ "./src/objects/base.ts":
/*!*****************************!*\
  !*** ./src/objects/base.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Op)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");


class Op extends _sdk__WEBPACK_IMPORTED_MODULE_1__.BaseObject {
}
Op.package = _index__WEBPACK_IMPORTED_MODULE_0__.name;
Op.author = _index__WEBPACK_IMPORTED_MODULE_0__.author;
Op.version = _index__WEBPACK_IMPORTED_MODULE_0__.version;
Op.description = _index__WEBPACK_IMPORTED_MODULE_0__.description;


/***/ }),

/***/ "./src/objects/binary.ts":
/*!*******************************!*\
  !*** ./src/objects/binary.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Binary)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/objects/base.ts");


class Binary extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    this._ = { arg: this.args[0], result: void 0 };
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 2;
      this.outlets = 1;
    });
    this.on("updateArgs", (args) => {
      this._.arg = void 0;
      this._.result = void 0;
      if (!args || args.length === 0)
        return;
      this._.arg = args[0];
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          try {
            this._.result = this.execute(data, this._.arg);
          } catch (e) {
            this.error(e);
            return;
          }
        }
        this.outlet(0, this._.result);
      } else if (inlet === 1) {
        this._.arg = data;
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


/***/ }),

/***/ "./src/objects/webaudio_base.ts":
/*!**************************************!*\
  !*** ./src/objects/webaudio_base.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebAudioObject)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");


class WebAudioObject extends _sdk__WEBPACK_IMPORTED_MODULE_1__.DefaultObject {
  set node(nodeIn) {
    this._.node = nodeIn;
  }
  get node() {
    return this._.node;
  }
}
WebAudioObject.package = _index__WEBPACK_IMPORTED_MODULE_0__.name;
WebAudioObject.icon = "volume up";
WebAudioObject.author = _index__WEBPACK_IMPORTED_MODULE_0__.author;
WebAudioObject.version = _index__WEBPACK_IMPORTED_MODULE_0__.version;
WebAudioObject.description = _index__WEBPACK_IMPORTED_MODULE_0__.description;


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
/* harmony export */   "DefaultObject": () => (/* binding */ DefaultObject),
/* harmony export */   "DefaultUI": () => (/* binding */ DefaultUI),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "Patcher": () => (/* binding */ Patcher),
/* harmony export */   "React": () => (/* binding */ React),
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
  generateRemotedObject,
  generateDefaultObject,
  generateRemoteObject,
  Bang,
  isBang
} = sdk;


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"@jspatcher/package-electrosmith","version":"1.0.0","description":"The Electrosmith package for JSPatcher","main":"dist/index.js","scripts":{"build":"webpack --mode development","build-watch":"webpack --mode development --watch --stats-children"},"keywords":["jspatcher"],"jspatcher":{"isJSPatcherPackage":true,"thumbnail":"","jspatpkg":"index.jspatpkg.js"},"author":"Corvus Prudens","license":"MIT","repository":"https://github.com/electro-smith/Patcher-Objects","devDependencies":{"@jspatcher/jspatcher":"^0.0.9","@types/react":"^17.0.19","clean-webpack-plugin":"^4.0.0-alpha.0","esbuild-loader":"^2.15.1","react":"^17.0.2","typescript":"^4.4.2","webpack":"^5.51.1","webpack-cli":"^4.8.0"}}');

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
/* harmony import */ var _objects_binary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/binary */ "./src/objects/binary.ts");
/* harmony import */ var _objects_AudioIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/AudioIn */ "./src/objects/AudioIn.ts");
/* harmony import */ var _objects_AudioOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/AudioOut */ "./src/objects/AudioOut.tsx");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdk */ "./src/sdk.ts");




const Binary = (0,_sdk__WEBPACK_IMPORTED_MODULE_3__.generateDefaultObject)(_objects_binary__WEBPACK_IMPORTED_MODULE_0__["default"]);
const Objects = {};
const functions = {
  "+": (a, b) => a + b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
};
const functionNames = {
  "+": "Add",
  "*": "Mul",
  "/": "Div"
};
for (const key in functions) {
  Objects[key] = class extends Binary {
    constructor() {
      super(...arguments);
      this.execute = functions[key];
    }
    static get _name() {
      return functionNames[key];
    }
  };
}
Objects["audioIn~"] = _objects_AudioIn__WEBPACK_IMPORTED_MODULE_1__["default"];
Objects["audioOut~"] = _objects_AudioOut__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {
  return Objects;
});

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=index.jspatpkg.js.map