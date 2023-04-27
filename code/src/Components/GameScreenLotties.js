import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const GameScreenLotties = ({ LottieURL }) => (
  <>
    <Player
      autoplay
      loop
      src={LottieURL}
    />
    <img src={LottieURL} alt="Background" />
  </>
);

export default GameScreenLotties;

// coordinates: '0,0', description:'You find yourself under a large archway opening into a cavern. A sense of purpose fills you.',
// https://unsplash.com/photos/Sj_3Jdr19L4

// coordinates: '1,0', description: "It's warmer here. Rays of light penetrate the ceiling."
// https://unsplash.com/photos/KnLj3o9A66E

// coordinates: '1,1', description: 'The walls of the cavern seem to grow brighter and more colorful here.'


// coordinates: '0,1', description: 'You emerge into a large, four-walled room with mechanical gadgets and bronze metal gizmos laying in a mess on the floor.
// They seem to have once been part of some larger moving mechanism.'
// https://unsplash.com/photos/7RCx2cuuuu4

// coordinates: '0,2', description: 'As you move through the room, the walls change colors with every step you take. 
// The buzzing and clicking from before now seem to form one harmonious melody. They respond to your every movement.'

// coordinates: '0,3', description:'The mouth of the chest swings open. The papers spring from the chest, whirling around your head. 
// You shield your face, but an instant later all is calm. The papers, books and scrolls from the chest are now neatly arranged on the bookshelves around the room.'
// https://unsplash.com/photos/mkxTOAxqTTo

// coordinates: '1,3', description: 'As you step into the light, you feel an immense relief and calm flow over you. It feels like an important journey has ended, but you get the sense that a new one is just beginning...'