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
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  top: 30%;

  @media (min-width: 668px) and (max-width: 1023px){
    top: 25%;
  }

  @media (min-width: 1024px){
    top: 0;
  }
`