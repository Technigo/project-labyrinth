import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import Gamescreen from './GameScreen'
import Footer from './Footer'

const Screens = () => {
  const gameStart = useSelector(store => store.gameactions.gamestart)

  return (
    <div>
      {(gameStart === null) && <StartScreen />}
      {(gameStart !== null) && <Gamescreen />}
      <Footer />
    </div>
  )
}

export default Screens
