import Square from './square.js';
import { PIANO } from './piano_filepaths.js';

const COLOR_SCHEMES = {
  'Colorful': {
    'red': { value: 150, dir: "desc", changeVal: 4 },
    'green': { value: 25, dir: "asc", changeVal: 4 },
    'blue': { value: 50, dir: "desc", changeVal: 4 }
  },
  'Muted': {
    'red': { value: 50, dir: "desc", changeVal: 4 },
    'green': { value: 50, dir: "desc", changeVal: 4 },
    'blue': { value: 50, dir: "desc", changeVal: 4 }
  },
  'Aqua': {
    'red': { value: 0, dir: "desc", changeVal: 0 },
    'blue': { value: 0, dir: "desc", changeVal: 4 },
    'green': { value: 70, dir: "asc", changeVal: 4 }
  }
};

class Sequencer {
  constructor(ctx) {
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

  startSequence() {
    return setInterval( () => {
      this.triggerSquares(this.currentColumn);
      this.currentColumn = (this.currentColumn + 1) % 20;
    }, this.tempoMs);
  }

  resetSequence() {
    clearInterval(this.sequencing);
    this.currentColumn = 0;
    this.sequencing = setInterval(() => {
      this.triggerSquares(this.currentColumn);
      this.currentColumn = (this.currentColumn + 1) % 20;
    }, this.tempoMs);
  }

  changeBpm(newTempo, newTextVal) {
    document.getElementById('bpm-display').textContent = `${newTextVal} BPM`;

    clearInterval(this.sequencing);
    this.currentColumn = 0;
    this.tempo = newTempo;
    this.tempoMs = 60000 / this.tempo;

    this.sequencing = setInterval( () => {
      this.triggerSquares(this.currentColumn);
      this.currentColumn = (this.currentColumn + 1) % 20;
    }, this.tempoMs);
  }

  changeColor(colorScheme) {
    this.red = COLOR_SCHEMES[colorScheme].red;
    this.green = COLOR_SCHEMES[colorScheme].green;
    this.blue = COLOR_SCHEMES[colorScheme].blue;
  }

  changeStyle(style) {
    console.log('IN SEQUENCER CHANGE STYLE', style);
    this.style = style;
  }

  triggerSquares(column) {
    const squareIndices = [];
    while (squareIndices.length < 10) {
      squareIndices.push(this.squares[column]);
      column += 20;
    }

    const currentColor = `rgb(${this.red.value}, ${this.blue.value}, ${this.green.value})`
    squareIndices.forEach(squareIndex => {
      squareIndex.soundNote(currentColor, this.ctx);
      squareIndex.draw(this.ctx, this.style);
    })

    this.updateCurrentColor();
  }

  updateCurrentColor() {
    this.red = this.updateColorValue(this.red);
    this.blue = this.updateColorValue(this.blue);
    this.green = this.updateColorValue(this.green);
  }

  updateColorValue(color) {
    let newColor = {dir: color.dir, value: color.value, changeVal: color.changeVal};
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

  addSquares() {
    let x = 0;
    let y = 0;
    let row = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 20; j++) {
        let newSquareIndex = this.squares.length;
        this.squares.push(new Square(
          x, 
          y, 
          PIANO[4][row].filePath, 
          PIANO[4][row].idx,
          newSquareIndex));
        x += 50;
      }
      x = 0;
      y += 50;
      row += 1
    }
  }

  createAudioTag(audioFilePath) {
    const audio = document.createElement('audio');
    audio.setAttribute('src', audioFilePath);
    audio.setAttribute('type', 'audio/wav');
    document.body.appendChild(audio);
    return audio;
  }

  draw(ctx) {
    this.squares.forEach(square => {
      square.draw(ctx, this.style);
    });
  }

  getCursorPos(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return {x, y};
  }

  presetConfig(presetIndices) {
    const canvas = document.getElementById("canvas");
    presetIndices.forEach( idx => {
      this.toggleSquareAtPos(canvas, null, idx);
    })
  }

  untoggleAllSquares() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.squares.forEach( square => {
      if (square.toggled) {
        square.toggle();
      }
    })
  }

  toggleSquareAtPos(canvas, event, idx) {
    if (idx >= 0) {
      this.squares[idx].toggle();
      this.squares[idx].draw(this.ctx);
      return;
    }

    const {x, y} = this.getCursorPos(canvas, event);
    const squareIdx = this.squareIndexAtPos(x, y);
    console.log('idx', squareIdx);
    const square = this.squares[squareIdx];

    square.toggle();
    square.draw(this.ctx, this.style);
  }

  squareIndexAtPos(x, y) {
    const xIdx = Math.floor(x / 50);
    const yIdx = Math.floor(y / 50) * 20;
    return xIdx + yIdx;
  }

}

export default Sequencer;