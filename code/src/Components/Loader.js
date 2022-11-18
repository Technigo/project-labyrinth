import React from 'react';
import styled from 'styled-components/macro';
import loaderAnimation from 'Lotties/Loader';
import Lottie from 'react-lottie';

const LoaderContainer = styled.div`
display: flex;
justify-content: center;

// .wrapper {
//   border: solid 2px red;
// }
`

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <LoaderContainer>
      <div className="wrapper">
        <Lottie options={defaultOptions} height={200} width={200} />;
      </div>
    </LoaderContainer>

  )
}

export default Loader;