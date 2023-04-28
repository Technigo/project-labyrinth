import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components/macro';

const LottieContainer = styled.div`
width: 100%;
  height: 75%;
display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 20%;
    height: 20%;
  }
`;

export const LoadingMaze = () => {
  return (
    <LottieContainer>
      <Player
        loop
        autoplay
        src="https://assets8.lottiefiles.com/packages/lf20_jpasoh0f.json"
        className="lottie"
        speed={1} />
    </LottieContainer>
  )
}