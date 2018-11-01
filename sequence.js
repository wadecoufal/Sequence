import Sequencer from './javascripts/sequencer.js';
import Util from './javascripts/util.js';

document.addEventListener("DOMContentLoaded", () => {
  console.log('111');
  const canvas = document.getElementById("canvas");
  const colors = document.getElementById('colors');
  const instruments = document.getElementById('instruments');
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');

  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");
  const sequencer = new Sequencer(ctx);
  const util = new Util();
  sequencer.draw(ctx);
 
  canvas.addEventListener('click', (event) => sequencer.toggleSquareAtPos(canvas, event));
  instruments.addEventListener('click', (event) => util.changeInstrument(event));
  colors.addEventListener('click', (event) => util.changeColorScheme(event, sequencer));



  plus.addEventListener('click', () => {
    const tempoTag = document.getElementById('bpm-display');
    const currentTempo = parseInt(tempoTag.textContent.split(' ')[0]);
    const newTempo = Math.floor(60000 / (currentTempo + 5));
    tempoTag.textContent = `${currentTempo + 5} BPM`;

    sequencer.changeBpm(newTempo);
  });

  minus.addEventListener("click", () => {
    const tempoTag = document.getElementById("bpm-display");
    const currentTempo = parseInt(tempoTag.textContent.split(" ")[0]);
    const newTempo = Math.floor(60000 / (currentTempo - 5));
    tempoTag.textContent = `${currentTempo - 5} BPM`;

    sequencer.changeBpm(newTempo);
  });
});
