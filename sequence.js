import Sequencer from './javascripts/sequencer.js';
import Visualizer from './javascripts/visualizer.js';
import Util from './javascripts/util.js';

document.addEventListener("DOMContentLoaded", () => {
  console.log('111');
  const canvas = document.getElementById("canvas");
  const canvas2 = document.getElementById("canvas2");
  const colors = document.getElementById('colors');
  const instruments = document.getElementById('instruments');
  const presets = document.getElementById('presets')
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');
  const styles = document.getElementById('styles');

  canvas.width = 500;
  canvas.height = 500;
  canvas2.width = 500;
  canvas2.height = 500;

  const ctx = canvas.getContext("2d");
  const ctx2 = canvas2.getContext("2d");
  const visualizer = new Visualizer(ctx2);
  const sequencer = new Sequencer(ctx, visualizer);
  const util = new Util();
  sequencer.draw(ctx);
 
  canvas.addEventListener('click', (event) => sequencer.toggleSquareAtPos(canvas, event));
  instruments.addEventListener('click', (event) => {
    util.changeInstrument(event)
    sequencer.resetSequence();
  });
  colors.addEventListener('click', (event) => util.changeColorScheme(event, sequencer));
  presets.addEventListener('click', (event) => util.setPreset(event, sequencer));
  styles.addEventListener('click', (event) => util.setStyle(event, sequencer));

  plus.addEventListener('click', () => {
    const tempoTag = document.getElementById('bpm-display');
    const currentTempo = parseInt(tempoTag.textContent.split(' ')[0]);
    // const newTempo = Math.floor(60000 / (currentTempo + 5));
    const newTextVal = currentTempo + 5;

    visualizer.changeSpeed(currentTempo + 5);
    // sequencer.changeBpm(newTempo, newTextVal);
    sequencer.changeBpm(currentTempo + 5, newTextVal);
  });

  minus.addEventListener("click", () => {
    const tempoTag = document.getElementById("bpm-display");
    const currentTempo = parseInt(tempoTag.textContent.split(" ")[0]);
    // const newTempo = Math.floor(60000 / (currentTempo - 5));
    const newTextVal = currentTempo - 5;
    visualizer.changeSpeed(currentTempo - 5);
    // sequencer.changeBpm(newTempo, newTextVal);
    sequencer.changeBpm(currentTempo - 5, newTextVal);
  });
});
