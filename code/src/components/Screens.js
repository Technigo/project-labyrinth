import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import Gamescreen from './GameScreen'

const Screens = () => {
  const gameStart = useSelector(store => store.gameactions.gamestart)

  return (
    <div>
      {(gameStart === null) && <StartScreen />}
      {(gameStart !== null) && <Gamescreen />}
    </div>
  )
}

export default Screens
