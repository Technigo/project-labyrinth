import React from 'react'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const LabyrinthGame = () => {
  return (
    //conditional rendering här? om username === null, startscreen, else gamescreen?
    <>
    <StartScreen />
    <GameScreen />
    </>
  )
}

export default LabyrinthGame