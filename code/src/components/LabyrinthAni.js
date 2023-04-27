import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { AnimationContainer } from 'styles/GameStyles';

export const LabyrinthAni = () => {
  return (
    <AnimationContainer>
      <Player
        loop
        autoplay
        src="https://assets4.lottiefiles.com/packages/lf20_gs2NH0oQkt.json"
        className="lottie"
        speed={2}
        style={{ height: '500px', width: '500px' }} />
    </AnimationContainer>
  );
}
