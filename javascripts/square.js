class Square {
  constructor(x, y) {
    // note value
    // toggled?
    // color
    // position
    // width/height
    this.x = x;
    this.y = y;
    this.color = 'gray';
  }

  soundNote() {
    if (this.toggled) {
      
    } else {

    }
  }

  toggleColor() {
    if (this.color === 'gray') {
      this.color = 'red';
    } else {
      this.color = 'gray';
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, 45, 45)
    // ctx.beginPath();
    // ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    // ctx.fill();
  }
}

export default Square;