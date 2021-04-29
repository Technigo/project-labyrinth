import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Game = () => {
  const gameState = useSelector(store => store.game.gameState)
  const loading = useSelector(store => store.game.loading)
  return (
    <>
      {loading && <h1 className="loading-text" >LOADING...</h1>}
      {(!loading && gameState === null) && <StartScreen />}
      {(!loading && gameState !== null) && <GameScreen />}
    </>
  )
}
export default Game