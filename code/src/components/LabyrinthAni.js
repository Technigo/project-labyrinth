import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { AnimationContainer } from 'styles/GameStyles';

export const LabyrinthAni = () => {
  return (
    <AnimationContainer>
      <Player
        loop
        autoplay
        src="https://assets4.lottiefiles.com/packages/lf20_RhQmhuHYnC.json"
        className="lottie"
        speed={1}
        style={{ height: '400px', width: '400px' }} />
    </AnimationContainer>
  );
}
