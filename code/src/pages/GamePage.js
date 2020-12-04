import React from 'react'
import styled from "styled-components/macro"
import { useSelector } from 'react-redux'

import { GameContainer } from '../lib/GameContainer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Card } from '../lib/Card'
//import { UserInput } from '../components/UserInput'
//import { StartGame } from '../components/StartGame'

export const GamePage = () => {
  const gamePlay = useSelector(state => state.game.all)
  const gameData = useSelector(state => state.game.all.data)
  // if (!gameData) {
  //   return (
  return (
    <GameContainer coordinates={gameData.coordinates}>
    <Header />
      <Main>
        {!gamePlay.data && <Card />}
      </Main>
    </GameContainer>
  )
}