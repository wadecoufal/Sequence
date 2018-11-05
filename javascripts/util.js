import { PIANO, PIANO_PATHS } from './piano_filepaths.js';

const PRESETS = {
  'Preset 1': {
    squareIndices: [0,40, 80, 120, 160, 141, 101, 61, 21, 42, 82, 122, 103, 
      63, 84, 65, 105, 46, 86, 126, 147, 107, 67, 27, 8, 48, 88, 128, 168, 
      149, 109, 69, 29, 50, 90, 130, 111, 71, 92, 73, 113, 54, 94, 134, 155, 
      115, 75, 35, 16, 56, 96, 136, 176, 157, 117, 77, 37, 58, 98, 138, 119, 79]
  },
  'Preset 2': {
    squareIndices: [142, 144, 125, 25, 46, 67, 69, 91, 135, 96, 77]
  },
  'Preset 3': {
    squareIndices: [160, 142, 84, 165, 46, 27, 148, 29, 50, 131, 152, 94, 115, 96, 157, 199]
  },
  'Clear': {
    squareIndices: []
  }
}

class Util {

  changeOctave (event, octave) {
    const allAudioTags = document.getElementsByTagName('audio');
    const octaveTag = document.getElementById('octave-display');
    
    let newOctaveValue;
    if (typeof octave != 'undefined') {
      newOctaveValue = octave;
    } else if (event.target.id === 'octave-minus') {
      newOctaveValue = (parseInt(octaveTag.textContent) - 1);
      if (newOctaveValue === -1) {
        newOctaveValue = 5;
      }
    } else if (event.target.id === 'octave-plus') {
      newOctaveValue = (parseInt(octaveTag.textContent) + 1) % 6;
    }
    
    octaveTag.textContent = `${newOctaveValue} 8va`;

    const octaveFilePaths = PIANO[newOctaveValue];
    let row = -1;
    
    for (let idx = 0; idx < allAudioTags.length; idx++) {
      if (idx % 20 === 0) {
        row += 1;
      }
      allAudioTags[idx].setAttribute("src", octaveFilePaths[row].filePath);
      allAudioTags[idx].dataset.pianoidx = octaveFilePaths[row].idx;
    }

    const sharpFlatTags = document.getElementsByClassName('sharp-flat');
    for (let idx = 0; idx < sharpFlatTags.length; idx++) {
      sharpFlatTags[idx].textContent = " ";
    }
  }

  changeSignature(event) {
    if (typeof event.target.dataset.idx === 'undefined') {
      return;
    }
    const row = event.target.dataset.idx;
    const rowAudioTags = document.getElementsByClassName(`audioRow${row}`);

    if (event.target.textContent === " ") {
      event.target.textContent = "#";

      for (let i = 0; i < rowAudioTags.length; i++) {
        const pianoIdx = parseInt(rowAudioTags[i].dataset.pianoidx);
        rowAudioTags[i].setAttribute('src', PIANO_PATHS[pianoIdx + 1]);
        rowAudioTags[i].dataset.pianoidx = pianoIdx + 1;
      }

    } else if (event.target.textContent === "#") {
      event.target.textContent = "b";
      
      for (let i = 0; i < rowAudioTags.length; i++) {
        const pianoIdx = parseInt(rowAudioTags[i].dataset.pianoidx);
        if (pianoIdx > 1) {
          rowAudioTags[i].setAttribute('src', PIANO_PATHS[pianoIdx - 2]);
          rowAudioTags[i].dataset.pianoidx = pianoIdx - 2;
        }
      }

    } else {
      event.target.textContent = " ";
      for (let i = 0; i < rowAudioTags.length; i++) {
        const pianoIdx = parseInt(rowAudioTags[i].dataset.pianoidx);
        rowAudioTags[i].setAttribute("src", PIANO_PATHS[pianoIdx + 1]);
        rowAudioTags[i].dataset.pianoidx = pianoIdx + 1;
      }

    }
  }

  changeColorScheme(event, sequencer, colorScheme) {
    const colorListItems = document.getElementsByClassName('color-list-item');

    for (let i = 0; i < colorListItems.length; i++) {
      if (colorListItems[i] === event.target) {
        event.target.classList.add('selected');
      } else {
        colorListItems[i].classList.remove('selected');
      }
    }

    let newColorScheme;
    if (colorScheme) {
      newColorScheme = colorScheme;
    } else {
      newColorScheme = event.target.textContent;
    }
    sequencer.changeColor(newColorScheme);
  }

  setPreset(event, sequencer) {
    const presetListItems = document.getElementsByClassName('preset-list-item');

    for (let i = 0; i < presetListItems.length; i++) {
      if (presetListItems[i] === event.target) {
        event.target.classList.add('selected');
      } else {
        presetListItems[i].classList.remove('selected');
      }
    }

    const presetName = event.target.textContent;
    const preset = PRESETS[presetName];
    
    sequencer.untoggleAllSquares();
    preset.squareIndices.forEach( squareIdx => {
      sequencer.toggleSquareAtPos(null, null, squareIdx);
    });
  }

  setStyle(event, sequencer) {
    const styleListItems = document.getElementsByClassName('style-list-item');

    for (let i = 0; i < styleListItems.length; i++) {
      if (styleListItems[i] === event.target) {
        event.target.classList.add('selected');
      } else {
        styleListItems[i].classList.remove('selected');
      }
    }
    const style = event.target.textContent;
    sequencer.changeStyle(style);
  }

}

export default Util;