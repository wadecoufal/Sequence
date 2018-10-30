# Sequence

## Overview

Sequence is a simple way to create music.

The sequencer is a grid of squares, each of which represent a note. The sequencer passes from left to right on the grid, and any square that is toggled on will sound. When the sequencer reaches the end of the grid, it loops back to the beginning. It's a great way to improvise, as the squares can be toggled in real time.

## Functionality

- Each square can be toggled: those that are toggled on will create a sound when passed over. Those toggled off will do nothing.
- Adjust the beats per minute (BPM) of the sequencer, as well as the key and instrument.
- Take snapshots of the sequences you're proud (only saved for the current session).
- Take a look at preset sequences and play around with them.

## BONUS:
- Use up to three sequencers, each of which can be customized to play a different instrument.

![alt-text](https://github.com/wadecoufal/Cadenze/blob/master/DemoImage.png)

## Technologies

- Vanilla Javascript for basic logic
- HTML5 Canvas for animations and rendering
- Web Audio API for generating sounds
- Webpack for bundling javascript files

## Timeline

#### Day 1:
[ ] Sketch out the sequence table
[ ] Make the squares toggleable (change color when toggled on/off)
[ ] Start researching Web Audio API for including sounds
#### Day 2:
[ ] Get squares to create sound
[ ] Start getting the sequencer to pass from left to right, triggering squares
#### Day 3:
[ ] Add functionality to change BPM
[ ] Add functionality to change instrument
#### Day 4:
[ ] Add functionality to change key
[ ] Add functionality to change color scheme
#### Day 5:
[ ] 
#### Weekend:
[ ] Polish the functionality of the sequencer
[ ] Work on styling
