import Sequencer from './javascripts/sequencer.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");

  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");
  const sequencer = new Sequencer(ctx);
  sequencer.draw(ctx);
  canvas.addEventListener('click', (e) => sequencer.toggleSquareAtPos(canvas, event));
});
