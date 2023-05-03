import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const FireworksAnimation = () => {
  return (
    <div className="Animation-container">
      <Player
        loop
        autoplay
        src="https://assets4.lottiefiles.com/private_files/lf30_dUMbpm.json"
        className="lottie"
        speed={1}
        style={{ height: '150px', width: '150px' }} />
    </div>
  );
}

