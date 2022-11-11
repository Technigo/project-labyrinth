import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import animationData from '../lotties/love-load';

export const LoadingPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <LoadingPageWrapper>
      <Lottie options={defaultOptions} />
    </LoadingPageWrapper>
  )
}

const LoadingPageWrapper = styled.div`
 /*  position: absolute; */
  // z-index: 10;
  /* top: 200px;
  left: 30%; */
  margin: 10% auto;
  height: 50vh;
`
/*  position: absolute;
  z-index: 1;
  margin-right: 30px; */