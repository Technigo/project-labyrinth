import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import Loader from './Loader'

export const Game = () => {

  const username = useSelector(store => store.labyrinth.username)
  const isLoading = useSelector((store) => store.ui.isLoading)

  if (isLoading) {
    return <Loader />
  }

  return (
    <MainContainer>
      {username ?
        <GameScreen />
        :
        <StartScreen />}
    </MainContainer>
  )
}

export default Game

const MainContainer = styled.main`
  display: flex;
  width: 350px;
  min-height: 500px;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #fff;

  @media (min-width: 600px) {
    width: 500px;
  }
`