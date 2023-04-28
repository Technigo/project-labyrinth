import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';

export const LoadingScreen = () => {
  return (
    <LottieWrapper>
      <div className="container">
        <Player
          loop
          autoplay
          src="https://assets6.lottiefiles.com/packages/lf20_LHHbJ8.json"
          className="lottie"
          speed={1} />
      </div>
    </LottieWrapper>
  )
};

const LottieWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    background-color:lightgrey;
    z-index: 1;
    .lottie{
      height: 60vh;
      width: 60vw;
      align-items: center;
      padding-top: 13%;
    }
    `