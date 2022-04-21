import React from 'react'
import { useSelector } from 'react-redux';

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const LabyrinthGame = () => {
  const username = useSelector(state => state.game.username)

  return (
    <>
    {username
      ? <GameScreen /> 
      : <StartScreen />
    }
    </>
  )
}

export default LabyrinthGame