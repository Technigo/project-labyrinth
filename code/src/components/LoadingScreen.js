import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const LoadingScreen = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);
  const container = useRef(null);

  useEffect(() => {
    console.log('lottie is bieng loaded')
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'json',
      loop: true,
      autoplay: true,
      animationData: './Lotties/lottie.json'
      // maybe could also use url = https://lottiefiles.com/28400-hora-del-camping
    });
    console.log('animation object');
  }, []);

  console.log('isLoading', isLoading)

  return (
    <LoadingWrapper>
      <div className="container" ref={container}>
        {isLoading && (
          <Lottie />
        )}
      </div>

    </LoadingWrapper>)
};

const LoadingWrapper = styled.section`
width: 300px; 
height: 300px;
display:flex;

.container{ 
  width: 300px;
  height: 300px;
}
`