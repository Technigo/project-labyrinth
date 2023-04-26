import React from 'react'
import styled from 'styled-components';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 170px
`

export const Loader = () => {
  return (
    <LoaderContainer>
      <Player
        autoplay
        loop
        src="https://assets7.lottiefiles.com/private_files/lf30_dz8ymnuq.json"
        style={{ height: '200px', width: '200px' }}>
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </LoaderContainer>
  )
}