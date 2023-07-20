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
  } else {
    return data;
  }
}


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
    this._ = { result: void 0 };
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 1;
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
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Counter extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
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
    this.on("inlet", ({ inlet }) => {
      if (inlet === 0) {
        this.outlet(0, this._.current_step);
        console.log(JSON.stringify(this._));
        this._.current_step += this._.step;
        if (this._.start <= this._.stop) {
          if (this._.current_step + this._.step > this._.stop) {
            this._.num_satisfied += 1;
            this.outlet(1, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
            this.outlet(2, this._.num_satisfied);
            this._.current_step = this._.start;
          }
        } else if (this._.start > this._.stop) {
          if (this._.current_step + this._.step < this._.stop) {
            this._.num_satisfied += 1;
            this.outlet(1, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
            this.outlet(2, this._.num_satisfied);
            this._.current_step = this._.start;
          }
        }
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
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Dbtopow extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
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
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          try {
            if (data <= 0) {
              this._.power = 0;
            } else {
              if (data > 870)
                data = 870;
              this._.power = Math.exp(2.302585092994046 * 0.1 * (data - 100));
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
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Dbtorms extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
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
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          try {
            if (data <= 0) {
              this._.rms = 0;
            } else {
              if (data > 485)
                data = 485;
              this._.rms = Math.exp(2.302585092994046 * 0.05 * (data - 100));
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
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Ftom extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
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
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          try {
            if (data <= 0) {
              this._.note = -1500;
            } else {
              this._.note = 12 * Math.log(data / 220) / Math.log(2) + 57.01;
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
            this.outlet(0, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
            this.outlet(2, i);
          }
          this.outlet(1, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
        } else if (this._.start > this._.stop) {
          if (this._.step >= 0) {
            this.error("iteration will never terminate");
            return;
          }
          for (let i = this._.start; i > this._.stop; i += this._.step) {
            this.outlet(0, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
            this.outlet(2, i);
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
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Mtof extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
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
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          try {
            if (data <= -1500) {
              this._.freq = 0;
            } else if (data > 1499) {
              this._.freq = 440 * Math.exp(0.0577625565 * (1499 - 69));
            } else {
              this._.freq = 440 * Math.exp(0.0577625565 * (data - 69));
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
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Powtodb extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
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
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          try {
            if (data <= 0) {
              this._.decibels = 0;
            } else {
              this._.decibels = 100 + 10 / 2.302585092994046 * Math.log(data);
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
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sdk */ "./src/sdk.ts");


class Rmstodb extends _sdk__WEBPACK_IMPORTED_MODULE_0__.DefaultObject {
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
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          try {
            if (data <= 0) {
              this._.decibels = 0;
            } else {
              this._.decibels = 100 + 20 / 2.302585092994046 * Math.log(data);
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
    this._ = { right: void 0 };
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 1;
      if (this.args.length) {
        this._.right = this.args[0];
      }
    });
    this.on("argsUpdated", ({ args }) => {
      if (this.args.length) {
        this._.right = args[0];
      }
    });
    this.on("inlet", ({ data: rawData, inlet }) => {
      if (inlet === 0) {
        let data = rawData;
        if (!(this._.right instanceof Array)) {
          data = (0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_1__.extractFirst)(rawData);
        }
        if (data === this._.right) {
          this.outlet(0, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
        } else {
          this.outlet(1, data);
        }
      } else if (inlet === 1) {
        this._.right = rawData;
      }
    });
  }
}
Select.description = "Output a bang when the value matches";
Select.inlets = [
  {
    isHot: true,
    type: "anything",
    description: "The input to evaluate"
  },
  {
    isHot: false,
    type: "anything",
    description: "The value to compare against"
  }
];
Select.outlets = [
  {
    type: "bang",
    description: "Bangs when the value matches"
  },
  {
    type: "anything",
    description: "Any input that did not match"
  }
];
Select.args = [{
  type: "anything",
  optional: true,
  description: "The value to compare against"
}];


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
      this.outlets = 1;
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














/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => ({
  "change": _objects_block_change__WEBPACK_IMPORTED_MODULE_0__["default"],
  "swap": _objects_block_swap__WEBPACK_IMPORTED_MODULE_1__["default"],
  "mtof": _objects_block_mtof__WEBPACK_IMPORTED_MODULE_2__["default"],
  "ftom": _objects_block_ftom__WEBPACK_IMPORTED_MODULE_3__["default"],
  "powtodb": _objects_block_powtodb__WEBPACK_IMPORTED_MODULE_4__["default"],
  "dbtopow": _objects_block_dbtopow__WEBPACK_IMPORTED_MODULE_5__["default"],
  "dbtorms": _objects_block_dbtorms__WEBPACK_IMPORTED_MODULE_6__["default"],
  "rmstodb": _objects_block_rmstodb__WEBPACK_IMPORTED_MODULE_7__["default"],
  "iter": _objects_block_iter__WEBPACK_IMPORTED_MODULE_8__["default"],
  "counter": _objects_block_counter__WEBPACK_IMPORTED_MODULE_9__["default"],
  "select": _objects_block_select__WEBPACK_IMPORTED_MODULE_10__["default"],
  "append": _objects_block_append__WEBPACK_IMPORTED_MODULE_11__.Append,
  "prepend": _objects_block_prepend__WEBPACK_IMPORTED_MODULE_12__.Prepend
}));

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=index.jspatpkg.js.map