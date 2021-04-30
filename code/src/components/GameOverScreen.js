import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import RestartButton from '../UI/RestartButton'

const GameOverScreen = () => {

  return (
    <Main>
      <Border>
        <GameOverTitle>
          GAME OVER
        </GameOverTitle>
        <GameOverText>
          You went in circles and came back to where you started.
          Better luck next time...
        </GameOverText>
        <Icon className='nes-icon close is-large'>
        </Icon>
        <Link to='/'>
        <RestartButton
          text='TRY AGAIN'
        />
        </Link>
      </Border>
    </Main>
  )
}

export default GameOverScreen

const Main = styled.main`
  background-color: #000;
  height: 100vh;
  padding: 25px;
`
const Border = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: dashed grey 4px;
  width: 100%;
  height: 100%;
  padding: 20px;
`
const GameOverTitle = styled.h1`
  font-family: 'Press Start 2P', cursive;
  color: #fff;
  width: 100%;
  text-align: center;
    @media (min-width: 768px) {
      font-size: 48px;
    }
    @media (min-width: 1025px) {
      font-size: 52px;
    }
`
const GameOverText = styled.p`
  font-family: 'Press Start 2P', cursive;
  color: #fff;
  font-size: 12px;
  width: 100%;
  text-align: center;
    @media (min-width: 768px) {
      font-size: 18px;
      width: 80%;
    }
    @media (min-width: 1025px) {
      font-size: 20px;
      width: 70%;
    }
`
const Icon = styled.i`
  margin: 25px 0;
`