import Sequencer from './javascripts/sequencer.js';
import Util from './javascripts/util.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");

  const styles = document.getElementById('styles');
  const colors = document.getElementById('colors');
  const presets = document.getElementById('presets');
  // const octaves = document.getElementById('octaves');

  const sharpFlats = document.getElementById('sharp-flats');

  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');

  canvas.width = 1000;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");
  const sequencer = new Sequencer(ctx);
  const util = new Util();
  sequencer.draw(ctx);
 
  canvas.addEventListener('click', (event) => sequencer.toggleSquareAtPos(canvas, event));

  colors.addEventListener('click', (event) => util.changeColorScheme(event, sequencer));
  presets.addEventListener('click', (event) => util.setPreset(event, sequencer));
  styles.addEventListener('click', (event) => util.setStyle(event, sequencer));
  // octaves.addEventListener('click', (event) => util.changeOctave(event));

  sharpFlats.addEventListener('click', (event) => util.changeSignature(event));

  plus.addEventListener('click', () => {
    const tempoTag = document.getElementById('bpm-display');
    const currentTempo = parseInt(tempoTag.textContent.split(' ')[0]);
    const newTextVal = currentTempo + 5;
    sequencer.changeBpm(currentTempo + 5, newTextVal);
  });

  minus.addEventListener("click", () => {
    const tempoTag = document.getElementById("bpm-display");
    const currentTempo = parseInt(tempoTag.textContent.split(" ")[0]);
    const newTextVal = currentTempo - 5;
    sequencer.changeBpm(currentTempo - 5, newTextVal);
  });
});
