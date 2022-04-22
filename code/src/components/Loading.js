import React from 'react'
import styled, { keyframes } from 'styled-components'

const LoaderContainer = styled.div`
  position: absolute;
  z-index: 1;
`

const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(90, 90, 90, 0.6);
  background: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0) 49%,
    rgb(90, 90, 90, 0.5) 51%
  );
  border-radius: 50%;
  width: 350px;
  height: 350px;
  animation: ${spin} 2s linear infinite;
`

const Loading = () => {
  return (
    <LoaderContainer>
      <LoadingSpinner />
    </LoaderContainer>
  )
}

export default Loading
