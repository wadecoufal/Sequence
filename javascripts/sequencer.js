import Square from './square.js'

const NOTES = {

}


class Sequencer {
  constructor(ctx, audioCtx) {
    this.squares = [];
    this.addSquares();
    this.ctx = ctx;
    this.audioCtx = audioCtx;
  }

  addSquares() {
    let x = 0;
    let y = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.squares.push(new Square(x, y));
        x += 50;
      }
      x = 0;
      y += 50;
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
    console.log('x', x, 'y', y)
    const squareIdx = this.squareIndexAtPos(x, y);
    console.log(squareIdx)
    this.squares[squareIdx].toggleColor();
    this.squares[squareIdx].draw(this.ctx);
  }

  squareIndexAtPos(x, y) {
    const xIdx = Math.floor(x / 50);
    const yIdx = Math.floor(y / 50) * 10;
    return xIdx + yIdx;
  }

}

export default Sequencer;