import React from 'react';
import styled from 'styled-components/macro';
import animationData from 'Lotties/Loader';

const LoaderContainer = styled.div`
display: flex;
height: 100%;
width: 100%;
padding-top: 200px;
`
const Lottie = styled.p`
padding: 2px;
margin: 0 auto;`

// const LoaderMessage = styled.p`
//   font-size: 25px;
// `

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <LoaderContainer>
      <Lottie options={defaultOptions} height={100} width={100} />;
      {/* <LoaderMessage>Page is loading...</LoaderMessage> */}
    </LoaderContainer>
  )
}

export default Loader;