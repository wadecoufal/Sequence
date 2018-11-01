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

 // const COLORS = [
//   "#ff70b2",
//   "#ff6394",
//   "#ff4f75",
//   "#ff3a4b",
//   "#ff2134",
//   "#e5091c"
// ];

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
};
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
      value: 0,
      dir: "desc",
      changeVal: 4
    },
    'green': {
      value: 0,
      dir: "asc",
      changeVal: 4
    },
    'blue': {
      value: 0,
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
    key: "changeColor",
    value: function changeColor(colorScheme) {
      this.red = COLOR_SCHEMES[colorScheme].red;
      this.green = COLOR_SCHEMES[colorScheme].green;
      this.blue = COLOR_SCHEMES[colorScheme].blue;
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
        // create audio here and apply to all j squares
        // const audio = this.createAudioTag(MARIMBA[row]);
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
    this.index = index; // this.audio = filepath;
    // set audio in sequencer (10 instead of 100)

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

/***/ "./javascripts/util.js":
/*!*****************************!*\
  !*** ./javascripts/util.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var INSTRUMENTS = {
  'Marimba': {
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
  },
  'Glockenspiel': {
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
  }
};

var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, [{
    key: "changeInstrument",
    value: function changeInstrument(event) {
      var allAudioTags = document.getElementsByTagName('audio');
      var instrumentName = event.target.textContent;
      var instrumentFilePaths = INSTRUMENTS[instrumentName];
      var row = -1;
      var volume;

      if (instrumentName === 'Marimba') {
        volume = 1.0;
      } else {
        volume = 0.1;
      }

      for (var idx = 0; idx < allAudioTags.length; idx++) {
        if (idx % 10 === 0) {
          row += 1;
        }

        allAudioTags[idx].setAttribute("src", instrumentFilePaths[row]);
        console.log('volume', volume);
        allAudioTags[idx].volume = volume;
        console.log('audioTag', allAudioTags[idx]);
      }
    }
  }, {
    key: "changeColorScheme",
    value: function changeColorScheme(event, sequencer) {
      sequencer.changeColor(event.target.textContent);
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
  console.log('111');
  var canvas = document.getElementById("canvas");
  var colors = document.getElementById('colors');
  var instruments = document.getElementById('instruments');
  canvas.width = 500;
  canvas.height = 500;
  var ctx = canvas.getContext("2d");
  var sequencer = new _javascripts_sequencer_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  var util = new _javascripts_util_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  sequencer.draw(ctx);
  canvas.addEventListener('click', function (event) {
    return sequencer.toggleSquareAtPos(canvas, event);
  });
  instruments.addEventListener('click', function (event) {
    return util.changeInstrument(event);
  });
  colors.addEventListener('click', function (event) {
    return util.changeColorScheme(event, sequencer);
  });
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map