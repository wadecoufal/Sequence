class Square {
  constructor(x, y, filepath, index) {
    // note value
    // toggled?
    // color
    // position
    // width/height
    this.x = x;
    this.y = y;
    this.color = 'gray';
    this.toggled = false;
    this.index = index

    // audio
    this.audio = document.createElement('audio');
    this.audio.setAttribute('src', filepath);
    this.audio.setAttribute('id', index);
    this.audio.setAttribute('type', 'audio/wav');
    document.body.appendChild(this.audio);
  }

  soundNote() {
    if (this.toggled) {
      setTimeout( () => {
        this.audio.currentTime = 0;
        this.audio.play()
      }, 0);
      if (this.color === 'red') {
        this.color = 'pink'
      } else {
        this.color = 'red';
      }
    } else {
      if (this.color === 'gray') {
        this.color = 'blue';
      } else {
        this.color = 'gray';
      }
    }
  }

  toggle() {
    if (this.toggled === false) {
      this.toggled = true;
      this.color = 'red';
    } else {
      this.toggled = false;
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