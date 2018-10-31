import Sequencer from './javascripts/sequencer.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");

  canvas.width = 500;
  canvas.height = 500;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  const ctx = canvas.getContext("2d");
  const sequencer = new Sequencer(ctx, audioCtx);
  sequencer.draw(ctx);

  canvas.addEventListener('click', (e) => sequencer.toggleSquareAtPos(canvas, event));
});
