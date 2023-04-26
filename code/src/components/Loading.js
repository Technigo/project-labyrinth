import React from 'react';
import Lottie from 'lottie-react';
import styled from 'styled-components/macro';
import animationData from '../Lotties/retro-console-run.json';

const Loading = () => {
  console.log(Loading)
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
      <Lottie
        animationdata={animationData}
        options={defaultOptions}
        height={100} />
    </LoadingPageWrapper>

  )
}

export default Loading;

const LoadingPageWrapper = styled.div`
display: flex; 
flex-direction: column; 
width: 100%; 
`
