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
  width: 90%;
  max-width: 700px;
  min-height: 500px;
  flex-direction: column;
  margin: 20px auto;
  border-radius: 5px;
  background-color: #fff;
  /* box-shadow: 
    0px 2px 1px -1px rgb(0 0 0 / 20%), 
    0px 1px 1px 0px rgb(0 0 0 / 14%), 
    0px 1px 3px 0px rgb(0 0 0 / 12%); */
`
