import Circle from './circle.js';
import Square from './squares.js'
class Visualizer {

  constructor(ctx2) {
    this.ctx = ctx2;
    this.circles = {};
    this.squares = {};
    this.type = 'square';
  }

  addSquare(x, y, width, color) {
    let square = new Square(x, y, width, color);
    this.squares[this.squares.length] = square;
  }

  addCircle(color, radius, idx, tempo) {
    let circle = new Circle(
      Math.floor(Math.random() * 500), 
      Math.floor(Math.random() * 500),
      radius, color, tempo);
    
    this.circles[idx] = circle;
  }

  deleteCircle(idx) {
    delete this.circles[idx];
    console.log(this.circles);
  }

  moveCircles() {
    Object.values(this.circles).forEach( circle => {
      circle.move();
    })
  }

  moveSquares() {
    Object.values(this.squares).forEach( (square, idx) => {
      square.move();
      if (square.y > 550 || square.x > 550) {
        delete this.squares[square];
        console.log(this.squares);
      }
    })
  }

  start() {
    const animateCallback = () => {
      this.ctx.clearRect(0, 0, 500, 500);

      if (this.type === 'square') {
        this.renderSquares();
      } else if (this.type === 'circle') {
        this.renderCircles();
      }

      
      requestAnimationFrame(animateCallback);
    }

    animateCallback();
  }

  renderCircles() {
    Object.values(this.circles).forEach(circle => {
      circle.draw(this.ctx);
    })

    this.moveCircles();
  }

  renderSquares() {
    Object.values(this.squares).forEach(square => {
      square.draw(this.ctx);
    })

    this.moveSquares();
  }

  changeSpeed(newTempo) {
    Object.values(this.circles).forEach( circle => {
      circle.speed = newTempo/100;
    })
  }


}

export default Visualizer;