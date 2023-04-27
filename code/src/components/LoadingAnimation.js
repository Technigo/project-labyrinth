import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import styled, { keyframes } from 'styled-components';
import loadingspace from 'images/loadingspace.png'

const flyRound = keyframes`
 0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
`;

const FullPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${loadingspace});
`;

const FlyRoundAnimation = styled(Player)`
  position: absolute;
  top: 44%;
  left: 40%;
  transform: translate(50%, 50%);
  animation: ${flyRound} 6s ease forwards;
`;

export const Animation = () => (
  <FullPage>
    <FlyRoundAnimation
      src="https://assets2.lottiefiles.com/packages/lf20_cgya0u79.json"
      loop
      autoplay
      speed={1}
      style={{
        width: '150px',
        height: '150px',
        transform: 'translate(0, -100vh)',
        opacity: 0
      }} />
  </FullPage>
);

/*
 */
