// const INSTRUMENTS = {
//   'Marimba': {
//     6: "./assets/sound_files/marimba/mar_b3.wav",
//     9: "./assets/sound_files/marimba/mar_c3.wav",
//     8: "./assets/sound_files/marimba/mar_e3.wav",
//     7: "./assets/sound_files/marimba/mar_g3.wav",
//     3: "./assets/sound_files/marimba/mar_a4.wav",
//     5: "./assets/sound_files/marimba/mar_d4.wav",
//     4: "./assets/sound_files/marimba/mar_f4.wav",
//     0: "./assets/sound_files/marimba/mar_b5.wav",
//     2: "./assets/sound_files/marimba/mar_c5.wav",
//     1: "./assets/sound_files/marimba/mar_e5.wav"
//   },
//   'Glockenspiel': {
//     0: "./assets/sound_files/glock_d1.wav",
//     1: "./assets/sound_files/glock_e1.wav",
//     2: "./assets/sound_files/glock_f1.wav",
//     3: "./assets/sound_files/glock_g1.wav",
//     4: "./assets/sound_files/glock_a2.wav",
//     5: "./assets/sound_files/glock_b2.wav",
//     6: './assets/sound_files/glock_c2.wav',
//     7: './assets/sound_files/glock_cs2.wav',
//     8: './assets/sound_files/glock_d2.wav',
//     9: './assets/sound_files/glock_e2.wav',
//   }
// }

import { PIANO } from './piano_filepaths.js';

const PRESETS = {
  'Preset 1': {
    bpm: 60,
    instrument: 'Glockenspiel',
    squareIndices: [0, 99],
    colorScheme: 'Muted'
  },
  'Preset 2': {
    bpm: 120,
    instrument: 'Marimba',
    squareIndices: [1,2,3,4,5,6],
    colorScheme: 'Blue'
  },
  'Preset 3': {
    bpm: 180,
    instrument: 'Glockenspiel',
    squareIndices: [22, 33, 43, 77],
    colorScheme: 'Colorful'
  }
}

class Util {

  changeOctave (event) {
    const allAudioTags = document.getElementsByTagName('audio');
    const octaveTag = document.getElementById('octave-display');

    const newOctaveValue = (parseInt(octaveTag.textContent) + 1) % 6;
    
    octaveTag.textContent = `${newOctaveValue}`;

    const octaveFilePaths = PIANO[newOctaveValue];
    let row = -1;
    
    for (let idx = 0; idx < allAudioTags.length; idx++) {
      if (idx % 20 === 0) {
        row += 1;
      }
      allAudioTags[idx].setAttribute("src", octaveFilePaths[row].filePath);
    }
  }

  changeSignature(event) {
    console.log('changeSig', event);
    const row = event.target.dataset.idx;
    const rowAudioTags = document.getElementsByClassName(`audioRow${row}`);

    if (event.target.textContent === " ") {
      event.target.textContent = "#";

    } else if (event.target.textContent === "#") {
      event.target.textContent = "b";

    } else {
      event.target.textContent = " ";
    }
  }

  changeColorScheme(event, sequencer, colorScheme) {
    let newColorScheme;
    if (colorScheme) {
      newColorScheme = colorScheme;
    } else {
      newColorScheme = event.target.textContent;
    }
    sequencer.changeColor(newColorScheme);
  }

  setPreset(event, sequencer) {
    const presetName = event.target.textContent;
    const preset = PRESETS[presetName];
    
    this.changeColorScheme(null, sequencer, preset.colorScheme);
    this.changeInstrument(null, preset.instrument);
    const newTempo = Math.floor(60000 / preset.bpm);
    sequencer.changeBpm(newTempo, preset.bpm);
    sequencer.untoggleAllSquares();
    preset.squareIndices.forEach( squareIdx => {
      sequencer.toggleSquareAtPos(null, null, squareIdx);
    })
  }

  setStyle(event, sequencer) {
    console.log('IN UTIL');
    console.log('event', event.target.textContent);
    const style = event.target.textContent;
    sequencer.changeStyle(style);
  }

  createRandomPreset() {
    // const preset;
    // preset.instrument = Math.floor(Math.random() * INSTRUMENTS.length)
  }

}

export default Util;