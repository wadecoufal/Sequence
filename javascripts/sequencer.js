import Square from './square.js'

const NOTES = {
  0: "./assets/sound_files/glock_d1.wav",
  1: "./assets/sound_files/glock_e1.wav",
  2: "./assets/sound_files/glock_f1.wav",
  3: "./assets/sound_files/glock_g1.wav",
  4: "./assets/sound_files/glock_a2.wav",
  5: "./assets/sound_files/glock_b2.wav",
  6: './assets/sound_files/glock_c2.wav',
  7: './assets/sound_files/glock_cs2.wav',
  8: './assets/sound_files/glock_d2.wav',
  9: './assets/sound_files/glock_e2.wav',
};

const MARIMBA = {
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

// const COLORS = [
//   "#ff70b2",
//   "#ff6394",
//   "#ff4f75",
//   "#ff3a4b",
//   "#ff2134",
//   "#e5091c"
// ];



class Sequencer {
  constructor(ctx, audioCtx) {
    this.squares = [];
    this.addSquares();
    this.ctx = ctx;
    this.audioCtx = audioCtx;
    this.currentColumn = 0;
    this.currentColorIdx = 0;

    this.red = {value: 150, dir: 'desc'};
    this.blue = {value: 50, dir: 'desc'};
    this.green = {value: 25, dir: 'asc'};

    this.startSequence();
  }

  startSequence() {
    setInterval( () => {
      this.triggerSquares(this.currentColumn);
      this.currentColumn = (this.currentColumn + 1) % 10;
    }, 200);
  }

  triggerSquares(column) {
    const squareIndices = [];
    while (squareIndices.length < 10) {
      squareIndices.push(this.squares[column]);
      column += 10;
    }
    // const currentColor = COLORS[this.currentColorIdx];

    const currentColor = `rgb(${this.red.value}, ${this.blue.value}, ${this.green.value})`
    squareIndices.forEach(squareIndex => {
      squareIndex.soundNote(currentColor);
      squareIndex.draw(this.ctx);
    })
    // this.currentColorIdx = (this.currentColorIdx + 1) % 6;

    this.updateCurrentColor();
  }

  updateCurrentColor() {
    this.red = this.updateColorValue(this.red);
    this.blue = this.updateColorValue(this.blue);
    this.green = this.updateColorValue(this.green);
  }

  updateColorValue(color) {
    let newColor = {dir: color.dir, value: color.value};
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

  addSquares() {
    let x = 0;
    let y = 0;
    let row = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let newSquareIndex = this.squares.length;
        this.squares.push(new Square(x, y, MARIMBA[row], newSquareIndex));
        x += 50;
      }
      x = 0;
      y += 50;
      row += 1
    }
  }

  draw(ctx) {
    this.squares.forEach(square => {
      square.draw(ctx);
    });
  }

  getCursorPos(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return {x, y};
  }

  toggleSquareAtPos(canvas, event) {
    const {x, y} = this.getCursorPos(canvas, event);
    const squareIdx = this.squareIndexAtPos(x, y);
    this.squares[squareIdx].toggle();
    this.squares[squareIdx].draw(this.ctx);
  }

  squareIndexAtPos(x, y) {
    const xIdx = Math.floor(x / 50);
    const yIdx = Math.floor(y / 50) * 10;
    return xIdx + yIdx;
  }

}

export default Sequencer;