import Sequencer from './javascripts/sequencer.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const audio = document.getElementById("audio");

  canvas.width = 500;
  canvas.height = 500;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  const track = audioCtx.createMediaElementSource(audio);
  track.connect(audioCtx.destination);

  

  const ctx = canvas.getContext("2d");
  const sequencer = new Sequencer(ctx, audioCtx);
  sequencer.draw(ctx);

  canvas.addEventListener('click', (e) => sequencer.toggleSquareAtPos(canvas, event));


  canvas.addEventListener('click', function () {

    audio.play();

    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // play or pause track depending on state
    if (this.dataset.playing === 'false') {
      audio.play();
      this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
      audio.pause();
      this.dataset.playing = 'false';
    }

  }, false);
});
