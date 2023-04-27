import React from 'react'
import styled from 'styled-components/macro';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Player
        autoplay
        loop
        src="https://assets7.lottiefiles.com/private_files/lf30_dz8ymnuq.json"
        style={{ height: '150px', width: '150px' }}>
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </LoaderContainer>
  )
}

const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    padding-bottom: 3.5rem;
`
