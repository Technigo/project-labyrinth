import React from 'react';
import 'lottie-player';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const LoadingScreen = () => {
  const isLoading = useSelector((store) => store.lottie.isLoading)

  return (
    isLoading && (
      <LoadingWrapper>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_IJpMIV0zMj.json" background="transparent" speed="1" loop controls autoplay />
      </LoadingWrapper>))
}

export default LoadingScreen;

const LoadingWrapper = styled.section`
width: 300px; 
height: 300px;
display:flex;
`