const INSTRUMENTS = {
  'Marimba': {
    6: "./assets/sound_files/marimba/mar_b3.wav",
    9: "./assets/sound_files/marimba/mar_c3.wav",
    8: "./assets/sound_files/marimba/mar_e3.wav",
    7: "./assets/sound_files/marimba/mar_g3.wav",
    3: "./assets/sound_files/marimba/mar_a4.wav",
    5: "./assets/sound_files/marimba/mar_d4.wav",
    4: "./assets/sound_files/marimba/mar_f4.wav",
    0: "./assets/sound_files/marimba/mar_b5.wav",
    2: "./assets/sound_files/marimba/mar_c5.wav",
    1: "./assets/sound_files/marimba/mar_e5.wav"
  },
  'Glockenspiel': {
    0: "./assets/sound_files/glock_d1.wav",
    1: "./assets/sound_files/glock_e1.wav",
    2: "./assets/sound_files/glock_f1.wav",
    3: "./assets/sound_files/glock_g1.wav",
    4: "./assets/sound_files/glock_a2.wav",
    5: "./assets/sound_files/glock_b2.wav",
    6: './assets/sound_files/glock_c2.wav',
    7: './assets/sound_files/glock_cs2.wav',
    8: './assets/sound_files/glock_d2.wav',
    9: './assets/sound_files/glock_e2.wav',
  }
}

class Util {

  changeInstrument (event) {
    const allAudioTags = document.getElementsByTagName('audio');
    const instrumentName = event.target.textContent;

    const instrumentFilePaths = INSTRUMENTS[instrumentName];
    let row = -1;

    let volume;
    if (instrumentName === 'Marimba') {
      volume = 1.0;
    } else {
      volume = 0.1;
    }
    
    for (let idx = 0; idx < allAudioTags.length; idx++) {
      if (idx % 10 === 0) {
        row += 1;
      }
      allAudioTags[idx].setAttribute("src", instrumentFilePaths[row]);
      console.log('volume', volume);
      allAudioTags[idx].volume = volume;
      console.log('audioTag', allAudioTags[idx]);
    }
  }

  changeColorScheme(event, sequencer) {
    sequencer.changeColor(event.target.textContent);
  }

}

export default Util;