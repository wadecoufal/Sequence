class Square {
  constructor(x, y) {
    // note value
    // toggled?
    // color
    // position
    // width/height
    this.x = x;
    this.y = y;
  }

  soundNote() {
    if (this.toggled) {
      // play note value
    } else {

    }
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, 10, 10)
    // ctx.beginPath();
    // ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    // ctx.fill();
  }
}

export default Square;