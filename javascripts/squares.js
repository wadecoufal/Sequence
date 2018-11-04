class Square {

  constructor(x, y, width, color, idx) {
    this.x = Math.floor(Math.random() * 500 + 1);
    this.y = 0;
    this.idx = idx;
    this.width = width;
    this.color = color;

    this.acc = 1.05;
    this.velocity = 2;
  }

  move() {
    this.y += this.velocity;
    this.velocity *= this.acc;
  }


  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.width);
  }
}

export default Square;