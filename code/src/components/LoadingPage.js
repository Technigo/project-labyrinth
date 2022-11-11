// FROM CODE SANDBOX:

import React from 'react';
import Lottie from 'lottie-react';
import styled from 'styled-components'
import LoadingDots from 'lotties/loading';

export const LoadingPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingDots,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <LoadingOuterWrapper>
      <LoadingPageWrapper>
        <Lottie animationData={LoadingDots} options={defaultOptions} height={400} width={400} />
      </LoadingPageWrapper>
    </LoadingOuterWrapper>
  );
}

const LoadingOuterWrapper = styled.div`
position: relative;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const LoadingPageWrapper = styled.div`
  border 2px solid red;
  position: absolute;
  z-index: 1;
  width: 65%;
  height: 280px;
  margin-bottom: -50px;
  margin-top: 30px;
  top: 40px;
  padding: 30px;
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