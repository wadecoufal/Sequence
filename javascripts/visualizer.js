import Circle from './circle.js';

class Visualizer {

  constructor(ctx2) {
    this.ctx = ctx2;
    this.circles = {};
  }

  addCircle(color, radius, idx, tempo) {
    // add circle to circles array
    let circle = new Circle(
      Math.floor(Math.random() * 500), 
      Math.floor(Math.random() * 500),
      radius, color, tempo);
    
    this.circles[idx] = circle;
  }

  deleteCircle(idx) {
    delete this.circles[idx];
  }

  moveCircles() {
    Object.values(this.circles).forEach( circle => {
      circle.move();
    })
  }

  start() {
    const animateCallback = () => {
      this.ctx.clearRect(0, 0, 500, 500);

      Object.values(this.circles).forEach( circle => {
        circle.draw(this.ctx);
      })

      this.moveCircles();
      requestAnimationFrame(animateCallback);
    }

    animateCallback();
  }

  changeSpeed(newTempo) {
    Object.values(this.circles).forEach( circle => {
      circle.speed = newTempo/100;
    })
  }


}

export default Visualizer;