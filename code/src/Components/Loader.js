import React from 'react';
import styled from 'styled-components/macro';
import loaderAnimation from 'Lotties/Loader';
import Lottie from 'lottie-react';

const LoaderContainer = styled.div`
display: grid;
align-content: center;
width: 200px;
margin: 0 auto;
height: 100vh;
`

const Loader = () => (
  <LoaderContainer>
    <Lottie
      animationData={loaderAnimation}
      loop
      autoPlay
      rendererSettings={{
        preserveAspectRatio: 'xMidYMid slice'
      }} />;
  </LoaderContainer>
)

export default Loader;