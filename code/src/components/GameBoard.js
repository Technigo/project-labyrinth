import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import InGame from './InGame'

const GameBoard = () => {
  const checkUsername = useSelector(store => store.game.direction)
  return (
    <div>
      {checkUsername 
        ? <InGame /> 
        : <StartScreen />
      }
    </div>
  )
}

export default GameBoard