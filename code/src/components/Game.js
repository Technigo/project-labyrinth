import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameplayScreen from './GameplayScreen'

const Game = () => {
  const username = useSelector(store => store.game.username)

  return (
    <>
			{username
        ? <GameplayScreen />
        : <StartScreen /> 
			}  
    </>
  )
}

export default Game