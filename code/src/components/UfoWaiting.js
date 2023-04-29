import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const UfoWaiting = () => {
  return (
    <Player
      src="https://assets2.lottiefiles.com/packages/lf20_cgbjomca.json"
      className="player"
      loop
      autoplay
      speed={1}
      style={{ width: '150px',
        height: '150px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)' }} />
  )
}