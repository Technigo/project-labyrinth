import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled, { keyframes } from 'styled-components';

// Define the animation
const rotateInCenter = keyframes`
0% {
    -webkit-transform: translateZ(600px);
            transform: translateZ(600px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
`;

// Define the Player element with styled-components
const StyledPlayer = styled(Player)`
  width: 150px;
  height: 150px;
  transform: translate(0, -100vh);
  opacity: 0;
  animation: ${rotateInCenter} 4s ease-out forwards;
`;

export const UfoEntrance = () => {
  return (
    <StyledPlayer
      src="https://assets2.lottiefiles.com/packages/lf20_cgbjomca.json"
      loop
      autoplay
      speed={1} />
  );
};
