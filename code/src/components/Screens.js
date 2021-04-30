import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import Gamescreen from './GameScreen'


const Screens = () => {
  const gameStart = useSelector(store => store.gameactions.gamestart)
  const loading = useSelector(store => store.gameactions.loading)
  return (
    <div>
      {loading && <h1>Loading</h1>}
      {(gameStart === null) && <StartScreen />}
      {(gameStart !== null) && <Gamescreen />}
    </div>
  )
}

export default Screens