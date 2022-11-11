import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.gameState.isLoading)

  return (
    <LoadingWrapper>
      {isLoading
      && <lottie-player
        src="https://assets5.lottiefiles.com/packages/lf20_qp2hl23a.json"
        speed="1"
        style={{ width: '200px',
          height: '200px' }}
        loop
        autoplay />}
    </LoadingWrapper>
  )
}

export default LoadingIndicator

const LoadingWrapper = styled.div`
display: flex; 
justify-content: center; 
align-items: center;
position: absolute;

  `