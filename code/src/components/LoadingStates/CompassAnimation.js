import React from 'react';
// import Lottie from 'lottie-react';
import { Player } from '@lottiefiles/react-lottie-player';
// import animationData from './lotties/compass-lottie-black.json';

export const CompassAnimation = () => {
  return (
    <div>
      <Player
        loop
        autoplay
        src="https://assets7.lottiefiles.com/packages/lf20_exfgqmmf.json"
        className="lottie"
        speed={1} />
    </div>
  );
}
