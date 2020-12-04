import React from 'react'
import { useSelector } from 'react-redux'

import { GameContainer } from '../lib/Containers'
import { Header } from '../components/Header'
import { Main } from '../lib/Containers'
import { Card } from '../lib/Card'

export const GamePage = () => {
  const gamePlay = useSelector(state => state.game.all)
  const gameData = useSelector(state => state.game.all.data)
  
  return (
    <GameContainer coordinates={gameData.coordinates}>
    <Header />
      <Main>
        {!gamePlay.data && <Card />}
      </Main>
    </GameContainer>
  )
}