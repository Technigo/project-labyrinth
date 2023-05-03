import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const MazeAnimation = () => {
  return (
    <div className="Animation-container">
      <Player
        loop
        autoplay
        src="https://assets8.lottiefiles.com/packages/lf20_qp2hl23a.json"
        className="lottie"
        speed={1} />
    </div>
  );
}

