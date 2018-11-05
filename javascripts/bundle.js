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

/***/ "./javascripts/piano_filepaths.js":
/*!****************************************!*\
  !*** ./javascripts/piano_filepaths.js ***!
  \****************************************/
/*! exports provided: PIANO, PIANO_PATHS */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/wadecoufal/Desktop/Sequence/javascripts/piano_filepaths.js'");

/***/ }),

/***/ "./javascripts/sequencer.js":
/*!**********************************!*\
  !*** ./javascripts/sequencer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _square_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square.js */ "./javascripts/square.js");
/* harmony import */ var _piano_filepaths_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piano_filepaths.js */ "./javascripts/piano_filepaths.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var COLOR_SCHEMES = {
  'Colorful': {
    'red': {
      value: 150,
      dir: "desc",
      changeVal: 4
    },
    'green': {
      value: 25,
      dir: "asc",
      changeVal: 4
    },
    'blue': {
      value: 50,
      dir: "desc",
      changeVal: 4
    }
  },
  'Muted': {
    'red': {
      value: 50,
      dir: "desc",
      changeVal: 4
    },
    'green': {
      value: 50,
      dir: "desc",
      changeVal: 4
    },
    'blue': {
      value: 50,
      dir: "desc",
      changeVal: 4
    }
  },
  'Aqua': {
    'red': {
      value: 0,
      dir: "desc",
      changeVal: 0
    },
    'blue': {
      value: 0,
      dir: "desc",
      changeVal: 4
    },
    'green': {
      value: 70,
      dir: "asc",
      changeVal: 4
    }
  }
};

var Sequencer =
/*#__PURE__*/
function () {
  function Sequencer(ctx) {
    _classCallCheck(this, Sequencer);

    this.squares = [];
    this.addSquares();
    this.ctx = ctx;
    this.currentColumn = 0;
    this.currentColorIdx = 0;
    this.red = COLOR_SCHEMES['Colorful']['red'];
    this.blue = COLOR_SCHEMES["Colorful"]["blue"];
    this.green = COLOR_SCHEMES["Colorful"]["green"];
    this.changeColor = this.changeColor.bind(this);
    this.changeBpm = this.changeBpm.bind(this);
    this.tempo = 200;
    this.tempoMs = 60000 / this.tempo;
    this.sequencing = this.startSequence();
    this.toggleSquareAtPos = this.toggleSquareAtPos.bind(this);
    this.style = "Square";
    this.changeStyle = this.changeStyle.bind(this);
  }

  _createClass(Sequencer, [{
    key: "startSequence",
    value: function startSequence() {
      var _this = this;

      return setInterval(function () {
        _this.triggerSquares(_this.currentColumn);

        _this.currentColumn = (_this.currentColumn + 1) % 20;
      }, this.tempoMs);
    }
  }, {
    key: "resetSequence",
    value: function resetSequence() {
      var _this2 = this;

      clearInterval(this.sequencing);
      this.currentColumn = 0;
      this.sequencing = setInterval(function () {
        _this2.triggerSquares(_this2.currentColumn);

        _this2.currentColumn = (_this2.currentColumn + 1) % 20;
      }, this.tempoMs);
    }
  }, {
    key: "changeBpm",
    value: function changeBpm(newTempo, newTextVal) {
      var _this3 = this;

      document.getElementById('bpm-display').textContent = "".concat(newTextVal, " BPM");
      clearInterval(this.sequencing);
      this.currentColumn = 0;
      this.tempo = newTempo;
      this.tempoMs = 60000 / this.tempo;
      this.sequencing = setInterval(function () {
        _this3.triggerSquares(_this3.currentColumn);

        _this3.currentColumn = (_this3.currentColumn + 1) % 20;
      }, this.tempoMs);
    }
  }, {
    key: "changeColor",
    value: function changeColor(colorScheme) {
      this.red = COLOR_SCHEMES[colorScheme].red;
      this.green = COLOR_SCHEMES[colorScheme].green;
      this.blue = COLOR_SCHEMES[colorScheme].blue;
    }
  }, {
    key: "changeStyle",
    value: function changeStyle(style) {
      this.style = style;
    }
  }, {
    key: "triggerSquares",
    value: function triggerSquares(column) {
      var _this4 = this;

      var squareIndices = [];

      while (squareIndices.length < 10) {
        squareIndices.push(this.squares[column]);
        column += 20;
      }

      var currentColor = "rgb(".concat(this.red.value, ", ").concat(this.blue.value, ", ").concat(this.green.value, ")");
      squareIndices.forEach(function (squareIndex) {
        squareIndex.soundNote(currentColor, _this4.ctx);
        squareIndex.draw(_this4.ctx, _this4.style);
      });
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
        value: color.value,
        changeVal: color.changeVal
      };

      if (color.dir === 'asc' && color.value > 144) {
        newColor.dir = 'desc';
        newColor.value -= color.changeVal;
      } else if (color.dir === 'desc' && color.value < 12) {
        newColor.dir = 'asc';
        newColor.value += color.changeVal;
      } else {
        if (color.dir === 'asc') {
          newColor.value += color.changeVal;
        } else {
          newColor.value -= color.changeVal;
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
        var audio = document.createElement('audio');
        audio.setAttribute('src', _piano_filepaths_js__WEBPACK_IMPORTED_MODULE_1__["PIANO"][4][row].filePath);
        audio.setAttribute('id', row);
        audio.setAttribute('type', 'audio/wav');
        audio.setAttribute("class", "audioRow".concat(row));
        audio.setAttribute("data-pianoIdx", _piano_filepaths_js__WEBPACK_IMPORTED_MODULE_1__["PIANO"][4][row].idx);
        document.body.appendChild(audio);

        for (var j = 0; j < 20; j++) {
          var newSquareIndex = this.squares.length;
          this.squares.push(new _square_js__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, audio, newSquareIndex));
          x += 50;
        }

        x = 0;
        y += 50;
        row += 1;
      }
    }
  }, {
    key: "createAudioTag",
    value: function createAudioTag(audioFilePath) {
      var audio = document.createElement('audio');
      audio.setAttribute('src', audioFilePath);
      audio.setAttribute('type', 'audio/wav');
      document.body.appendChild(audio);
      return audio;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this5 = this;

      this.squares.forEach(function (square) {
        square.draw(ctx, _this5.style);
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
    key: "presetConfig",
    value: function presetConfig(presetIndices) {
      var _this6 = this;

      var canvas = document.getElementById("canvas");
      presetIndices.forEach(function (idx) {
        _this6.toggleSquareAtPos(canvas, null, idx);
      });
    }
  }, {
    key: "untoggleAllSquares",
    value: function untoggleAllSquares() {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.squares.forEach(function (square) {
        if (square.toggled) {
          square.toggle();
        }
      });
    }
  }, {
    key: "toggleSquareAtPos",
    value: function toggleSquareAtPos(canvas, event, idx) {
      if (idx >= 0) {
        this.squares[idx].toggle();
        this.squares[idx].draw(this.ctx);
        return;
      }

      var _this$getCursorPos = this.getCursorPos(canvas, event),
          x = _this$getCursorPos.x,
          y = _this$getCursorPos.y;

      var squareIdx = this.squareIndexAtPos(x, y);
      var square = this.squares[squareIdx];
      square.toggle();
      square.draw(this.ctx, this.style);
    }
  }, {
    key: "squareIndexAtPos",
    value: function squareIndexAtPos(x, y) {
      var xIdx = Math.floor(x / 50);
      var yIdx = Math.floor(y / 50) * 20;
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

var TOTAL = 45;
var DIVISOR = 2;
var WIDTH = TOTAL / DIVISOR;
var THICKNESS = 2;
var TRIANGLE_POINTS = [[[THICKNESS, 0], [TOTAL - THICKNESS, 0], [TOTAL / 2, TOTAL / 2 - 2]], [[0, THICKNESS], [0, TOTAL - THICKNESS], [TOTAL / 2 - 2, TOTAL / 2]], [[THICKNESS, TOTAL], [TOTAL - THICKNESS, TOTAL], [TOTAL / 2, TOTAL / 2 + 2]], [[TOTAL, THICKNESS], [TOTAL, TOTAL - THICKNESS], [TOTAL / 2 + 2, TOTAL / 2]]];
var GRAY_ONE = "rgb(66, 0, 43)"; // med

var GRAY_TWO = 'rgb(45, 0, 22)'; // dark

var GRAY_THREE = 'rgb(77, 0, 53)'; // light

var PAIRS = {
  1: [0, TOTAL],
  2: [TOTAL, 0],
  3: [0, 0],
  4: [WIDTH / DIVISOR, WIDTH / DIVISOR],
  5: [WIDTH / DIVISOR, TOTAL - WIDTH / DIVISOR],
  6: [TOTAL - WIDTH / DIVISOR, WIDTH / DIVISOR],
  7: [TOTAL - WIDTH / DIVISOR, TOTAL - WIDTH / DIVISOR],
  8: [TOTAL, TOTAL]
};
var TRAPEZOID_POINTS = [[PAIRS[2], PAIRS[6], PAIRS[7], PAIRS[8]], [PAIRS[3], PAIRS[4], PAIRS[5], PAIRS[1]], [PAIRS[3], PAIRS[4], PAIRS[6], PAIRS[2]], [PAIRS[1], PAIRS[5], PAIRS[7], PAIRS[8]]]; // this.drawTrapezoid(ctx, PAIRS[3], PAIRS[4], PAIRS[5], PAIRS[1], GRAY_ONE); // left
// this.drawTrapezoid(ctx, PAIRS[2], PAIRS[6], PAIRS[7], PAIRS[8], GRAY_ONE); // right
// this.drawTrapezoid(ctx, PAIRS[3], PAIRS[4], PAIRS[6], PAIRS[2], GRAY_TWO); // top
// this.drawTrapezoid(ctx, PAIRS[1], PAIRS[5], PAIRS[7], PAIRS[8], GRAY_THREE); // bottom

var Square =
/*#__PURE__*/
function () {
  function Square(x, y, audio, index) {
    _classCallCheck(this, Square);

    this.x = x;
    this.y = y;
    this.color = "rgb(0, 0, 0)";
    this.newColor = "rgb(0, 0, 0)";
    this.toggled = false;
    this.index = index; // this.audio = filepath;

    this.audio = audio; // set audio in sequencer (10 instead of 100)
    // this.audio = document.createElement("audio");
    // this.audio.setAttribute("src", filepath);
    // this.audio.setAttribute("id", index);
    // this.audio.setAttribute("type", "audio/wav");
    // this.audio.setAttribute("class", `audioRow${Math.floor(index/20)}`);
    // this.audio.setAttribute("data-pianoIdx", pianoIdx);
    // document.body.appendChild(this.audio);
  }

  _createClass(Square, [{
    key: "soundNote",
    value: function soundNote(nextColor, ctx) {
      var _this = this;

      this.newColor = nextColor;

      if (this.toggled) {
        setTimeout(function () {
          _this.audio.currentTime = 0;

          _this.audio.play(); // this.radiate(ctx);

        }, 0);
      } else {
        this.color = nextColor;
      }
    }
  }, {
    key: "radiate",
    value: function radiate(ctx) {
      ctx.fillStyle = this.color;
      ctx.globalAlpha = 0.5;
      ctx.fillRect(this.x - 25, this.y - 25, 95, 95);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.toggled === false) {
        this.toggled = true;
        this.color = "rgb(255, 255, 255)";
      } else {
        this.toggled = false;
        this.color = this.newColor;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx, style) {
      ctx.clearRect(this.x, this.y, 50, 50);

      if (style === 'Jewel') {
        this.drawTriangles(ctx);
      } else if (style === 'Square') {
        this.drawSquare(ctx);
      } else if (style === 'Circle') {
        this.drawCircle(ctx);
      } else {
        this.drawSquare(ctx);
      }
    }
  }, {
    key: "drawCircle",
    value: function drawCircle(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x + TOTAL / 2, this.y + TOTAL / 2, TOTAL / 2, 0, 2 * Math.PI, false);
      ctx.fill();
    }
  }, {
    key: "drawSquare",
    value: function drawSquare(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, 45, 45);
    }
  }, {
    key: "drawTrapezoids",
    value: function drawTrapezoids(ctx) {
      var _this2 = this;

      var colors = [GRAY_ONE, GRAY_ONE, GRAY_TWO, GRAY_THREE];
      TRAPEZOID_POINTS.forEach(function (points, idx) {
        ctx.fillStyle = colors[idx];
        ctx.beginPath();
        ctx.moveTo(_this2.x + points[0][0], _this2.y + points[0][1]);
        ctx.lineTo(_this2.x + points[1][0], _this2.y + points[1][1]);
        ctx.lineTo(_this2.x + points[2][0], _this2.y + points[2][1]);
        ctx.lineTo(_this2.x + points[3][0], _this2.y + points[3][1]);
        ctx.closePath();
        ctx.fill();
      });
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x + WIDTH / 2, this.y + WIDTH / 2, WIDTH, WIDTH);
    }
  }, {
    key: "drawTriangles",
    value: function drawTriangles(ctx) {
      var _this3 = this;

      var colorParts = this.color.split("(").map(function (part) {
        return part.split(",");
      })[1];
      var red = parseInt(colorParts[0]);
      var blue = parseInt(colorParts[1]);
      var green = parseInt(colorParts[2]);
      var colorLeft = "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
      var colorRight = "rgb(".concat(red - 20, ", ").concat(green - 20, ", ").concat(blue - 20, ")");
      var colorTop = "rgb(".concat(red - 50, ", ").concat(green - 50, ", ").concat(blue - 50, ")");
      var colorBottom = "rgb(".concat(red - 10, ", ").concat(green - 10, ", ").concat(blue - 10, ")");
      var colors = [colorLeft, colorRight, colorTop, colorBottom];
      TRIANGLE_POINTS.forEach(function (triangle, idx) {
        ctx.fillStyle = colors[idx];
        ctx.beginPath();
        ctx.moveTo(_this3.x + triangle[0][0], _this3.y + triangle[0][1]);
        ctx.lineTo(_this3.x + triangle[1][0], _this3.y + triangle[1][1]);
        ctx.lineTo(_this3.x + triangle[2][0], _this3.y + triangle[2][1]);
        ctx.closePath();
        ctx.fill();
      });
    }
  }]);

  return Square;
}();

/* harmony default export */ __webpack_exports__["default"] = (Square);

/***/ }),

/***/ "./javascripts/util.js":
/*!*****************************!*\
  !*** ./javascripts/util.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _piano_filepaths_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piano_filepaths.js */ "./javascripts/piano_filepaths.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var PRESETS = {
  'Preset 1': {
    squareIndices: [0, 40, 80, 120, 160, 141, 101, 61, 21, 42, 82, 122, 103, 63, 84, 65, 105, 46, 86, 126, 147, 107, 67, 27, 8, 48, 88, 128, 168, 149, 109, 69, 29, 50, 90, 130, 111, 71, 92, 73, 113, 54, 94, 134, 155, 115, 75, 35, 16, 56, 96, 136, 176, 157, 117, 77, 37, 58, 98, 138, 119, 79]
  },
  'Preset 2': {
    squareIndices: [142, 144, 125, 25, 46, 67, 69, 91, 135, 96, 77]
  },
  'Preset 3': {
    squareIndices: [160, 142, 84, 165, 46, 27, 148, 29, 50, 131, 152, 94, 115, 96, 157, 199]
  },
  'Clear': {
    squareIndices: []
  }
};

var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, [{
    key: "changeOctave",
    value: function changeOctave(event, octave) {
      var allAudioTags = document.getElementsByTagName('audio');
      var octaveTag = document.getElementById('octave-display');
      var newOctaveValue;

      if (typeof octave != 'undefined') {
        newOctaveValue = octave;
      } else if (event.target.id === 'octave-minus') {
        newOctaveValue = parseInt(octaveTag.textContent) - 1;

        if (newOctaveValue === -1) {
          newOctaveValue = 5;
        }
      } else if (event.target.id === 'octave-plus') {
        newOctaveValue = (parseInt(octaveTag.textContent) + 1) % 6;
      }

      octaveTag.textContent = "".concat(newOctaveValue, " 8va");
      var octaveFilePaths = _piano_filepaths_js__WEBPACK_IMPORTED_MODULE_0__["PIANO"][newOctaveValue];
      var row = -1;

      for (var idx = 0; idx < allAudioTags.length; idx++) {
        if (idx % 20 === 0) {
          row += 1;
        }

        allAudioTags[idx].setAttribute("src", octaveFilePaths[row].filePath);
        allAudioTags[idx].dataset.pianoidx = octaveFilePaths[row].idx;
      }

      var sharpFlatTags = document.getElementsByClassName('sharp-flat');

      for (var _idx = 0; _idx < sharpFlatTags.length; _idx++) {
        sharpFlatTags[_idx].textContent = " ";
      }
    }
  }, {
    key: "changeSignature",
    value: function changeSignature(event) {
      if (typeof event.target.dataset.idx === 'undefined') {
        return;
      }

      var row = event.target.dataset.idx;
      var rowAudioTags = document.getElementsByClassName("audioRow".concat(row));

      if (event.target.textContent === " ") {
        event.target.textContent = "#";

        for (var i = 0; i < rowAudioTags.length; i++) {
          var pianoIdx = parseInt(rowAudioTags[i].dataset.pianoidx);
          rowAudioTags[i].setAttribute('src', _piano_filepaths_js__WEBPACK_IMPORTED_MODULE_0__["PIANO_PATHS"][pianoIdx + 1]);
          rowAudioTags[i].dataset.pianoidx = pianoIdx + 1;
        }
      } else if (event.target.textContent === "#") {
        event.target.textContent = "b";

        for (var _i = 0; _i < rowAudioTags.length; _i++) {
          var _pianoIdx = parseInt(rowAudioTags[_i].dataset.pianoidx);

          if (_pianoIdx > 1) {
            rowAudioTags[_i].setAttribute('src', _piano_filepaths_js__WEBPACK_IMPORTED_MODULE_0__["PIANO_PATHS"][_pianoIdx - 2]);

            rowAudioTags[_i].dataset.pianoidx = _pianoIdx - 2;
          }
        }
      } else {
        event.target.textContent = " ";

        for (var _i2 = 0; _i2 < rowAudioTags.length; _i2++) {
          var _pianoIdx2 = parseInt(rowAudioTags[_i2].dataset.pianoidx);

          rowAudioTags[_i2].setAttribute("src", _piano_filepaths_js__WEBPACK_IMPORTED_MODULE_0__["PIANO_PATHS"][_pianoIdx2 + 1]);

          rowAudioTags[_i2].dataset.pianoidx = _pianoIdx2 + 1;
        }
      }
    }
  }, {
    key: "changeColorScheme",
    value: function changeColorScheme(event, sequencer, colorScheme) {
      var colorListItems = document.getElementsByClassName('color-list-item');

      for (var i = 0; i < colorListItems.length; i++) {
        if (colorListItems[i] === event.target) {
          event.target.classList.add('selected');
        } else {
          colorListItems[i].classList.remove('selected');
        }
      }

      var newColorScheme;

      if (colorScheme) {
        newColorScheme = colorScheme;
      } else {
        newColorScheme = event.target.textContent;
      }

      sequencer.changeColor(newColorScheme);
    }
  }, {
    key: "setPreset",
    value: function setPreset(event, sequencer) {
      var presetListItems = document.getElementsByClassName('preset-list-item');

      for (var i = 0; i < presetListItems.length; i++) {
        if (presetListItems[i] === event.target) {
          event.target.classList.add('selected');
        } else {
          presetListItems[i].classList.remove('selected');
        }
      }

      var presetName = event.target.textContent;
      var preset = PRESETS[presetName];
      sequencer.untoggleAllSquares();
      preset.squareIndices.forEach(function (squareIdx) {
        sequencer.toggleSquareAtPos(null, null, squareIdx);
      });
    }
  }, {
    key: "setStyle",
    value: function setStyle(event, sequencer) {
      var styleListItems = document.getElementsByClassName('style-list-item');

      for (var i = 0; i < styleListItems.length; i++) {
        if (styleListItems[i] === event.target) {
          event.target.classList.add('selected');
        } else {
          styleListItems[i].classList.remove('selected');
        }
      }

      var style = event.target.textContent;
      sequencer.changeStyle(style);
    }
  }]);

  return Util;
}();

/* harmony default export */ __webpack_exports__["default"] = (Util);

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
/* harmony import */ var _javascripts_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascripts/util.js */ "./javascripts/util.js");


document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas");
  var styles = document.getElementById('styles');
  var colors = document.getElementById('colors');
  var presets = document.getElementById('presets'); // const octaves = document.getElementById('octaves');

  var sharpFlats = document.getElementById('sharp-flats');
  var plus = document.getElementById('plus');
  var minus = document.getElementById('minus');
  canvas.width = 1000;
  canvas.height = 500;
  var ctx = canvas.getContext("2d");
  var sequencer = new _javascripts_sequencer_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  var util = new _javascripts_util_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  sequencer.draw(ctx);
  canvas.addEventListener('click', function (event) {
    return sequencer.toggleSquareAtPos(canvas, event);
  });
  colors.addEventListener('click', function (event) {
    return util.changeColorScheme(event, sequencer);
  });
  presets.addEventListener('click', function (event) {
    return util.setPreset(event, sequencer);
  });
  styles.addEventListener('click', function (event) {
    return util.setStyle(event, sequencer);
  }); // octaves.addEventListener('click', (event) => util.changeOctave(event));

  sharpFlats.addEventListener('click', function (event) {
    return util.changeSignature(event);
  });
  plus.addEventListener('click', function () {
    var tempoTag = document.getElementById('bpm-display');
    var currentTempo = parseInt(tempoTag.textContent.split(' ')[0]);
    var newTextVal = currentTempo + 5;
    sequencer.changeBpm(currentTempo + 5, newTextVal);
  });
  minus.addEventListener("click", function () {
    var tempoTag = document.getElementById("bpm-display");
    var currentTempo = parseInt(tempoTag.textContent.split(" ")[0]);
    var newTextVal = currentTempo - 5;
    sequencer.changeBpm(currentTempo - 5, newTextVal);
  });
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map