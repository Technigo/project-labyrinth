import React from 'react';
import Lottie from 'lottie-react'
import styled from 'styled-components';
import LoadingHearts from '../lotties/love-load';

export const LoadingPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingHearts,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <LoadingPageWrapper>
      <Lottie animationData={LoadingHearts} options={defaultOptions} />
    </LoadingPageWrapper>
  )
}

const LoadingPageWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 200px;
  left: 10px;
  height: 50vh;

  @media (min-width: 668px) and (max-width: 1023px){
    top: 180px;
    left: 10px;
    margin: 0 auto;
  }

  @media (min-width: 1024px){
    top: -80px;
    margin: 0 80px;
  }
`