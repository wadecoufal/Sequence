import Sequencer from './javascripts/sequencer.js';
import Util from './javascripts/util.js';

document.addEventListener("DOMContentLoaded", () => {
  console.log('111');
  const canvas = document.getElementById("canvas");
  const keys = document.getElementById('keys');
  const instruments = document.getElementById('instruments');

  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");
  const sequencer = new Sequencer(ctx);
  const util = new Util();
  sequencer.draw(ctx);
 
  canvas.addEventListener('click', (event) => sequencer.toggleSquareAtPos(canvas, event));
  instruments.addEventListener('click', (event) => util.changeInstrument(event));
});
