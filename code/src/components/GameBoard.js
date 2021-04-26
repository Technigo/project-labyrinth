import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const GameBoard = () => {
  //const game = useSelector(store => store.games.games.game)
  
  return (
    <div>
      <StartScreen />
      {/* {game
        ? <GameScreen />
        : <StartScreen />
      } */}
    </div>
  )
}

export default GameBoard
