import React from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react'
import animationData from '../lotties/82633-shapes-loader.json'

export const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div>
      <LoadingWrap>
        <h1>Loading...</h1>
        <Lottie options={defaultOptions} height={400} width={400} />
      </LoadingWrap>
    </div>
  )
}

const LoadingWrap = styled.div`
border: 2px solid red; 
height: 100px;
z-index: 2;
`