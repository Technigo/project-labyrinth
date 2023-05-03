import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { LoadingContainer } from './LoadingStyling';

const Loading = () => {
  return (
    <LoadingContainer>
      <Player
        src="https://assets9.lottiefiles.com/packages/lf20_pa2kzq5x.json"
        className="lottie"
        loop
        autoplay
        speed={1}
        style={{ height: '600px', width: '600px' }} />
    </LoadingContainer>
  );
}

export default Loading

