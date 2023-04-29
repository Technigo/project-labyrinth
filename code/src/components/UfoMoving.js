import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const UfoMoving = () => {
  return (
    <Player
      src="https://assets2.lottiefiles.com/packages/lf20_cgbjomca.json"
      className="player"
      loop
      autoplay
      speed={1}
      style={{
        width: '150px',
        height: '150px',
        transform: 'translate(0, -100vh)',
        opacity: 0
      }} />
  )
}