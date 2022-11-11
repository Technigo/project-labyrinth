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
  position: absolute;
  z-index: 1;
  top: 200px;
  left: 10px;
  height: 50vh;
  width: 100%;

  @media (min-width: 668px) and (max-width: 1023px){
    margin: 10% auto;
  }

  @media (min-width: 1024px){
    margin: 10% auto;
  }
`
/*  position: absolute;
  z-index: 1;
  margin-right: 30px; */