"use strict";
(self["webpackChunkDaisyBell"] = self["webpackChunkDaisyBell"] || []).push([["src_core_hardware_Patcher_ts"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/DefaultHardwareUI.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/DefaultHardwareUI.scss ***!
  \********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.hardware-patcher div.box-ui > div.box-ui-default {\n  background-color: rgb(41, 60, 71);\n}\n.hardware-patcher div.box-ui > div.box-ui-default.box-ui-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  border-radius: 7px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container {\n  display: flex;\n  flex: 0 0 auto;\n  width: 100%;\n  color: white;\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 12px;\n  line-height: normal;\n  font-weight: normal;\n  margin: 0px;\n  overflow-wrap: break-word;\n  cursor: default;\n  user-select: none;\n  -webkit-user-select: none;\n  border: rgb(41, 60, 71) solid;\n  border-width: 0px 4px 0px 4px;\n  border-radius: 7px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container:first-child {\n  border-top-width: 4px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container:last-child {\n  border-bottom-width: 4px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container.loading {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: placeHolderShimmer;\n  animation-name: placeHolderShimmer;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  background-size: 1200px 100%;\n}\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -1200px 0;\n  }\n  100% {\n    background-position: 1200px 0;\n  }\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > .box-ui-text-container-prepend {\n  flex: 0 0 auto;\n  min-width: 2px;\n  margin-right: 2px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > span {\n  position: relative;\n  word-break: break-all;\n  width: 100%;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > span.editing {\n  pointer-events: auto;\n  cursor: text;\n  user-select: auto;\n  -webkit-user-select: auto;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > span:empty::before {\n  content: \"​\";\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > span::selection {\n  background-color: #004eff;\n  color: white;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > .box-ui-text-dropdown {\n  position: absolute;\n  top: 100%;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > .box-ui-text-dropdown > .box-ui-text-autocomplete {\n  background: #293c47;\n  display: table-row-group;\n  position: absolute;\n  width: auto;\n  max-height: 200px;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5333333333);\n  overflow: auto;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > .box-ui-text-dropdown > .box-ui-text-autocomplete td {\n  border-width: 0px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > .box-ui-text-dropdown > .box-ui-text-autocomplete tr.focused {\n  background-color: #003cac !important;\n  color: #fff !important;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > .box-ui-text-container-append {\n  flex: 0 0 auto;\n  min-width: 2px;\n  margin-left: 2px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container i.icon {\n  line-height: 14px;\n  margin: 0px 3px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-dropdown-container {\n  background: #293c47;\n  flex: 1 1 100%;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border: rgb(125, 126, 132) solid;\n  padding: 0px;\n  border-width: 0px 0px 4px 0px;\n  overflow: auto;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-toggle {\n  cursor: pointer;\n}\n\n.patcher.unlocked div.box.selected > div.box-ui > div.box-ui-default > .box-ui-text-container {\n  pointer-events: auto;\n}", "",{"version":3,"sources":["webpack://./src/core/hardware/objects/base/DefaultHardwareUI.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,iCAAA;AAEJ;AAAI;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,kBAAA;AAER;AACI;EACI,aAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,qCAAA;EACA,eAAA;EACA,mBAAA;EACA,mBAAA;EACA,WAAA;EACA,yBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,6BAAA;EACA,6BAAA;EACA,kBAAA;AACR;AACQ;EACI,qBAAA;AACZ;AAEQ;EACI,wBAAA;AAAZ;AAGQ;EACI,8BAAA;EACA,sBAAA;EACA,qCAAA;EACA,6BAAA;EACA,2CAAA;EACA,mCAAA;EACA,0CAAA;EACA,kCAAA;EACA,yCAAA;EACA,iCAAA;EACA,4BAAA;AADZ;AAGY;EACI;IACI,8BAAA;EADlB;EAIc;IACI,6BAAA;EAFlB;AACF;AAMQ;EACI,cAAA;EACA,cAAA;EACA,iBAAA;AAJZ;AAOQ;EACI,kBAAA;EACA,qBAAA;EACA,WAAA;AALZ;AAOY;EACI,oBAAA;EACA,YAAA;EACA,iBAAA;EACA,yBAAA;AALhB;AAQY;EACI,YAAA;AANhB;AASY;EACI,yBAAA;EACA,YAAA;AAPhB;AAWQ;EACI,kBAAA;EACA,SAAA;AATZ;AAWY;EACI,mBAAA;EACA,wBAAA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,mDAAA;EACA,cAAA;EACA,mBAAA;EACA,uBAAA;AAThB;AAWgB;EACI,iBAAA;AATpB;AAYgB;EACI,oCAAA;EACA,sBAAA;AAVpB;AAeQ;EACI,cAAA;EACA,cAAA;EACA,gBAAA;AAbZ;AAgBQ;EACI,iBAAA;EACA,eAAA;AAdZ;AAkBI;EACI,mBAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,gCAAA;EACA,YAAA;EACA,6BAAA;EACA,cAAA;AAhBR;AAmBI;EACI,eAAA;AAjBR;;AAqBA;EACI,oBAAA;AAlBJ","sourcesContent":[".hardware-patcher div.box-ui>div.box-ui-default {\n    background-color: rgb(41, 60, 71);\n\n    &.box-ui-container {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        border-radius: 7px;\n    }\n\n    &>.box-ui-text-container {\n        display: flex;\n        flex: 0 0 auto;\n        width: 100%;\n        color: white;\n        font-family: 'Roboto Mono', monospace;\n        font-size: 12px;\n        line-height: normal;\n        font-weight: normal;\n        margin: 0px;\n        overflow-wrap: break-word;\n        cursor: default;\n        user-select: none;\n        -webkit-user-select: none;\n        border: rgb(41, 60, 71) solid;\n        border-width: 0px 4px 0px 4px;\n        border-radius: 7px;\n\n        &:first-child {\n            border-top-width: 4px;\n        }\n\n        &:last-child {\n            border-bottom-width: 4px;\n        }\n\n        &.loading {\n            -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n            -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n            -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n            -webkit-animation-name: placeHolderShimmer;\n            animation-name: placeHolderShimmer;\n            -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n            background-size: 1200px 100%;\n\n            @keyframes placeHolderShimmer {\n                0% {\n                    background-position: -1200px 0;\n                }\n\n                100% {\n                    background-position: 1200px 0;\n                }\n            }\n        }\n\n        &>.box-ui-text-container-prepend {\n            flex: 0 0 auto;\n            min-width: 2px;\n            margin-right: 2px;\n        }\n\n        &>span {\n            position: relative;\n            word-break: break-all;\n            width: 100%;\n\n            &.editing {\n                pointer-events: auto;\n                cursor: text;\n                user-select: auto;\n                -webkit-user-select: auto;\n            }\n\n            &:empty::before {\n                content: \"\\200b\";\n            }\n\n            &::selection {\n                background-color: #004eff;\n                color: white;\n            }\n        }\n\n        &>.box-ui-text-dropdown {\n            position: absolute;\n            top: 100%;\n\n            &>.box-ui-text-autocomplete {\n                background: #293c47;\n                display: table-row-group;\n                position: absolute;\n                width: auto;\n                max-height: 200px;\n                box-shadow: 0px 2px 5px #0008;\n                overflow: auto;\n                white-space: nowrap;\n                text-overflow: ellipsis;\n\n                & td {\n                    border-width: 0px\n                }\n\n                & tr.focused {\n                    background-color: #003cac !important;\n                    color: #fff !important;\n                }\n            }\n        }\n\n        &>.box-ui-text-container-append {\n            flex: 0 0 auto;\n            min-width: 2px;\n            margin-left: 2px;\n        }\n\n        i.icon {\n            line-height: 14px;\n            margin: 0px 3px;\n        }\n    }\n\n    &>.box-ui-dropdown-container {\n        background: #293c47;\n        flex: 1 1 100%;\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        border: rgb(125, 126, 132) solid;\n        padding: 0px;\n        border-width: 0px 0px 4px 0px;\n        overflow: auto;\n    }\n\n    &>.box-ui-toggle {\n        cursor: pointer;\n    }\n}\n\n.patcher.unlocked div.box.selected>div.box-ui>div.box-ui-default>.box-ui-text-container {\n    pointer-events: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/InvalidObject.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/InvalidObject.scss ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hardware-patcher div.box-ui > div.package-base.package-base-invalidobject > .box-ui-text-container {\n  background-color: rgb(128, 64, 64);\n}", "",{"version":3,"sources":["webpack://./src/core/hardware/objects/base/InvalidObject.scss"],"names":[],"mappings":"AACI;EACI,kCAAA;AAAR","sourcesContent":[".hardware-patcher div.box-ui > div.package-base {\n    &.package-base-invalidobject > .box-ui-text-container {\n        background-color: rgb(128, 64, 64);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
/* harmony import */ var _objects_base_BaseHardwareObjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects/base/BaseHardwareObjects */ "./src/core/hardware/objects/base/BaseHardwareObjects.ts");
/* harmony import */ var _objects_soms_SomObjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objects/soms/SomObjects */ "./src/core/hardware/objects/soms/SomObjects.ts");
/* harmony import */ var _objects_hardware_HardwareObjects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./objects/hardware/HardwareObjects */ "./src/core/hardware/objects/hardware/HardwareObjects.ts");

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
    this.lib = __spreadValues(__spreadValues(__spreadValues({}, _objects_base_BaseHardwareObjects__WEBPACK_IMPORTED_MODULE_5__["default"]), _objects_soms_SomObjects__WEBPACK_IMPORTED_MODULE_6__["default"]), _objects_hardware_HardwareObjects__WEBPACK_IMPORTED_MODULE_7__["default"]);
    this.lines = {};
    this.boxes = {};
    this._history = new _HardwareHistory__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._state = {
      name: "patcher",
      isReady: false,
      log: [],
      selected: [],
      // pkgMgr: undefined,
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
  // get activePkg() {
  //     return this._state.pkgMgr.pkg;
  // }
  // get activeLib() {
  //     return this._state.pkgMgr.lib;
  // }
  get activeLib() {
    return this.lib;
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
      this.props.mode = ((_a = patcherIn.props) == null ? void 0 : _a.mode) || modeIn || "js";
      const { mode } = this.props;
      const $init = [];
      onUpdate("Decoding Patcher...");
      let patcher;
      if ("data" in patcherIn && "hardware" in patcherIn) {
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
  // async addPackage(namespace: string, url: string) {
  //     const { dependencies } = this.props;
  //     dependencies.push([namespace, url]);
  //     this.setProps({ dependencies: dependencies.slice() });
  //     await this.state.pkgMgr.init();
  //     if (!(namespace in this.activePkg)) {
  //         this.setProps({ dependencies: dependencies.filter(([id]) => id !== namespace) });
  //     }
  // }
  // async removePackage(id: string) {
  //     const { dependencies } = this.props;
  //     const i = dependencies.findIndex(t => t[0] === id);
  //     if (i === -1) return;
  //     dependencies.splice(i, 1);
  //     this.setProps({ dependencies: dependencies.slice() });
  //     await this.state.pkgMgr.init();
  // }
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
    bIds.forEach((idOut) => bIds.forEach((idIn) => idIn === idOut ? result.push(idIn) : void 0));
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
    return { args: [], props: {}, patcherInlets: inlets, patcherOutlets: outlets };
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
    return { dependencies, bgColor, editingBgColor, grid, openInPresentation };
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



/***/ }),

/***/ "./src/core/hardware/objects/base/AbstractHardwareObject.ts":
/*!******************************************************************!*\
  !*** ./src/core/hardware/objects/base/AbstractHardwareObject.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractObject),
/* harmony export */   "isJSPatcherObject": () => (/* binding */ isJSPatcherObject),
/* harmony export */   "isJSPatcherObjectConstructor": () => (/* binding */ isJSPatcherObjectConstructor)
/* harmony export */ });
/* harmony import */ var _utils_TypedEventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/TypedEventEmitter */ "./src/utils/TypedEventEmitter.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Line */ "./src/core/hardware/Line.ts");

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



const isJSPatcherObjectConstructor = (x) => typeof x === "function" && (x == null ? void 0 : x.isJSPatcherObjectConstructor);
const isJSPatcherObject = (x) => typeof x === "object" && (x == null ? void 0 : x.isJSPatcherObject);
class AbstractObject extends _utils_TypedEventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  // inletAudioConnections: TAudioNodeInletConnection[] = [];
  // outletAudioConnections: TAudioNodeOutletConnection[] = [];
  constructor(box, patcher) {
    super();
    this.isHardwarePatcherObject = true;
    this._meta = this.constructor.meta;
    this.setState = (stateIn, id) => {
      const oldState = __spreadValues({}, this.state);
      this.state = Object.assign(this.state, stateIn);
      this.emit("stateUpdated", { oldState, state: __spreadValues({}, this.state), id });
    };
    this.setProps = (propsIn) => {
      const keys = Object.keys(propsIn);
      const oldProps = __spreadValues({}, this.props);
      this.box.update({ props: propsIn });
      const props = __spreadValues({}, this.props);
      for (const key in oldProps) {
        if (keys.indexOf(key) === -1) {
          delete oldProps[key];
          delete props[key];
        }
      }
      this.emit("propsUpdated", { oldProps, props });
    };
    this.setArgs = (args) => {
      const oldArgs = this.args.slice();
      this.box.update({ args });
      this.emit("argsUpdated", { oldArgs, args: this.args.slice() });
    };
    this._patcher = patcher;
    this._box = box;
    this.id = this.env.generateId(this);
  }
  static get _name() {
    return this.name;
  }
  static get meta() {
    return {
      name: this._name,
      icon: this.icon,
      // semantic icon to display in UI
      version: this.version,
      description: this.description,
      ios: this.ios,
      args: this.args,
      props: this.props,
      patcherInlets: this.patcherInlets,
      patcherOutlets: this.patcherOutlets,
      docs: this.docs,
      helpFiles: this.helpFiles
    };
  }
  get class() {
    return this.constructor.name;
  }
  get patcher() {
    return this._patcher;
  }
  get Patcher() {
    return this._patcher.constructor;
  }
  get box() {
    return this._box;
  }
  get env() {
    return this.patcher.env;
  }
  get audioCtx() {
    return this.patcher.audioCtx;
  }
  get meta() {
    return this._meta;
  }
  setMeta(metaIn) {
    const oldMeta = __spreadValues({}, this.meta);
    this._meta = Object.assign(this.meta, metaIn);
    this.emit("metaUpdated", { oldMeta, meta: __spreadValues({}, this.meta) });
  }
  get data() {
    return this._box.data;
  }
  setData(dataIn) {
    const oldData = __spreadValues({}, this._box.data);
    this._box.data = Object.assign(this.data, dataIn);
    this.emit("dataUpdated", { oldData, data: __spreadValues({}, this.data) });
  }
  get props() {
    const props = {};
    for (const key in this.meta.props) {
      props[key] = this.getProp(key);
    }
    return props;
  }
  getProp(key) {
    if (key === "rect")
      return this.box.rect;
    if (key === "presentationRect")
      return this.box.presentationRect;
    if (key === "background")
      return this.box.background;
    if (key === "presentation")
      return this.box.presentation;
    return typeof this.box.props[key] === "undefined" ? this.meta.props[key].default : this.box.props[key];
  }
  get args() {
    return this.box.args;
  }
  get ios() {
    return this._box.ios;
  }
  set ios(i) {
    this._box.setIos(i);
  }
  get ioLines() {
    return this._box.ioLines;
  }
  async init() {
    this.subscribe();
    await this.emit("preInit");
  }
  async postInit() {
    await this.emit("postInit");
  }
  /** Do everything here */
  subscribe() {
  }
  updateUI(state) {
    this.emit("updateUI", state);
  }
  async updateArgs(args, options) {
    if (args == null ? void 0 : args.length) {
      const oldArgs = this.args.slice();
      await this.emit("updateArgs", args);
      if (options == null ? void 0 : options.undoable)
        this.undoable({ oldArgs, args: this.args.slice() });
    }
  }
  async updateProps(propsIn, options) {
    if (propsIn && Object.keys(propsIn).length) {
      const keys = Object.keys(propsIn);
      const oldProps = __spreadValues({}, this.props);
      await this.emit("updateProps", propsIn);
      const props = __spreadValues({}, this.props);
      for (const key in oldProps) {
        if (keys.indexOf(key) === -1) {
          delete oldProps[key];
          delete props[key];
        }
      }
      if (options == null ? void 0 : options.undoable)
        this.undoable({ oldProps, props });
    }
  }
  async updateState(state, options) {
    if (state && Object.keys(state).length) {
      const oldState = __spreadValues({}, this.state);
      await this.emit("updateState", { id: options == null ? void 0 : options.id, state });
      if (options == null ? void 0 : options.undoable)
        this.undoable({ oldState, state: __spreadValues({}, this.state) });
    }
  }
  fn(io, data) {
    if (io === 0) {
      if (data !== null && typeof data === "object") {
        const propsInKeys = Object.keys(data);
        const propsKeys = Object.keys(this.meta.props);
        if (propsInKeys.length && propsInKeys.every((k) => propsKeys.indexOf(k) !== -1)) {
          this.updateProps(data);
          return;
        }
      }
    }
  }
  outlet(io, data) {
    if (io >= this.ios.length)
      return;
    Array.from(this.ioLines[io]).sort(_Line__WEBPACK_IMPORTED_MODULE_2__["default"].compare).map((line) => line.pass(data));
  }
  // outletAll(outputs: Partial<O>) {
  //     for (let i = outputs.length - 1; i >= 0; i--) {
  //         if (i in outputs) this.outlet(i, outputs[i]);
  //     }
  // }
  undoable(e) {
    this.box.undoable(e);
  }
  async destroy() {
    await this.emit("destroy");
  }
  connectedIo(io, otherIo, otherBox, lineId) {
    this.emit("connectedIo", { io, otherIo, otherBox, lineId });
  }
  disconnectedIo(io, otherIo, otherBox, lineId) {
    this.emit("disconnectedIo", { io, otherIo, otherBox, lineId });
  }
  // connectedIo(aIo: number, bIo: number, bBoxId: string, lineId: string): void {
  //     this.emit("connectedIo", { aIo, bIo, bBoxId, lineId })
  // }
  // disconnectedIo(aIo: number, bIo: number, bBoxId: string, lineId: string): void {
  //     this.emit("disconnectedIo", { aIo, bIo, bBoxId, lineId })
  // }
  post(data) {
    this._patcher.newLog("none", this.meta.name, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyError)(data), this._box);
  }
  error(data) {
    const s = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyError)(data);
    this._patcher.newLog("error", this.meta.name, s, this._box);
    this._box.error(s);
  }
  info(data) {
    this._patcher.newLog("info", this.meta.name, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyError)(data), this._box);
  }
  warn(data) {
    this._patcher.newLog("warn", this.meta.name, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyError)(data), this._box);
  }
  highlight() {
    this._box.highlight();
  }
  applyBPF(param, bpf) {
    const { audioCtx } = this;
    const { currentTime } = audioCtx;
    param.cancelScheduledValues(currentTime);
    param.setValueAtTime(param.value, currentTime);
    let t = 0;
    bpf.forEach((a) => {
      if (a.length === 1) {
        param.setValueAtTime(a[0], currentTime + t);
      } else if (a.length > 1) {
        t += a[1];
        param.linearRampToValueAtTime(a[0], currentTime + t);
      }
    });
  }
  async getSharedItem(id = this.box.id, type = "unknown", data, onceCreate) {
    let item;
    let newItem = false;
    const { fileMgr, tempMgr } = this.patcher.env;
    try {
      item = fileMgr.getProjectItemFromPath(id);
    } catch (e) {
      try {
        item = tempMgr.getProjectItemFromPath(id);
      } catch (e2) {
        if (data) {
          const d = await data();
          try {
            item = await tempMgr.root.addFile(id, d, type);
            newItem = true;
          } catch (e3) {
            item = tempMgr.getProjectItemFromPath(id);
          }
        } else {
          if (onceCreate) {
            const off = () => {
              fileMgr.off("treeChanged", handleFileMgrTreeChanged);
              tempMgr.off("treeChanged", handleTempMgrTreeChanged);
            };
            const handleFileMgrTreeChanged = () => {
              try {
                item = fileMgr.getProjectItemFromPath(id);
                off();
                onceCreate(item);
              } catch (e3) {
              }
            };
            const handleTempMgrTreeChanged = () => {
              try {
                item = tempMgr.getProjectItemFromPath(id);
                off();
                onceCreate(item);
              } catch (e3) {
              }
            };
            fileMgr.on("treeChanged", handleFileMgrTreeChanged);
            tempMgr.on("treeChanged", handleTempMgrTreeChanged);
            return { id, item: null, newItem, off };
          }
          return { id, item: null, newItem };
        }
      }
    }
    if (item.type !== type)
      throw new Error(`Getting shared item ${id}, but returned item is of type ${item.type}, not of type ${type}.`);
    return { id, item, newItem };
  }
}
AbstractObject.isHardwarePatcherObjectConstructor = true;
AbstractObject.package = "Base";
AbstractObject.icon = null;
AbstractObject.author = "";
AbstractObject.version = "0.0.0";
AbstractObject.description = "";
AbstractObject.ios = [];
AbstractObject.args = [];
AbstractObject.props = {};
AbstractObject.patcherInlets = [];
AbstractObject.patcherOutlets = [];
AbstractObject.docs = "";
AbstractObject.helpFiles = [];


/***/ }),

/***/ "./src/core/hardware/objects/base/BaseHardwareObject.ts":
/*!**************************************************************!*\
  !*** ./src/core/hardware/objects/base/BaseHardwareObject.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseObject)
/* harmony export */ });
/* harmony import */ var _AbstractHardwareObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractHardwareObject */ "./src/core/hardware/objects/base/AbstractHardwareObject.ts");

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

class BaseObject extends _AbstractHardwareObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.isUIStateKey = (x) => this.meta.props[x] && this.meta.props[x].isUIState;
    this.updateUIFromProps = (props) => {
      if (props) {
        const uiState = {};
        for (const key in props) {
          if (this.isUIStateKey(key))
            uiState[key] = props[key];
        }
        this.updateUI(uiState);
      }
    };
  }
  static get meta() {
    const thisName = this._name;
    const superMeta = Object.getPrototypeOf(this).meta;
    const superProps = superMeta.props;
    const thisProps = this.props;
    for (const key in thisProps) {
      thisProps[key].group = key in superProps ? superProps[key].group : thisName;
    }
    return {
      name: this._name,
      icon: this.icon,
      version: this.version,
      description: this.description,
      ios: [...this.ios],
      args: [...this.args],
      props: __spreadValues(__spreadValues({}, superProps), thisProps),
      patcherInlets: [...this.patcherInlets],
      patcherOutlets: [...this.patcherOutlets],
      docs: this.docs,
      helpFiles: this.helpFiles
    };
  }
  subscribe() {
    super.subscribe();
    this.on("metaUpdated", (e) => this.box.emit("metaUpdated", e));
    this.on("argsUpdated", (e) => this.box.emit("argsUpdated", e));
    this.on("propsUpdated", (e) => this.box.emit("propsUpdated", e));
    this.on("dataUpdated", (e) => this.box.emit("dataUpdated", e));
    this.on("stateUpdated", (e) => this.box.emit("stateUpdated", e));
    this.on("updateArgs", this.setArgs);
    this.on("updateProps", this.setProps);
    this.on("updateProps", this.updateUIFromProps);
  }
}
BaseObject.package = "base";
BaseObject.props = {
  hidden: {
    type: "boolean",
    default: false,
    description: "Hide on lock",
    isUIState: true
  },
  background: {
    type: "boolean",
    default: false,
    description: "Include in background"
  },
  presentation: {
    type: "boolean",
    default: false,
    description: "Include in presentation"
  },
  rect: {
    type: "object",
    default: [0, 0, 90, 20],
    description: "Position and dimensions in patch"
  },
  presentationRect: {
    type: "object",
    default: [0, 0, 90, 20],
    description: "Position and dimensions in presentation"
  },
  ignoreClick: {
    type: "boolean",
    default: false,
    description: "Ignore Click",
    isUIState: true
  },
  hint: {
    type: "string",
    default: "",
    description: "Hint on hover",
    isUIState: true
  }
};


/***/ }),

/***/ "./src/core/hardware/objects/base/BaseHardwareObjects.ts":
/*!***************************************************************!*\
  !*** ./src/core/hardware/objects/base/BaseHardwareObjects.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseHardwareObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseHardwareObject */ "./src/core/hardware/objects/base/BaseHardwareObject.ts");
/* harmony import */ var _EmptyObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyObject */ "./src/core/hardware/objects/base/EmptyObject.ts");
/* harmony import */ var _InvalidObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvalidObject */ "./src/core/hardware/objects/base/InvalidObject.ts");
/* harmony import */ var _ImageObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageObject */ "./src/core/hardware/objects/base/ImageObject.ts");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  BaseHardwareObject: _BaseHardwareObject__WEBPACK_IMPORTED_MODULE_0__["default"],
  EmptyObject: _EmptyObject__WEBPACK_IMPORTED_MODULE_1__["default"],
  InvalidObject: _InvalidObject__WEBPACK_IMPORTED_MODULE_2__["default"],
  "image": _ImageObject__WEBPACK_IMPORTED_MODULE_3__["default"]
});


/***/ }),

/***/ "./src/core/hardware/objects/base/DefaultHardwareObject.ts":
/*!*****************************************************************!*\
  !*** ./src/core/hardware/objects/base/DefaultHardwareObject.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultObject)
/* harmony export */ });
/* harmony import */ var _DefaultHardwareUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHardwareUI */ "./src/core/hardware/objects/base/DefaultHardwareUI.tsx");
/* harmony import */ var _BaseHardwareObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseHardwareObject */ "./src/core/hardware/objects/base/BaseHardwareObject.ts");



class DefaultObject extends _BaseHardwareObject__WEBPACK_IMPORTED_MODULE_1__["default"] {
  get env() {
    return super.env;
  }
}
DefaultObject.props = {
  bgColor: {
    type: "color",
    default: "rgb(41, 60, 71)",
    description: "Background color",
    isUIState: true
  },
  borderColor: {
    type: "color",
    default: "rgb(41, 60, 71)",
    description: "Border color",
    isUIState: true
  },
  textColor: {
    type: "color",
    default: "rgb(255, 255, 255)",
    description: "Text color",
    isUIState: true
  },
  fontFamily: {
    type: "enum",
    enums: ["Lato", "Georgia", "Times New Roman", "Arial", "Tahoma", "Verdana", "Courier New", "Roboto Mono"],
    default: "Roboto Mono",
    description: "Font family",
    isUIState: true
  },
  fontSize: {
    type: "number",
    default: 12,
    description: "Text font size",
    isUIState: true
  },
  fontStyle: {
    type: "enum",
    enums: ["normal", "italic", "oblique"],
    default: "normal",
    description: "Text style",
    isUIState: true
  },
  fontWeight: {
    type: "string",
    default: "normal",
    description: 'Text style: "normal" | "bold" | "lighter" | "bolder" | number',
    isUIState: true
  },
  textAlign: {
    type: "enum",
    enums: ["left", "center", "right"],
    default: "left",
    description: "Text style",
    isUIState: true
  }
};
DefaultObject.UI = _DefaultHardwareUI__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "./src/core/hardware/objects/base/DefaultHardwareUI.tsx":
/*!**************************************************************!*\
  !*** ./src/core/hardware/objects/base/DefaultHardwareUI.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultUI)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color-js */ "./node_modules/color-js/color.js");
/* harmony import */ var color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js");
/* harmony import */ var _utils_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/symbols */ "./src/utils/symbols.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _BaseHardwareUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseHardwareUI */ "./src/core/hardware/objects/base/BaseHardwareUI.tsx");
/* harmony import */ var _DefaultHardwareUI_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultHardwareUI.scss */ "./src/core/hardware/objects/base/DefaultHardwareUI.scss");

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







class DefaultUIDropdownObjects extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = { $: -1, items: [] };
    this.refTBody = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
  }
  next() {
    const { items, $ } = this.state;
    this.setState({ $: Math.min(items.length - 1, $ + 1) });
    if ($ >= 0 && this.refTBody.current && items[$ + 1]) {
      const table = this.refTBody.current.parentElement;
      const row = this.refTBody.current.children[$ + 1];
      if (row.offsetTop + row.offsetHeight > table.scrollTop + table.offsetHeight)
        row.scrollIntoView(false);
    }
  }
  prev() {
    const { items, $ } = this.state;
    this.setState({ $: Math.max(-1, $ - 1) });
    if ($ >= 0 && this.refTBody.current && items[$ - 1]) {
      const table = this.refTBody.current.parentElement;
      const row = this.refTBody.current.children[$ - 1];
      if (row.offsetTop < table.scrollTop)
        row.scrollIntoView(true);
    }
  }
  get current() {
    return this.state.items[this.state.$];
  }
  static getItems(propsIn) {
    const { lib, query, staticMethodOnly } = propsIn;
    const keys = Object.keys(lib).sort();
    const items = [];
    for (let i = 0; i < keys.length; i++) {
      if (items.length >= 16)
        break;
      const key = keys[i];
      if (key.startsWith(query)) {
        const o = lib[key];
        const { icon, description } = o.meta;
        if (staticMethodOnly) {
          if (o[_utils_symbols__WEBPACK_IMPORTED_MODULE_2__.ImportedStaticMethodObject]) {
            items.push({ key, icon, description });
          }
        } else {
          items.push({ key, icon, description });
        }
      }
    }
    return items;
  }
  componentDidMount() {
    this.setState({ items: DefaultUIDropdownObjects.getItems(this.props), $: -1 });
  }
  shouldComponentUpdate(nextProps, nextState, context) {
    if (nextProps.query !== this.props.query || nextProps.staticMethodOnly !== this.props.staticMethodOnly) {
      this.setState({ items: DefaultUIDropdownObjects.getItems(nextProps), $: -1 });
      return false;
    }
    if (nextState.$ !== this.state.$ || nextState.items !== this.state.items)
      return true;
    return false;
  }
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "box-ui-text-dropdown" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: "ui small inverted selectable striped unstackable very compact table box-ui-text-autocomplete" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", { ref: this.refTBody }, this.state.items.map((option, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: option.key, className: i === this.state.$ ? "focused" : "", onMouseDown: (e) => this.props.onSelect(e, option.key) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, option.icon ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], { inverted: true, size: "small", name: option.icon }) : void 0), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, option.key), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, option.description))))));
  }
}
class DefaultUIDropdownArgv extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = { $: -1, items: [] };
    this.refTBody = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
  }
  next() {
  }
  prev() {
  }
  get current() {
    return this.state.items[this.state.$];
  }
  static getItems(propsIn) {
    const { obj } = propsIn;
    const { args, props } = obj.meta;
    const items = [];
    for (let i = 0; i < args.length; i++) {
      const { type, optional, varLength, description } = args[i];
      items.push({ key: i, type, optional, varLength, description });
    }
    Object.keys(props).reverse().forEach((key) => {
      const { type, description } = props[key];
      items.push({ key, type, description });
    });
    return items;
  }
  componentDidMount() {
    this.setState({ items: DefaultUIDropdownArgv.getItems(this.props), $: -1 });
  }
  shouldComponentUpdate(nextProps, nextState, context) {
    if (nextProps.obj !== this.props.obj || nextProps.argv !== this.props.argv) {
      this.setState({ items: DefaultUIDropdownArgv.getItems(nextProps), $: -1 });
      return false;
    }
    if (nextState.$ !== this.state.$ || nextState.items !== this.state.items)
      return true;
    return false;
  }
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "box-ui-text-dropdown" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: "ui small inverted selectable striped unstackable very compact table box-ui-text-autocomplete" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", { ref: this.refTBody }, this.state.items.map((option, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: option.key, className: i === this.state.$ ? "focused" : "", onMouseDown: (e) => this.props.onSelect(e, option.key) }, typeof option.key === "number" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], { inverted: true, size: "small", name: "ellipsis horizontal" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, option.optional ? `[${option.varLength ? "..." : ""}arg${option.key}]` : `${option.varLength ? "..." : ""}arg${option.key}`)) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], { inverted: true, size: "small", name: "at" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, option.key)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: { color: "#30a0a0" } }, option.type), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, option.description))))));
  }
}
class DefaultUI extends _BaseHardwareUI__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor() {
    super(...arguments);
    this.state = __spreadProps(__spreadValues({}, this.state), {
      text: this.box.text || "",
      loading: false
    });
    this.refSpan = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    this.refDropdownObject = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    this.refDropdownArgv = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    this.handleMouseDown = (e) => this.props.editing ? e.stopPropagation() : null;
    this.handleClick = (e) => this.props.editing ? e.stopPropagation() : null;
    this.handleKeyDown = (e) => {
      if (!this.props.editing)
        return;
      if (e.key === "Enter") {
        e.preventDefault();
        if (this.refDropdownObject.current && this.refSpan.current) {
          const { current } = this.refDropdownObject.current;
          if (current) {
            const text = this.getApplied(current.key);
            this.refSpan.current.textContent = text;
            this.setState({ text });
            this.props.onContentsChanged();
          }
        }
        return;
      }
      if (e.key === "Tab") {
        if (this.refDropdownObject.current && this.refSpan.current) {
          const span = this.refSpan.current;
          const { current } = this.refDropdownObject.current;
          if (current) {
            const text = this.getApplied(current.key);
            this.refSpan.current.textContent = text;
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.selectElementPos)(span, text.length);
            this.setState({ text });
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            this.props.onContentsChanged();
            return;
          } else {
            const items = this.refDropdownObject.current.state.items;
            if (items.length) {
              const text = this.getApplied(items[0].key);
              this.refSpan.current.textContent = text;
              (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.selectElementPos)(span, text.length);
              this.setState({ text });
              e.preventDefault();
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
              this.props.onContentsChanged();
              return;
            }
          }
        }
      }
      if (e.key === " ") {
        if (this.refDropdownObject.current && this.refSpan.current) {
          const span = this.refSpan.current;
          const { current } = this.refDropdownObject.current;
          if (current) {
            const text = this.getApplied(current.key);
            this.refSpan.current.textContent = text;
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.selectElementPos)(span, text.length);
            this.setState({ text });
          }
        }
      }
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        if (this.refDropdownObject.current) {
          if (e.key === "ArrowUp")
            this.refDropdownObject.current.prev();
          else if (e.key === "ArrowDown")
            this.refDropdownObject.current.next();
        }
      }
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      if (e.key.length === 1 || e.key == "Backspace") {
        this.props.onContentsChanged();
      }
    };
    this.handleKeyUp = () => {
      if (!this.refSpan.current)
        return;
      if (this.refSpan.current.textContent === this.state.text)
        return;
      this.setState({ text: this.refSpan.current.textContent });
    };
    this.handlePaste = (e) => {
      e.preventDefault();
      document.execCommand("insertHTML", false, e.clipboardData.getData("text/plain"));
    };
    this.handleSelect = (e, textIn) => {
      e.preventDefault();
      if (this.refSpan.current) {
        const span = this.refSpan.current;
        const text = this.getApplied(textIn);
        this.refSpan.current.textContent = text;
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.selectElementPos)(span, text.length);
        this.setState({ text });
      }
    };
  }
  componentDidMount() {
    super.componentDidMount();
    if (this.props.editing)
      this.toggleEdit(this.props.editing);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.editing !== prevProps.editing)
      this.toggleEdit(this.props.editing);
  }
  toggleEdit(toggle) {
    const { patcher, box, editor } = this;
    if (editor.state.locked)
      return;
    if (!this.refSpan.current)
      return;
    const span = this.refSpan.current;
    if (toggle) {
      editor.selectOnly(box.id);
      this.setState({ text: span.textContent }, () => {
        span.focus();
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.selectElementRange)(span);
      });
    } else {
      window.getSelection().removeAllRanges();
      patcher.changeBoxText(box.id, span.textContent);
      this.setState({ text: span.textContent });
    }
  }
  get dropdownQuery() {
    let { text } = this.state;
    if (!this.props.editing || !text.length)
      return { Dropdown: void 0, query: void 0 };
    if (text.startsWith("new "))
      text = text.slice(4);
    else if (text.startsWith("func "))
      text = text.slice(5);
    const splitted = text.split(/\s/);
    if (splitted.length === 1)
      return { Dropdown: DefaultUIDropdownObjects, query: splitted[0] };
    const [className, ...argv] = splitted;
    const obj = this.patcher.activeLib[className];
    if (!obj)
      return { Dropdown: void 0, query: void 0 };
    return { Dropdown: DefaultUIDropdownArgv, query: { obj, argv } };
  }
  getApplied(textIn) {
    let { text } = this.state;
    let keyword = "";
    if (text.startsWith("new ")) {
      keyword = "new ";
      text = text.slice(4);
    } else if (text.startsWith("func ")) {
      keyword = "func ";
      text = text.slice(5);
    }
    const splitted = text.split(/\s/);
    if (splitted.length === 1) {
      return `${keyword}${textIn}`;
    }
    return textIn;
  }
  render() {
    const { object, dropdownQuery } = this;
    const textContainerStyle = {
      borderColor: this.state.borderColor,
      backgroundColor: this.state.bgColor
    };
    if (this.state.loading) {
      const bgColor = color_js__WEBPACK_IMPORTED_MODULE_1__(this.state.bgColor);
      const gradIsWhite = bgColor.getLightness() < 0.5;
      const gradColor = gradIsWhite ? bgColor.lightenByAmount(0.25) : bgColor.darkenByAmount(0.25);
      textContainerStyle.backgroundImage = `linear-gradient(to right, ${this.state.bgColor} 0%, ${gradColor.toCSS()} 20%, ${this.state.bgColor} 40%, ${this.state.bgColor} 200%)`;
    }
    const spanStyle = {
      color: this.state.textColor,
      fontFamily: `${this.state.fontFamily}, Tahoma, sans-serif`,
      fontSize: this.state.fontSize,
      fontWeight: this.state.fontWeight,
      fontStyle: this.state.fontStyle,
      textAlign: this.state.textAlign
    };
    const textContainerProps = __spreadValues({}, this.props.textContainerProps);
    textContainerProps.style = __spreadValues(__spreadValues({}, textContainerProps.style), textContainerStyle);
    const spanProps = __spreadValues({}, this.props.spanProps);
    spanProps.style = __spreadValues(__spreadValues({}, spanProps.style), spanStyle);
    const { Dropdown, query } = dropdownQuery;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseHardwareUI__WEBPACK_IMPORTED_MODULE_4__["default"], __spreadValues({ additionalClassName: "box-ui-default" }, this.props), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __spreadValues({ className: "box-ui-text-container" + (this.state.loading ? " loading" : "") }, textContainerProps), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __spreadValues({ className: "box-ui-text-container-prepend" }, this.props.prependProps), object.meta.icon ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], { inverted: true, size: "small", name: object.meta.icon }) : null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", __spreadValues({ contentEditable: this.props.editing, className: "editable" + (this.props.editing ? " editing" : ""), ref: this.refSpan, onMouseDown: this.handleMouseDown, onClick: this.handleClick, onPaste: this.handlePaste, onKeyDown: this.handleKeyDown, onKeyUp: this.handleKeyUp, onBlur: this.props.onEditEnd, suppressContentEditableWarning: true }, spanProps), object.box.text), Dropdown === DefaultUIDropdownObjects && typeof query === "string" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultUIDropdownObjects, { lib: this.patcher.activeLib, query, onSelect: this.handleSelect, staticMethodOnly: this.state.text.startsWith("new "), ref: this.refDropdownObject }) : Dropdown === DefaultUIDropdownArgv && typeof query === "object" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultUIDropdownArgv, { obj: query.obj, argv: query.argv, onSelect: this.handleSelect, ref: this.refDropdownArgv }) : void 0, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __spreadValues({ className: "box-ui-text-container-append" }, this.props.appendProps))));
  }
}
DefaultUI.editableOnUnlock = true;


/***/ }),

/***/ "./src/core/hardware/objects/base/EmptyObject.ts":
/*!*******************************************************!*\
  !*** ./src/core/hardware/objects/base/EmptyObject.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmptyObject)
/* harmony export */ });
/* harmony import */ var _DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHardwareObject */ "./src/core/hardware/objects/base/DefaultHardwareObject.ts");


class EmptyObject extends _DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.state = { editing: false };
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.ios = [
        ...["T", "B", "L", "R"].map((edge) => ({
          edge,
          position: 0.5
        }))
      ];
    });
  }
}
EmptyObject.author = "Corvus Prudens";
EmptyObject.version = "1.0.0";
EmptyObject.description = "Bypass input";
EmptyObject.ios = [
  ...Array.from({ length: 4 }, (_, i) => ({
    isHot: true,
    pin: { pinName: "", tie: true },
    type: "anything",
    description: "output same thing"
  }))
];


/***/ }),

/***/ "./src/core/hardware/objects/base/ImageObject.ts":
/*!*******************************************************!*\
  !*** ./src/core/hardware/objects/base/ImageObject.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageObject)
/* harmony export */ });
/* harmony import */ var _UIObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIObject */ "./src/core/hardware/objects/base/UIObject.ts");
/* harmony import */ var _ImageObjectUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageObjectUI */ "./src/core/hardware/objects/base/ImageObjectUI.tsx");

var _a;


async function getImageDimensions(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = () => {
      reject(new Error(`Could not load image at ${url}`));
    };
    img.src = url;
  });
}
class ImageObject extends _UIObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this._ = { key: (_a = this.box.args[0]) == null ? void 0 : _a.toString(), image: void 0, file: void 0, url: "", element: void 0, scale: 1 };
  }
  subscribe() {
    super.subscribe();
    const handleFilePathChanged = () => {
      var _a2;
      this._.key = (_a2 = this._.file) == null ? void 0 : _a2.projectPath;
    };
    const subscribeItem = async () => {
      const { image, file } = this._;
      if (image)
        await image.addObserver(this);
      if (file) {
        file.on("destroyed", reload);
        file.on("nameChanged", handleFilePathChanged);
        file.on("pathChanged", handleFilePathChanged);
      }
    };
    const unsubscribeItem = async () => {
      const { image, file } = this._;
      if (file) {
        file.off("destroyed", reload);
        file.off("nameChanged", handleFilePathChanged);
        file.off("pathChanged", handleFilePathChanged);
      }
      if (image)
        await image.removeObserver(this);
    };
    const reload = async () => {
      await unsubscribeItem();
      const { key } = this._;
      let image;
      let url;
      try {
        const { item } = await this.getSharedItem(key, "image");
        image = await item.instantiate({ env: this.patcher.env, project: this.patcher.project });
        this._.image = image;
        this._.file = item;
        url = image.objectURL;
      } catch (e) {
        url = key;
      } finally {
        this._.url = url;
        this.updateUI({ url });
        await subscribeItem();
      }
    };
    this.on("postInit", async () => {
      await reload();
      const { width, height } = await getImageDimensions(this._.url);
      this.box.setHeight(height * this._.scale || 100);
      this.box.setWidth(width * this._.scale || 100);
      this.patcher.changeIO();
    });
    this.on("destroy", () => {
      unsubscribeItem();
      this.patcher.changeIO();
    });
  }
}
ImageObject.description = "Display an image";
// static inlets: IIosMeta = [{
//     isHot: true,
//     type: "anything",
//     description: "Image file name or url"
// }];
// static args: IArgsMeta = [{
//     type: "string",
//     optional: true,
//     description: "Image file name or url"
// }];
// static props: IPropsMeta<ImgProps> = {
//     scroll: {
//         type: "boolean",
//         default: false,
//         description: "Allow overflow-scroll",
//         isUIState: true
//     },
//     objectFit: {
//         type: "enum",
//         enums: ["fill", "cover", "contain", "none", "scale-down"],
//         default: "contain",
//         description: "CSS object-fit property",
//         isUIState: true
//     },
//     objectPosition: {
//         type: "string",
//         default: "50% 50%",
//         description: 'CSS object-position property, for example "50% 50%" or "left top"',
//         isUIState: true
//     },
//     opacity: {
//         type: "number",
//         default: 1,
//         description: "Opacity of the image (0-1)",
//         isUIState: true
//     }
// };
ImageObject.UI = _ImageObjectUI__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/core/hardware/objects/base/ImageObjectUI.tsx":
/*!**********************************************************!*\
  !*** ./src/core/hardware/objects/base/ImageObjectUI.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImgUI)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _BaseHardwareUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseHardwareUI */ "./src/core/hardware/objects/base/BaseHardwareUI.tsx");

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


class ImgUI extends _BaseHardwareUI__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    this.state = __spreadProps(__spreadValues({}, this.state), { url: this.object._.url });
    this.imgRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    this.handleLoadedMetadata = () => this.object.outlet(0, this.imgRef.current);
  }
  componentDidMount() {
    super.componentDidMount();
    const image = this.imgRef.current;
    if (image) {
      this.object._.element = image;
      this.object.outlet(0, image);
      image.addEventListener("loadedmetadata", this.handleLoadedMetadata);
    }
  }
  componentWillUnmount() {
    var _a;
    super.componentWillUnmount();
    (_a = this.imgRef.current) == null ? void 0 : _a.removeEventListener("loadedmetadata", this.handleLoadedMetadata);
  }
  render() {
    const { objectFit, objectPosition, scroll, opacity } = this.state;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseHardwareUI__WEBPACK_IMPORTED_MODULE_1__["default"], __spreadValues({}, this.props), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { position: "absolute", width: "100%", height: "100%", display: "block", overflow: "auto" } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { ref: this.imgRef, src: this.state.url, style: __spreadProps(__spreadValues({ position: "absolute" }, scroll ? {} : { width: "100%", height: "100%" }), { objectFit, objectPosition, opacity }) })));
  }
}
ImgUI.sizing = "both";
ImgUI.defaultSize = [210, 90];


/***/ }),

/***/ "./src/core/hardware/objects/base/InvalidObject.ts":
/*!*********************************************************!*\
  !*** ./src/core/hardware/objects/base/InvalidObject.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvalidObject)
/* harmony export */ });
/* harmony import */ var _DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHardwareObject */ "./src/core/hardware/objects/base/DefaultHardwareObject.ts");
/* harmony import */ var _InvalidObject_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvalidObject.scss */ "./src/core/hardware/objects/base/InvalidObject.scss");



class InvalidObject extends _DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  subscribe() {
    this.patcher.on("libChanged", () => this.box.changeText(this.box.text, true));
  }
}
InvalidObject.description = "invalid object";
InvalidObject.inlets = [{
  isHot: false,
  type: "anything",
  varLength: true,
  description: "nothing"
}];
InvalidObject.props = {
  bgColor: {
    type: "color",
    default: "rgb(128, 64, 64)",
    description: "Background color",
    isUIState: true
  }
};


/***/ }),

/***/ "./src/core/hardware/objects/base/UIObject.ts":
/*!****************************************************!*\
  !*** ./src/core/hardware/objects/base/UIObject.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UIObject)
/* harmony export */ });
/* harmony import */ var _BaseHardwareObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseHardwareObject */ "./src/core/hardware/objects/base/BaseHardwareObject.ts");


class UIObject extends _BaseHardwareObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
}
UIObject.author = "Corvus Prudens";
UIObject.version = "v1.0.0";
UIObject.description = "Basic UI object";


/***/ }),

/***/ "./src/core/hardware/objects/hardware/Gpi.ts":
/*!***************************************************!*\
  !*** ./src/core/hardware/objects/hardware/Gpi.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gpi)
/* harmony export */ });
/* harmony import */ var _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/ImageObject */ "./src/core/hardware/objects/base/ImageObject.ts");


class Gpi extends _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.ios = [
        {
          edge: "L",
          position: 0.5
        },
        {
          edge: "R",
          position: 0.5
        }
      ];
      this._.key = "https://cdn.discordapp.com/attachments/1049762470694223903/1111057050366132224/pulse.png";
      this._.scale = 0.05;
    });
  }
}
Gpi.author = "Corvus Prudens";
Gpi.version = "v1.1.0";
Gpi.description = "GPIO input";
Gpi.ios = [
  {
    pin: { pinName: "gpio", digitalOutput: true },
    type: "anything",
    description: "GPIO pin"
  },
  {
    pin: { pinName: "gpio", digitalOutput: true },
    type: "anything",
    description: "GPIO pin"
  }
];
Gpi.patcherOutlets = [
  {
    type: "number",
    description: "Get GPIO input"
  }
];


/***/ }),

/***/ "./src/core/hardware/objects/hardware/Gpo.ts":
/*!***************************************************!*\
  !*** ./src/core/hardware/objects/hardware/Gpo.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gpo)
/* harmony export */ });
/* harmony import */ var _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/ImageObject */ "./src/core/hardware/objects/base/ImageObject.ts");


class Gpo extends _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.ios = [
        {
          edge: "L",
          position: 0.5
        },
        {
          edge: "R",
          position: 0.5
        }
      ];
      this._.key = "https://cdn.discordapp.com/attachments/1049762470694223903/1111057050642960446/switch.png";
      this._.scale = 0.05;
    });
  }
}
Gpo.author = "Corvus Prudens";
Gpo.version = "v1.1.0";
Gpo.description = "GPIO output";
Gpo.ios = [
  {
    pin: { pinName: "gpio", digitalOutput: true },
    type: "anything",
    description: "GPIO pin"
  },
  {
    pin: { pinName: "gpio", digitalOutput: true },
    type: "anything",
    description: "GPIO pin"
  }
];
Gpo.patcherInlets = [
  {
    isHot: true,
    type: "number",
    description: "Set GPIO output"
  }
];


/***/ }),

/***/ "./src/core/hardware/objects/hardware/HardwareObjects.ts":
/*!***************************************************************!*\
  !*** ./src/core/hardware/objects/hardware/HardwareObjects.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Knob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Knob */ "./src/core/hardware/objects/hardware/Knob.ts");
/* harmony import */ var _Gpi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gpi */ "./src/core/hardware/objects/hardware/Gpi.ts");
/* harmony import */ var _Gpo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gpo */ "./src/core/hardware/objects/hardware/Gpo.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "knob": _Knob__WEBPACK_IMPORTED_MODULE_0__["default"],
  "gpi": _Gpi__WEBPACK_IMPORTED_MODULE_1__["default"],
  "gpo": _Gpo__WEBPACK_IMPORTED_MODULE_2__["default"]
});


/***/ }),

/***/ "./src/core/hardware/objects/hardware/Knob.ts":
/*!****************************************************!*\
  !*** ./src/core/hardware/objects/hardware/Knob.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Knob)
/* harmony export */ });
/* harmony import */ var _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/ImageObject */ "./src/core/hardware/objects/base/ImageObject.ts");


class Knob extends _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.ios = [
        {
          edge: "B",
          position: 0.5
        }
      ];
      this._.key = "https://cdn.discordapp.com/attachments/1049762470694223903/1111059092342063215/knob.png";
      this._.scale = 0.066;
    });
  }
}
Knob.author = "Corvus Prudens";
Knob.version = "v1.0.0";
Knob.description = "Unipolar Potentiometer";
Knob.ios = [
  {
    pin: { pinName: "signal", analogOutput: true },
    type: "anything",
    description: "knob signal"
  }
];
Knob.patcherOutlets = [
  {
    type: "number",
    description: "Knob voltage"
  }
];
Knob.props = {
  static_threshold: {
    type: "number",
    default: 0.01,
    description: "Threshold beyond which the knob is considered to be moving at rest",
    alwaysSerialize: true
  },
  dynamic_threshold: {
    type: "number",
    default: 1e-3,
    description: "Threshold beyond which the knob remains active while moving",
    alwaysSerialize: true
  },
  timeout: {
    type: "number",
    default: 500,
    description: "Timeout in ms after which the knob is considered to be at rest",
    alwaysSerialize: true
  }
};


/***/ }),

/***/ "./src/core/hardware/objects/soms/DaisySeed.ts":
/*!*****************************************************!*\
  !*** ./src/core/hardware/objects/soms/DaisySeed.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaisySeed": () => (/* binding */ DaisySeed)
/* harmony export */ });
/* harmony import */ var _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/ImageObject */ "./src/core/hardware/objects/base/ImageObject.ts");


const DaisyPins = [
  {
    pinName: "D0",
    digitalInput: true,
    digitalOutput: true,
    pwmOutput: true,
    busCapabilities: {
      "USB_HS": { usb: true, id: true, dplus: false, dminus: false },
      "UART5": { usart: true, rx: true, tx: false },
      "USART3": { usart: true, cts: false, rts: false, tx: false, rx: false, ck: true }
    }
  },
  {
    pinName: "D1",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: false, dat0: false, dat1: false, dat2: false, dat3: true },
      "USART3": { usart: true, rx: true, tx: false },
      "UART4": { usart: true, rx: true, tx: false },
      "SPI3": { spi: true, miso: true, mosi: false, sck: false, ss: false },
      "I2S3": { i2s: true, sd: true, ws: false, sck: false }
    }
  },
  {
    pinName: "D2",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: false, dat0: false, dat1: false, dat2: true, dat3: false },
      "USART3": { usart: true, rx: false, tx: true },
      "UART4": { usart: true, rx: false, tx: true },
      "SPI3": { spi: true, miso: false, mosi: false, sck: true, ss: false },
      "I2S3": { i2s: true, sd: false, ws: false, sck: true }
    }
  },
  {
    pinName: "D3",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: false, dat0: false, dat1: true, dat2: false, dat3: false },
      "UART5": { usart: true, rx: false, tx: false, cts: true, rts: false },
      "I2S": { i2s: true, sd: false, ws: false, sck: false }
    }
  },
  {
    pinName: "D4",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: false, dat0: true, dat1: false, dat2: false, dat3: false },
      "UART5": { usart: true, rx: false, tx: false, cts: false, rts: true }
    }
  },
  {
    pinName: "D5",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: true, clk: false, dat0: false, dat1: false, dat2: false, dat3: false },
      "UART5": { usart: true, rx: true, tx: false }
    }
  },
  {
    pinName: "D6",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: true, dat0: false, dat1: false, dat2: false, dat3: false },
      "UART5": { usart: true, rx: false, tx: true },
      "USART3": { usart: true, rx: false, tx: false, cts: false, rts: false, ck: true },
      "SPI3": { spi: true, miso: false, mosi: true, sck: false, ss: false },
      "I2S3": { i2s: true, sd: true, ws: false, sck: false }
    }
  },
  {
    pinName: "D7",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SPI1": { spi: true, miso: false, mosi: false, sck: false, ss: true },
      "I2S1": { i2s: true, sd: false, ws: true, sck: false }
    }
  },
  {
    pinName: "D8",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SPI1": { spi: true, miso: false, mosi: false, sck: true, ss: false },
      "I2S1": { i2s: true, sd: false, ws: false, sck: true }
    }
  },
  {
    pinName: "D9",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SPI1": { spi: true, miso: true, mosi: false, sck: false, ss: false },
      "UART7": { usart: true, rx: false, tx: true },
      "SPI3": { spi: true, miso: true, mosi: false, sck: false, ss: false },
      "I2S1": { i2s: true, sd: true, ws: false, sck: false },
      "SPI6": { spi: true, miso: true, mosi: false, sck: false, ss: false }
    }
  },
  {
    pinName: "D10",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SPI1": { spi: true, mosi: true },
      "UART5": { usart: true, rx: true },
      "I2S1": { i2s: true, sd: true },
      "SPI3": { spi: true, mosi: true },
      "I2S3": { i2s: true, sd: true },
      "SPI6": { spi: true, mosi: true },
      "I2C4": { i2c: true, sda: true }
    }
  },
  {
    pinName: "D11",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "I2C1": { i2c: true, scl: true },
      "UART4": { usart: true, rx: true },
      "I2C4": { i2c: true, scl: true }
    }
  },
  {
    pinName: "D12",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "I2C1": { i2c: true, sda: true },
      "UART4": { usart: true, tx: true },
      "SPI2": { spi: true, ss: true },
      "I2S2": { i2s: true, ws: true },
      "I2C4": { i2c: true, sda: true }
    }
  },
  {
    pinName: "D13",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "USART1": { usart: true, tx: true },
      "LPUART1": { usart: true, tx: true },
      "UART5": { usart: true, tx: true },
      "I2C1": { i2c: true, scl: true },
      "I2C4": { i2c: true, scl: true }
    }
  },
  {
    pinName: "D14",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "USART1": { usart: true, rx: true },
      "LPUART1": { usart: true, rx: true },
      "I2C1": { i2c: true, sda: true },
      "I2C4": { i2c: true, sda: true }
    }
  },
  null,
  null,
  null,
  null,
  null,
  null,
  {
    pinName: "A0",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true
  },
  {
    pinName: "A1",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "USART2": { usart: true, rx: true }
    }
  },
  {
    pinName: "A2",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true
  },
  {
    pinName: "A3",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "SPI1": { spi: true, mosi: true },
      "I2S1": { i2s: true, sd: true },
      "SPI6": { spi: true, mosi: true }
    }
  },
  {
    pinName: "A4",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "SPI1": { spi: true, miso: true },
      "I2S1": { i2s: true, sd: true },
      "SPI6": { spi: true, miso: true }
    }
  },
  {
    pinName: "A5",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true
  },
  {
    pinName: "A6",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "I2S1": { i2s: true, ws: false, sd: false, sck: true }
    }
  },
  {
    pinName: "A7",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "SPI1": { spi: true, mosi: false, miso: false, sck: true, ss: false },
      "SPI6": { spi: true, mosi: false, miso: false, sck: true, ss: false },
      "I2S1": { i2s: true, ws: false, sd: false, sck: true }
    }
  },
  {
    pinName: "A8",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "SPI1": { spi: true, mosi: false, miso: false, sck: false, ss: true },
      "SPI3": { spi: true, mosi: false, miso: false, sck: false, ss: true },
      "SPI6": { spi: true, mosi: false, miso: false, sck: false, ss: true },
      "I2S1": { i2s: true, ws: true, sd: false, sck: false },
      "I2S3": { i2s: true, ws: true, sd: false, sck: false }
    }
  },
  {
    pinName: "A9",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "UART4": { usart: true, rx: true, tx: false }
    }
  },
  {
    pinName: "A10",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "UART4": { usart: true, rx: false, tx: true }
    }
  },
  {
    pinName: "D26",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "I2C4": { i2c: true, sda: false, scl: false }
    }
  },
  {
    pinName: "D27",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SAI2": { i2s: true, ws: false, sd: false, sck: false },
      "USART6": { usart: true, rx: true, tx: false },
      "SPI1": { spi: true, mosi: false, miso: true, sck: false, ss: false },
      "I2S1": { i2s: true, ws: false, sd: true, sck: false }
    }
  },
  {
    pinName: "A11",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "USART2": { usart: true, rx: false, tx: true }
    }
  },
  {
    pinName: "D29",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "USB_HS": { usb: true, dplus: false, dminus: true },
      "USART1": { usart: true, rx: false, tx: true }
    }
  },
  {
    pinName: "D30",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "USB_HS": { usb: true, dplus: true, dminus: false },
      "USART1": { usart: true, rx: true, tx: false }
    }
  },
  null,
  null,
  null
];
class DaisySeed extends _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      const spacing = 1 / 20.8;
      const offset = 0.6 * spacing;
      const right = [];
      for (let i = 0; i < 20; i++) {
        if (DaisyPins[i] != null) {
          right.push({
            edge: "R",
            position: offset + spacing * (19 - i)
          });
        }
      }
      const left = [];
      for (let i = 0; i < 20; i++) {
        if (DaisyPins[20 + i] != null) {
          left.push({
            edge: "L",
            position: offset + spacing * i
          });
        }
      }
      this.ios = [
        ...right,
        ...left
      ];
      this._.key = "https://cdn.discordapp.com/attachments/1049762470694223903/1111025669544095806/Daisy_Seed_illustrated_top.png";
      this._.scale = 0.28;
    });
  }
}
DaisySeed.author = "Corvus Prudens";
DaisySeed.version = "v1.0.0";
DaisySeed.description = "Daisy Seed SOM";
DaisySeed.ios = [
  ...DaisyPins.filter((pin) => pin != null).map((pin) => ({
    type: "anything",
    description: `Pin ${pin.pinName}`,
    pin
  }))
];
DaisySeed.patcherInlets = [
  {
    isHot: true,
    type: "signal",
    description: "Audio DAC left"
  },
  {
    isHot: true,
    type: "signal",
    description: "Audio DAC right"
  },
  {
    isHot: false,
    type: "number",
    description: "Set on-board LED"
  }
];
DaisySeed.patcherOutlets = [
  {
    type: "signal",
    description: "Audio ADC left"
  },
  {
    type: "signal",
    description: "Audio ADC right"
  }
];


/***/ }),

/***/ "./src/core/hardware/objects/soms/SomObjects.ts":
/*!******************************************************!*\
  !*** ./src/core/hardware/objects/soms/SomObjects.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DaisySeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DaisySeed */ "./src/core/hardware/objects/soms/DaisySeed.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "seed": _DaisySeed__WEBPACK_IMPORTED_MODULE_0__.DaisySeed
});


/***/ }),

/***/ "./src/core/hardware/objects/base/DefaultHardwareUI.scss":
/*!***************************************************************!*\
  !*** ./src/core/hardware/objects/base/DefaultHardwareUI.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_DefaultHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./DefaultHardwareUI.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/DefaultHardwareUI.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_DefaultHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_DefaultHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_DefaultHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_DefaultHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/core/hardware/objects/base/InvalidObject.scss":
/*!***********************************************************!*\
  !*** ./src/core/hardware/objects/base/InvalidObject.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InvalidObject_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./InvalidObject.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/InvalidObject.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InvalidObject_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InvalidObject_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InvalidObject_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InvalidObject_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=53cf61b217024bf9be84.js.map