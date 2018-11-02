class Circle {

  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.xDir = 'left';
    this.yDir = 'down';

    this.speed = 4;
  }

  move() {
    const randx = Math.floor(Math.random() * 4) + 1;
    const randy = Math.floor(Math.random() * 4) + 1;

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
      this.x = this.x - this.speed/randx;
    } else if (this.xDir === 'right') {
      this.x = this.x + this.speed/randx;
    }

    if (this.yDir === 'up') {
      this.y = this.y - this.speed/randy;
    } else if (this.yDir === 'down') {
      this.y = this.y + this.speed/randy;
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
    ctx.fill();
  }

}

export default Circle;