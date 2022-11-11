import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const LoadingAnimation = () => {
  const loading = useSelector((store) => store.ui.isLoading)

  return (
    <div>
      {loading && (
        <LoaderWrapper>
          <lottie-player
            src="https://lottie.host/f8188afe-51f9-405c-9358-8453e9692f47/xmYE4JlRkJ.json"
            background="transparent"
            speed="1"
            loop
            autoplay />
        </LoaderWrapper>
      )}
    </div>
  )
}

export default LoadingAnimation;

const LoaderWrapper = styled.div`
  height: 100vh;
`
