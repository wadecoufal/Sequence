class Square {
  constructor(x, y, filepath, index) {
    this.x = x;
    this.y = y;
    this.color = 'black';
    this.newColor = 'black';
    this.toggled = false;
    this.index = index

    // this.audio = filepath;

    // set audio in sequencer (10 instead of 100)
    this.audio = document.createElement('audio');
    this.audio.setAttribute('src', filepath);
    this.audio.setAttribute('id', index);
    this.audio.setAttribute('type', 'audio/wav');
    document.body.appendChild(this.audio);
  }

  soundNote(nextColor) {
    this.newColor = nextColor;
    if (this.toggled) {
      setTimeout( () => {
        this.audio.currentTime = 0;
        this.audio.play()
      }, 0);
    } else {
      this.color = nextColor;
    }
  }

  toggle() {
    if (this.toggled === false) {
      this.toggled = true;
      this.color = 'white';
    } else {
      this.toggled = false;
      this.color = this.newColor;
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