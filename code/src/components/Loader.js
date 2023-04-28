import React from 'react';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

const StyledPlayer = styled(Player)`
  width: 400px;
  height: 400px;
`;

export const Loader = () => {
  return (
    <div className="container">
      <StyledPlayer
        src="https://assets7.lottiefiles.com/packages/lf20_92fyiqta.json"
        className="player"
        loop
        autoplay
        speed={3} />
    </div>
  )
}