import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';

const FullPage = styled.div`
background-color: #f5f5f5;
width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Animation = () => (
  <FullPage>
    <Player
      src="https://assets2.lottiefiles.com/packages/lf20_cgbjomca.json"
      className="player"
      loop
      autoplay
      speed={1}
      style={{
        width: '150px',
        height: '150px',
        transform: 'translate(0, -100vh)',
        opacity: 0
      }} />
  </FullPage>
)

/* <PlayerWrapper>
            <Player
              src="https://assets2.lottiefiles.com/packages/lf20_cgbjomca.json"
              className="player"
              loop
              autoplay
              speed={1}
              style={{
                width: '150px',
                height: '150px',
                transform: 'translate(0, -100vh)',
                opacity: 0
              }} />
          </PlayerWrapper> */