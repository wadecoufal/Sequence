# Sequence

## Overview

Sequence is a simple way to create music.

The sequencer is a grid of squares, each of which represent a note. The sequencer passes from left to right on the grid, and any square that is toggled on will sound. When the sequencer reaches the end of the grid, it loops back to the beginning. It's a great way to improvise, as the squares can be toggled in real time.

![alt-text](https://github.com/wadecoufal/Sequence/blob/gh-pages/sequence1.png)

## Technologies

- Vanilla Javascript for basic logic
- HTML5 Canvas for animations and rendering
- Webpack for bundling javascript files

## Functionality

Users can toggle squares, change the tempo (beats per minute), change the style of the squares, color scheme,
the key signature, and hear preset patterns.

The tempo is set using setInterval. When the user changes the tempo, the interval is adjusted accordingly.

```
startSequence() {
  return setInterval( () => {
    this.triggerSquares(this.currentColumn);
    this.currentColumn = (this.currentColumn + 1) % 20;
  }, this.tempoMs);
}

resetSequence() {
  clearInterval(this.sequencing);
  this.currentColumn = 0;
  this.sequencing = setInterval(() => {
    this.triggerSquares(this.currentColumn);
    this.currentColumn = (this.currentColumn + 1) % 20;
  }, this.tempoMs);
}

changeBpm(newTempo, newTextVal) {
  document.getElementById('bpm-display').textContent = `${newTextVal} BPM`;

  clearInterval(this.sequencing);
  this.currentColumn = 0;
  this.tempo = newTempo;
  this.tempoMs = 60000 / this.tempo;

  this.sequencing = setInterval( () => {
    this.triggerSquares(this.currentColumn);
    this.currentColumn = (this.currentColumn + 1) % 20;
  }, this.tempoMs);
}
```

![alt-text](https://github.com/wadecoufal/Sequence/blob/gh-pages/sequence2.png)
