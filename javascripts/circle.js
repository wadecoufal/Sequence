class Circle {

  constructor(x, y, radius, color, tempo) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.xDir = 'left';
    this.yDir = 'down';

    this.speed = tempo/100;
  }

  move() {
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
      this.x = this.x - this.speed;
    } else if (this.xDir === 'right') {
      this.x = this.x + this.speed;
    }

    if (this.yDir === 'up') {
      this.y = this.y - this.speed;
    } else if (this.yDir === 'down') {
      this.y = this.y + this.speed;
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