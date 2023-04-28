import React from 'react';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

const LoaderContainer = styled(Player)`
  width: 100vw;
`;

const StyledPlayer = styled(Player)`
  width: 300px;
  height: 300px;
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <StyledPlayer
        src="https://assets7.lottiefiles.com/packages/lf20_92fyiqta.json"
        className="player"
        loop
        autoplay
        speed={3} />
    </LoaderContainer>
  )
}