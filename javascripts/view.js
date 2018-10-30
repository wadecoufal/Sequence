class View {

  constructor(ctx, sequencer) {
    this.ctx = ctx;
    this.sequencer = sequencer;
  }

  draw(ctx) {
    this.sequencer.draw(ctx);
  }

}

module.exports = View;