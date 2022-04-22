import React from 'react'
import { useSelector } from 'react-redux';

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const LabyrinthGame = () => {

  const startGame = useSelector((state) => state.game.username);

  return (
    //conditional rendering här? om username === null, startscreen, else gamescreen?
    <>
    {!startGame && <StartScreen />}
    {startGame && <GameScreen />}
    </>
  )
}

export default LabyrinthGame