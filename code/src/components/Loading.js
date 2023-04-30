import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { LoadingContainer, LoadingWrapper } from './LoadingStyling';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingWrapper>
        <Player
          src="https://assets9.lottiefiles.com/packages/lf20_pa2kzq5x.json"
          className="lottie"
          loop
          autoplay
          speed={1}
          style={{ height: '600px', width: '600px' }} />
      </LoadingWrapper>
    </LoadingContainer>
  );
}

export default Loading

