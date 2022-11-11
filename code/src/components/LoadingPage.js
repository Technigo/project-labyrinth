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