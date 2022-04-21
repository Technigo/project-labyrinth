import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/space-loading';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    top: 20%;
    left: 25%;
  }
  @media (min-width: 1025px) {
    position: absolute;
    top: 25%;
    left: 40%;
  }
`;

const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LoadingWrapper>
      <Lottie options={defaultOptions} height={400} width={400} />
    </LoadingWrapper>
  );
};

export default Animation;
