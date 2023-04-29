import React from 'react';
import Lottie from 'lottie-react';
import styled from 'styled-components';
import Loading from '../lotties/loading-potato.json';

const LoadingAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <LoadingPageWrapper>
      <Lottie animationData={Loading} options={defaultOptions} />
    </LoadingPageWrapper>
  );
};

export default LoadingAnimation;

const LoadingPageWrapper = styled.div``;
