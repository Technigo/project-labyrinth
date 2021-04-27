import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Game = () => {
  const gameState = useSelector(store => store.game.gameState)
  return (
    <>
      {gameState === null && <StartScreen />}
      {gameState !== null && <GameScreen />}
    </>
  )
}
export default Game