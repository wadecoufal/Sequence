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


class Sequencer {
  constructor(ctx, audioCtx) {
    this.squares = [];
    this.addSquares();
    this.ctx = ctx;
    this.audioCtx = audioCtx;
    this.currentColumn = 0;
    this.startSequence();
  }

  startSequence() {
    setInterval( () => {
      this.triggerSquares(this.currentColumn);
      this.currentColumn = (this.currentColumn + 1) % 10;
    }, 200);
  }

  triggerSquares(column) {
    console.log('COLUMN: ', column);
    const squareIndices = [];
    while (squareIndices.length < 10) {
      squareIndices.push(this.squares[column]);
      column += 10;
    }
    console.log('INDICES: ', squareIndices);
    squareIndices.forEach(squareIndex => {
      squareIndex.soundNote();
      squareIndex.draw(this.ctx);
    })
  }

  addSquares() {
    let x = 0;
    let y = 0;
    let row = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let newSquareIndex = this.squares.length;
        this.squares.push(new Square(x, y, NOTES[row], newSquareIndex));
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