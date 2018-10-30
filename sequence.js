import View from './javascripts/view.js';
import Sequencer from './javascripts/sequencer.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");

  canvasEl.width = 1000;
  canvasEl.height = 1000;

  const ctx = canvas.getContext("2d");
  const sequencer = new Sequencer();
  const view = new View(ctx, sequencer);
  view.draw(ctx);

  ReactDOM.render(<h1>Sequence</h1>, canvas);
});
