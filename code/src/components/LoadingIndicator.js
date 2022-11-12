import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components/macro';
import animationData from '../lotties/labyrinth';

export const LoadingIndicator = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <LottieWrapper>
      <Lottie options={defaultOptions} height={400} width={400} />
    </LottieWrapper>
  );
};

const LottieWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;
