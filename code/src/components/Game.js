import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameplayScreen from './GameplayScreen'
import WinScreen from './WinScreen'

const Game = () => {
  const username = useSelector(store => store.game.username)
  const coordinates = useSelector(store => store.game.coordinates)

  return (
    <div className="game-wrapper">
			{username
        ? coordinates === "1,3" 
          ? <WinScreen /> 
          : <GameplayScreen />
        : <StartScreen /> 
			} 
    </div>
  )
}

export default Game