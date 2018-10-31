/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sequence.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascripts/sequencer.js":
/*!**********************************!*\
  !*** ./javascripts/sequencer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _square_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square.js */ "./javascripts/square.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var NOTES = {
  0: "./assets/sound_files/glock_d1.wav",
  1: "./assets/sound_files/glock_e1.wav",
  2: "./assets/sound_files/glock_f1.wav",
  3: "./assets/sound_files/glock_g1.wav",
  4: "./assets/sound_files/glock_a2.wav",
  5: "./assets/sound_files/glock_b2.wav",
  6: './assets/sound_files/glock_c2.wav',
  7: './assets/sound_files/glock_cs2.wav',
  8: './assets/sound_files/glock_d2.wav',
  9: './assets/sound_files/glock_e2.wav'
};
var MARIMBA = {
  6: "./assets/sound_files/marimba/mar_b3.wav",
  9: "./assets/sound_files/marimba/mar_c3.wav",
  8: "./assets/sound_files/marimba/mar_e3.wav",
  7: "./assets/sound_files/marimba/mar_g3.wav",
  3: "./assets/sound_files/marimba/mar_a4.wav",
  5: "./assets/sound_files/marimba/mar_d4.wav",
  4: "./assets/sound_files/marimba/mar_f4.wav",
  0: "./assets/sound_files/marimba/mar_b5.wav",
  2: "./assets/sound_files/marimba/mar_c5.wav",
  1: "./assets/sound_files/marimba/mar_e5.wav"
}; // const COLORS = [
//   "#ff70b2",
//   "#ff6394",
//   "#ff4f75",
//   "#ff3a4b",
//   "#ff2134",
//   "#e5091c"
// ];

var Sequencer =
/*#__PURE__*/
function () {
  function Sequencer(ctx, audioCtx) {
    _classCallCheck(this, Sequencer);

    this.squares = [];
    this.addSquares();
    this.ctx = ctx;
    this.audioCtx = audioCtx;
    this.currentColumn = 0;
    this.currentColorIdx = 0;
    this.red = {
      value: 150,
      dir: 'desc'
    };
    this.blue = {
      value: 50,
      dir: 'desc'
    };
    this.green = {
      value: 25,
      dir: 'asc'
    };
    this.startSequence();
  }

  _createClass(Sequencer, [{
    key: "startSequence",
    value: function startSequence() {
      var _this = this;

      setInterval(function () {
        _this.triggerSquares(_this.currentColumn);

        _this.currentColumn = (_this.currentColumn + 1) % 10;
      }, 200);
    }
  }, {
    key: "triggerSquares",
    value: function triggerSquares(column) {
      var _this2 = this;

      var squareIndices = [];

      while (squareIndices.length < 10) {
        squareIndices.push(this.squares[column]);
        column += 10;
      } // const currentColor = COLORS[this.currentColorIdx];


      var currentColor = "rgb(".concat(this.red.value, ", ").concat(this.blue.value, ", ").concat(this.green.value, ")");
      squareIndices.forEach(function (squareIndex) {
        squareIndex.soundNote(currentColor);
        squareIndex.draw(_this2.ctx);
      }); // this.currentColorIdx = (this.currentColorIdx + 1) % 6;

      this.updateCurrentColor();
    }
  }, {
    key: "updateCurrentColor",
    value: function updateCurrentColor() {
      this.red = this.updateColorValue(this.red);
      this.blue = this.updateColorValue(this.blue);
      this.green = this.updateColorValue(this.green);
    }
  }, {
    key: "updateColorValue",
    value: function updateColorValue(color) {
      var newColor = {
        dir: color.dir,
        value: color.value
      };

      if (color.dir === 'asc' && color.value > 144) {
        newColor.dir = 'desc';
        newColor.value -= 4;
      } else if (color.dir === 'desc' && color.value < 12) {
        newColor.dir = 'asc';
        newColor.value += 4;
      } else {
        if (color.dir === 'asc') {
          newColor.value += 4;
        } else {
          newColor.value -= 4;
        }
      }

      return newColor;
    }
  }, {
    key: "addSquares",
    value: function addSquares() {
      var x = 0;
      var y = 0;
      var row = 0;

      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
          var newSquareIndex = this.squares.length;
          this.squares.push(new _square_js__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, MARIMBA[row], newSquareIndex));
          x += 50;
        }

        x = 0;
        y += 50;
        row += 1;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.squares.forEach(function (square) {
        square.draw(ctx);
      });
    }
  }, {
    key: "getCursorPos",
    value: function getCursorPos(canvas, event) {
      var rect = canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "toggleSquareAtPos",
    value: function toggleSquareAtPos(canvas, event) {
      var _this$getCursorPos = this.getCursorPos(canvas, event),
          x = _this$getCursorPos.x,
          y = _this$getCursorPos.y;

      var squareIdx = this.squareIndexAtPos(x, y);
      this.squares[squareIdx].toggle();
      this.squares[squareIdx].draw(this.ctx);
    }
  }, {
    key: "squareIndexAtPos",
    value: function squareIndexAtPos(x, y) {
      var xIdx = Math.floor(x / 50);
      var yIdx = Math.floor(y / 50) * 10;
      return xIdx + yIdx;
    }
  }]);

  return Sequencer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Sequencer);

/***/ }),

/***/ "./javascripts/square.js":
/*!*******************************!*\
  !*** ./javascripts/square.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Square =
/*#__PURE__*/
function () {
  function Square(x, y, filepath, index) {
    _classCallCheck(this, Square);

    this.x = x;
    this.y = y;
    this.color = 'black';
    this.newColor = 'black';
    this.toggled = false;
    this.index = index;
    this.audio = document.createElement('audio');
    this.audio.setAttribute('src', filepath);
    this.audio.setAttribute('id', index);
    this.audio.setAttribute('type', 'audio/wav');
    document.body.appendChild(this.audio);
  }

  _createClass(Square, [{
    key: "soundNote",
    value: function soundNote(nextColor) {
      var _this = this;

      this.newColor = nextColor;

      if (this.toggled) {
        setTimeout(function () {
          _this.audio.currentTime = 0;

          _this.audio.play();
        }, 0);
      } else {
        this.color = nextColor;
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.toggled === false) {
        this.toggled = true;
        this.color = 'white';
      } else {
        this.toggled = false;
        this.color = this.newColor;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, 45, 45); // ctx.beginPath();
      // ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
      // ctx.fill();
    }
  }]);

  return Square;
}();

/* harmony default export */ __webpack_exports__["default"] = (Square);

/***/ }),

/***/ "./sequence.js":
/*!*********************!*\
  !*** ./sequence.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _javascripts_sequencer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascripts/sequencer.js */ "./javascripts/sequencer.js");

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas");
  canvas.width = 500;
  canvas.height = 500;
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var audioCtx = new AudioContext();
  var ctx = canvas.getContext("2d");
  var sequencer = new _javascripts_sequencer_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, audioCtx);
  sequencer.draw(ctx);
  canvas.addEventListener('click', function (e) {
    return sequencer.toggleSquareAtPos(canvas, event);
  });
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map