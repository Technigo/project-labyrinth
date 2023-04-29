import React from 'react'
import styled from 'styled-components'
import { Player } from '@lottiefiles/react-lottie-player'
import animationData from '../lotties/blueman'

const LoaderContainer = styled.div`
border: blue dotted 2px;
width: 200px;`

const LoadingPage = () => {
  return (
    <LoaderContainer>
      <Player
        autoplay
        controls
        loop
        mode="normal"
        src={animationData}
        style={{ height: '200px', width: '150px' }} />
    </LoaderContainer>
  )
}

export default LoadingPage;