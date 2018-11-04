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

/***/ "./javascripts/circle.js":
/*!*******************************!*\
  !*** ./javascripts/circle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle =
/*#__PURE__*/
function () {
  function Circle(x, y, radius, color, tempo) {
    _classCallCheck(this, Circle);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.xDir = 'left';
    this.yDir = 'down';
    this.speed = tempo / 100;
  }

  _createClass(Circle, [{
    key: "move",
    value: function move() {
      if (this.x > 500) {
        this.xDir = 'left';
      } else if (this.x < 0) {
        this.xDir = 'right';
      }

      if (this.y > 500) {
        this.yDir = "up";
      } else if (this.x < 0) {
        this.yDir = "down";
      }

      if (this.xDir === 'left') {
        this.x = this.x - this.speed;
      } else if (this.xDir === 'right') {
        this.x = this.x + this.speed;
      }

      if (this.yDir === 'up') {
        this.y = this.y - this.speed;
      } else if (this.yDir === 'down') {
        this.y = this.y + this.speed;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fill();
    }
  }]);

  return Circle;
}();

/* harmony default export */ __webpack_exports__["default"] = (Circle);

/***/ }),

/***/ "./javascripts/piano_filepaths.js":
/*!****************************************!*\
  !*** ./javascripts/piano_filepaths.js ***!
  \****************************************/
/*! exports provided: PIANO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIANO", function() { return PIANO; });
var PIANO = {
  0: {
    0: {
      filePath: "./assets/sound_files/piano/C1.wav",
      idx: 0
    },
    1: {
      filePath: "./assets/sound_files/piano/D1.wav",
      idx: 2
    },
    2: {
      filePath: "./assets/sound_files/piano/E1.wav",
      idx: 4
    },
    3: {
      filePath: "./assets/sound_files/piano/F1.wav",
      idx: 5
    },
    4: {
      filePath: "./assets/sound_files/piano/G1.wav",
      idx: 7
    },
    5: {
      filePath: "./assets/sound_files/piano/A1.wav",
      idx: 9
    },
    6: {
      filePath: "./assets/sound_files/piano/B1.wav",
      idx: 11
    },
    7: {
      filePath: "./assets/sound_files/piano/C2.wav",
      idx: 12
    },
    8: {
      filePath: "./assets/sound_files/piano/D2.wav",
      idx: 14
    },
    9: {
      filePath: "./assets/sound_files/piano/E2.wav",
      idx: 16
    }
  },
  1: {
    0: {
      filePath: "./assets/sound_files/piano/C2.wav",
      idx: 12
    },
    1: {
      filePath: "./assets/sound_files/piano/D2.wav",
      idx: 14
    },
    2: {
      filePath: "./assets/sound_files/piano/E2.wav",
      idx: 16
    },
    3: {
      filePath: "./assets/sound_files/piano/F2.wav",
      idx: 17
    },
    4: {
      filePath: "./assets/sound_files/piano/G2.wav",
      idx: 19
    },
    5: {
      filePath: "./assets/sound_files/piano/A2.wav",
      idx: 21
    },
    6: {
      filePath: "./assets/sound_files/piano/B2.wav",
      idx: 23
    },
    7: {
      filePath: "./assets/sound_files/piano/C3.wav",
      idx: 24
    },
    8: {
      filePath: "./assets/sound_files/piano/D3.wav",
      idx: 26
    },
    9: {
      filePath: "./assets/sound_files/piano/E3.wav",
      idx: 28
    }
  },
  2: {
    0: {
      filePath: "./assets/sound_files/piano/C3.wav",
      idx: 24
    },
    1: {
      filePath: "./assets/sound_files/piano/D3.wav",
      idx: 26
    },
    2: {
      filePath: "./assets/sound_files/piano/E3.wav",
      idx: 28
    },
    3: {
      filePath: "./assets/sound_files/piano/F3.wav",
      idx: 29
    },
    4: {
      filePath: "./assets/sound_files/piano/G3.wav",
      idx: 31
    },
    5: {
      filePath: "./assets/sound_files/piano/A3.wav",
      idx: 33
    },
    6: {
      filePath: "./assets/sound_files/piano/B3.wav",
      idx: 35
    },
    7: {
      filePath: "./assets/sound_files/piano/C4.wav",
      idx: 36
    },
    8: {
      filePath: "./assets/sound_files/piano/D4.wav",
      idx: 38
    },
    9: {
      filePath: "./assets/sound_files/piano/E4.wav",
      idx: 40
    }
  },
  3: {
    0: {
      filePath: "./assets/sound_files/piano/C4.wav",
      idx: 36
    },
    1: {
      filePath: "./assets/sound_files/piano/D4.wav",
      idx: 38
    },
    2: {
      filePath: "./assets/sound_files/piano/E4.wav",
      idx: 40
    },
    3: {
      filePath: "./assets/sound_files/piano/F4.wav",
      idx: 41
    },
    4: {
      filePath: "./assets/sound_files/piano/G4.wav",
      idx: 43
    },
    5: {
      filePath: "./assets/sound_files/piano/A4.wav",
      idx: 45
    },
    6: {
      filePath: "./assets/sound_files/piano/B4.wav",
      idx: 47
    },
    7: {
      filePath: "./assets/sound_files/piano/C5.wav",
      idx: 48
    },
    8: {
      filePath: "./assets/sound_files/piano/D5.wav",
      idx: 50
    },
    9: {
      filePath: "./assets/sound_files/piano/E5.wav",
      idx: 52
    }
  },
  4: {
    0: {
      filePath: "./assets/sound_files/piano/C5.wav",
      idx: 48
    },
    1: {
      filePath: "./assets/sound_files/piano/D5.wav",
      idx: 50
    },
    2: {
      filePath: "./assets/sound_files/piano/E5.wav",
      idx: 52
    },
    3: {
      filePath: "./assets/sound_files/piano/F5.wav",
      idx: 53
    },
    4: {
      filePath: "./assets/sound_files/piano/G5.wav",
      idx: 55
    },
    5: {
      filePath: "./assets/sound_files/piano/A5.wav",
      idx: 57
    },
    6: {
      filePath: "./assets/sound_files/piano/B5.wav",
      idx: 59
    },
    7: {
      filePath: "./assets/sound_files/piano/C6.wav",
      idx: 60
    },
    8: {
      filePath: "./assets/sound_files/piano/D6.wav",
      idx: 62
    },
    9: {
      filePath: "./assets/sound_files/piano/E6.wav",
      idx: 64
    }
  },
  5: {
    0: {
      filePath: "./assets/sound_files/piano/C6.wav",
      idx: 60
    },
    1: {
      filePath: "./assets/sound_files/piano/D6.wav",
      idx: 62
    },
    2: {
      filePath: "./assets/sound_files/piano/E6.wav",
      idx: 64
    },
    3: {
      filePath: "./assets/sound_files/piano/F6.wav",
      idx: 65
    },
    4: {
      filePath: "./assets/sound_files/piano/G6.wav",
      idx: 67
    },
    5: {
      filePath: "./assets/sound_files/piano/A6.wav",
      idx: 69
    },
    6: {
      filePath: "./assets/sound_files/piano/B6.wav",
      idx: 71
    },
    7: {
      filePath: "./assets/sound_files/piano/C7.wav",
      idx: 72
    },
    8: {
      filePath: "./assets/sound_files/piano/D7.wav",
      idx: 74
    },
    9: {
      filePath: "./assets/sound_files/piano/E7.wav",
      idx: 76
    }
  }
};
var PIANO_PATHS = {
  0: "./assets/sound_files/piano/C1.wav",
  1: "./assets/sound_files/piano/DB1.wav",
  2: "./assets/sound_files/piano/D1.wav",
  3: "./assets/sound_files/piano/EB1.wav",
  4: "./assets/sound_files/piano/E1.wav",
  5: "./assets/sound_files/piano/F1.wav",
  6: "./assets/sound_files/piano/GB1.wav",
  7: "./assets/sound_files/piano/G1.wav",
  8: "./assets/sound_files/piano/AB1.wav",
  9: "./assets/sound_files/piano/A1.wav",
  10: "./assets/sound_files/piano/BB1.wav",
  11: "./assets/sound_files/piano/B1.wav",
  12: "./assets/sound_files/piano/C2.wav",
  13: "./assets/sound_files/piano/DB2.wav",
  14: "./assets/sound_files/piano/D2.wav",
  15: "./assets/sound_files/piano/EB2.wav",
  16: "./assets/sound_files/piano/E2.wav",
  17: "./assets/sound_files/piano/F2.wav",
  18: "./assets/sound_files/piano/GB2.wav",
  19: "./assets/sound_files/piano/G2.wav",
  20: "./assets/sound_files/piano/AB2.wav",
  21: "./assets/sound_files/piano/A2.wav",
  22: "./assets/sound_files/piano/BB2.wav",
  23: "./assets/sound_files/piano/B2.wav",
  24: "./assets/sound_files/piano/C3.wav",
  25: "./assets/sound_files/piano/DB3.wav",
  26: "./assets/sound_files/piano/D3.wav",
  27: "./assets/sound_files/piano/EB3.wav",
  28: "./assets/sound_files/piano/E3.wav",
  29: "./assets/sound_files/piano/F3.wav",
  30: "./assets/sound_files/piano/GB3.wav",
  31: "./assets/sound_files/piano/G3.wav",
  32: "./assets/sound_files/piano/AB3.wav",
  33: "./assets/sound_files/piano/A3.wav",
  34: "./assets/sound_files/piano/BB3.wav",
  35: "./assets/sound_files/piano/B3.wav",
  36: "./assets/sound_files/piano/C4.wav",
  37: "./assets/sound_files/piano/DB4.wav",
  38: "./assets/sound_files/piano/D4.wav",
  39: "./assets/sound_files/piano/EB4.wav",
  40: "./assets/sound_files/piano/E4.wav",
  41: "./assets/sound_files/piano/F4.wav",
  42: "./assets/sound_files/piano/GB4.wav",
  43: "./assets/sound_files/piano/G4.wav",
  44: "./assets/sound_files/piano/AB4.wav",
  45: "./assets/sound_files/piano/A4.wav",
  46: "./assets/sound_files/piano/BB4.wav",
  47: "./assets/sound_files/piano/B4.wav",
  48: "./assets/sound_files/piano/C5.wav",
  49: "./assets/sound_files/piano/DB5.wav",
  50: "./assets/sound_files/piano/D5.wav",
  51: "./assets/sound_files/piano/EB5.wav",
  52: "./assets/sound_files/piano/E5.wav",
  53: "./assets/sound_files/piano/F5.wav",
  54: "./assets/sound_files/piano/GB5.wav",
  55: "./assets/sound_files/piano/G5.wav",
  56: "./assets/sound_files/piano/AB5.wav",
  57: "./assets/sound_files/piano/A5.wav",
  58: "./assets/sound_files/piano/BB5.wav",
  59: "./assets/sound_files/piano/B5.wav",
  60: "./assets/sound_files/piano/C6.wav",
  61: "./assets/sound_files/piano/DB6.wav",
  62: "./assets/sound_files/piano/D6.wav",
  63: "./assets/sound_files/piano/EB6.wav",
  64: "./assets/sound_files/piano/E6.wav",
  65: "./assets/sound_files/piano/F6.wav",
  66: "./assets/sound_files/piano/GB6.wav",
  67: "./assets/sound_files/piano/G6.wav",
  68: "./assets/sound_files/piano/AB6.wav",
  69: "./assets/sound_files/piano/A6.wav",
  70: "./assets/sound_files/piano/BB6.wav",
  71: "./assets/sound_files/piano/B6.wav",
  72: "./assets/sound_files/piano/C7.wav",
  73: "./assets/sound_files/piano/DB7.wav",
  74: "./assets/sound_files/piano/D7.wav",
  75: "./assets/sound_files/piano/EB7.wav",
  76: "./assets/sound_files/piano/E7.wav",
  77: "./assets/sound_files/piano/F7.wav"
};

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
  'Blue': {
    'red': {
      value: 0,
      dir: "desc",
      changeVal: 0
    },
    'green': {
      value: 0,
      dir: "asc",
      changeVal: 4
    },
    'blue': {
      value: 70,
      dir: "desc",
      changeVal: 4
    }
  }
};

var Sequencer =
/*#__PURE__*/
function () {
  function Sequencer(ctx, visualizer) {
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
      console.log('IN SEQUENCER CHANGE STYLE', style);
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
        for (var j = 0; j < 20; j++) {
          var newSquareIndex = this.squares.length;
          this.squares.push(new _square_js__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, _piano_filepaths_js__WEBPACK_IMPORTED_MODULE_1__["PIANO"][1][row].filePath, _piano_filepaths_js__WEBPACK_IMPORTED_MODULE_1__["PIANO"][1][row].idx, newSquareIndex));
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
  function Square(x, y, filepath, pianoIdx, index) {
    _classCallCheck(this, Square);

    this.x = x;
    this.y = y;
    this.color = "rgb(0, 0, 0)";
    this.newColor = "rgb(0, 0, 0)";
    this.toggled = false;
    this.index = index; // this.audio = filepath;
    // set audio in sequencer (10 instead of 100)

    this.audio = document.createElement("audio");
    this.audio.setAttribute("src", filepath);
    this.audio.setAttribute("id", index);
    this.audio.setAttribute("type", "audio/wav");
    this.audio.setAttribute("class", "audioRow".concat(Math.floor(index / 20)));
    this.audio.setAttribute("data-pianoIdx", pianoIdx);
    document.body.appendChild(this.audio);
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

/***/ "./javascripts/squares.js":
/*!********************************!*\
  !*** ./javascripts/squares.js ***!
  \********************************/
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
  function Square(x, y, width, color, idx) {
    _classCallCheck(this, Square);

    this.x = Math.floor(Math.random() * 500 + 1);
    this.y = 0;
    this.idx = idx;
    this.width = width;
    this.color = color;
    this.acc = 1.05;
    this.velocity = 2;
  }

  _createClass(Square, [{
    key: "move",
    value: function move() {
      this.y += this.velocity;
      this.velocity *= this.acc;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.width);
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

// const INSTRUMENTS = {
//   'Marimba': {
//     6: "./assets/sound_files/marimba/mar_b3.wav",
//     9: "./assets/sound_files/marimba/mar_c3.wav",
//     8: "./assets/sound_files/marimba/mar_e3.wav",
//     7: "./assets/sound_files/marimba/mar_g3.wav",
//     3: "./assets/sound_files/marimba/mar_a4.wav",
//     5: "./assets/sound_files/marimba/mar_d4.wav",
//     4: "./assets/sound_files/marimba/mar_f4.wav",
//     0: "./assets/sound_files/marimba/mar_b5.wav",
//     2: "./assets/sound_files/marimba/mar_c5.wav",
//     1: "./assets/sound_files/marimba/mar_e5.wav"
//   },
//   'Glockenspiel': {
//     0: "./assets/sound_files/glock_d1.wav",
//     1: "./assets/sound_files/glock_e1.wav",
//     2: "./assets/sound_files/glock_f1.wav",
//     3: "./assets/sound_files/glock_g1.wav",
//     4: "./assets/sound_files/glock_a2.wav",
//     5: "./assets/sound_files/glock_b2.wav",
//     6: './assets/sound_files/glock_c2.wav',
//     7: './assets/sound_files/glock_cs2.wav',
//     8: './assets/sound_files/glock_d2.wav',
//     9: './assets/sound_files/glock_e2.wav',
//   }
// }

var PRESETS = {
  'Preset 1': {
    bpm: 60,
    instrument: 'Glockenspiel',
    squareIndices: [0, 99],
    colorScheme: 'Muted'
  },
  'Preset 2': {
    bpm: 120,
    instrument: 'Marimba',
    squareIndices: [1, 2, 3, 4, 5, 6],
    colorScheme: 'Blue'
  },
  'Preset 3': {
    bpm: 180,
    instrument: 'Glockenspiel',
    squareIndices: [22, 33, 43, 77],
    colorScheme: 'Colorful'
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
    value: function changeOctave(event) {
      var allAudioTags = document.getElementsByTagName('audio');
      var octaveTag = document.getElementById('octave-display');
      var newOctaveValue = (parseInt(octaveTag.textContent) + 1) % 6;
      octaveTag.textContent = "".concat(newOctaveValue);
      var octaveFilePaths = _piano_filepaths_js__WEBPACK_IMPORTED_MODULE_0__["PIANO"][newOctaveValue];
      var row = -1;

      for (var idx = 0; idx < allAudioTags.length; idx++) {
        if (idx % 20 === 0) {
          row += 1;
        }

        allAudioTags[idx].setAttribute("src", octaveFilePaths[row].filePath);
      }
    }
  }, {
    key: "changeSignature",
    value: function changeSignature(event) {
      console.log('changeSig', event);
      var row = event.target.dataset.idx;
      var rowAudioTags = document.getElementsByClassName("audioRow".concat(row));

      if (event.target.textContent === " ") {
        event.target.textContent = "#";
      } else if (event.target.textContent === "#") {
        event.target.textContent = "b";
      } else {
        event.target.textContent = " ";
      }
    }
  }, {
    key: "changeColorScheme",
    value: function changeColorScheme(event, sequencer, colorScheme) {
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
      var presetName = event.target.textContent;
      var preset = PRESETS[presetName];
      this.changeColorScheme(null, sequencer, preset.colorScheme);
      this.changeInstrument(null, preset.instrument);
      var newTempo = Math.floor(60000 / preset.bpm);
      sequencer.changeBpm(newTempo, preset.bpm);
      sequencer.untoggleAllSquares();
      preset.squareIndices.forEach(function (squareIdx) {
        sequencer.toggleSquareAtPos(null, null, squareIdx);
      });
    }
  }, {
    key: "setStyle",
    value: function setStyle(event, sequencer) {
      console.log('IN UTIL');
      console.log('event', event.target.textContent);
      var style = event.target.textContent;
      sequencer.changeStyle(style);
    }
  }, {
    key: "createRandomPreset",
    value: function createRandomPreset() {// const preset;
      // preset.instrument = Math.floor(Math.random() * INSTRUMENTS.length)
    }
  }]);

  return Util;
}();

/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ }),

/***/ "./javascripts/visualizer.js":
/*!***********************************!*\
  !*** ./javascripts/visualizer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _circle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circle.js */ "./javascripts/circle.js");
/* harmony import */ var _squares_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squares.js */ "./javascripts/squares.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Visualizer =
/*#__PURE__*/
function () {
  function Visualizer(ctx2) {
    _classCallCheck(this, Visualizer);

    this.ctx = ctx2;
    this.circles = {};
    this.squares = {};
    this.type = 'square';
  }

  _createClass(Visualizer, [{
    key: "addSquare",
    value: function addSquare(x, y, width, color) {
      var square = new _squares_js__WEBPACK_IMPORTED_MODULE_1__["default"](x, y, width, color);
      this.squares[this.squares.length] = square;
    }
  }, {
    key: "addCircle",
    value: function addCircle(color, radius, idx, tempo) {
      var circle = new _circle_js__WEBPACK_IMPORTED_MODULE_0__["default"](Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), radius, color, tempo);
      this.circles[idx] = circle;
    }
  }, {
    key: "deleteCircle",
    value: function deleteCircle(idx) {
      delete this.circles[idx];
      console.log(this.circles);
    }
  }, {
    key: "moveCircles",
    value: function moveCircles() {
      Object.values(this.circles).forEach(function (circle) {
        circle.move();
      });
    }
  }, {
    key: "moveSquares",
    value: function moveSquares() {
      var _this = this;

      Object.values(this.squares).forEach(function (square, idx) {
        square.move();

        if (square.y > 550 || square.x > 550) {
          delete _this.squares[square];
          console.log(_this.squares);
        }
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      var animateCallback = function animateCallback() {
        _this2.ctx.clearRect(0, 0, 500, 500);

        if (_this2.type === 'square') {
          _this2.renderSquares();
        } else if (_this2.type === 'circle') {
          _this2.renderCircles();
        }

        requestAnimationFrame(animateCallback);
      };

      animateCallback();
    }
  }, {
    key: "renderCircles",
    value: function renderCircles() {
      var _this3 = this;

      Object.values(this.circles).forEach(function (circle) {
        circle.draw(_this3.ctx);
      });
      this.moveCircles();
    }
  }, {
    key: "renderSquares",
    value: function renderSquares() {
      var _this4 = this;

      Object.values(this.squares).forEach(function (square) {
        square.draw(_this4.ctx);
      });
      this.moveSquares();
    }
  }, {
    key: "changeSpeed",
    value: function changeSpeed(newTempo) {
      Object.values(this.circles).forEach(function (circle) {
        circle.speed = newTempo / 100;
      });
    }
  }]);

  return Visualizer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Visualizer);

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
/* harmony import */ var _javascripts_visualizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascripts/visualizer.js */ "./javascripts/visualizer.js");
/* harmony import */ var _javascripts_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascripts/util.js */ "./javascripts/util.js");



document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas");
  var styles = document.getElementById('styles');
  var colors = document.getElementById('colors');
  var presets = document.getElementById('presets');
  var octaves = document.getElementById('octaves');
  var sharpFlats = document.getElementById('sharp-flats');
  var plus = document.getElementById('plus');
  var minus = document.getElementById('minus'); // const octaveMinus = document.getElementById('octave-minus');
  // const octavePlus = document.getElementById('octave-plus');

  canvas.width = 1000;
  canvas.height = 500;
  var ctx = canvas.getContext("2d");
  var sequencer = new _javascripts_sequencer_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  var util = new _javascripts_util_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  sequencer.draw(ctx);
  canvas.addEventListener('click', function (event) {
    return sequencer.toggleSquareAtPos(canvas, event);
  }); // colors.addEventListener('click', (event) => util.changeColorScheme(event, sequencer));
  // presets.addEventListener('click', (event) => util.setPreset(event, sequencer));
  // styles.addEventListener('click', (event) => util.setStyle(event, sequencer));

  octaves.addEventListener('click', function (event) {
    return util.changeOctave(event);
  });
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