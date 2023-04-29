import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components/macro';

const LottieContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  & > div {
    width: 20%;
    height: 20%;
  }

  .lottie {
    margin: auto;
  }
`;

export const LoadingMaze = () => {
  return (
    <LottieContainer>
      <Player
        loop
        autoplay
        src="https://assets2.lottiefiles.com/private_files/lf30_ployuqvp.json"
        className="lottie"
        speed={1} />
    </LottieContainer>
  )
};