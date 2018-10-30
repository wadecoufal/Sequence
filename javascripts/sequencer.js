import Square from './square.js'

const NOTES = {

}

class Sequencer {

  constructor() {
    // color
    // 
    this.squares = [];
    this.addSquares();
  }

  addSquares() {
    let x = 40;
    let y = 40;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.squares.push(new Square(x,y))
        y += 20;
      }
      x += 20;
      y = 40;
    }
  }

  draw(ctx) {
    
  }
  


}

export default Sequencer;