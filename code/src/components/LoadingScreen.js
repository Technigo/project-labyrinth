import React from 'react';
// import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const LoadingScreen = () => {
  const isLoading = useSelector((store) => store.ui.isLoading)

  return (
    <LoadingWrapper>
      {isLoading && (
        <><script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" /><lottie-player src="/Lotties/lottie.json" background="transparent" speed="1" loop controls autoplay /></>
      )}
    </LoadingWrapper>)
}

export default LoadingScreen;

const LoadingWrapper = styled.section`
width: 300px; 
height: 300px;
display:flex;
`