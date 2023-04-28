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
        src="https://assets9.lottiefiles.com/packages/lf20_ndmmn0a6.json"
        className="player"
        loop
        autoplay
        speed={1} />
    </LoaderContainer>
  )
}