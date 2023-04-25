import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const Loader = () => {
  return (
    <div className="container">
      <Player
        src="https://assets7.lottiefiles.com/packages/lf20_92fyiqta.json"
        className="player"
        loop
        autoplay
        speed={3} />
    </div>
  )
}