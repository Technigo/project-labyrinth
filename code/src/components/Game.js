import React from 'react'
import { useSelector } from 'react-redux'

import StartPage from './StartPage'
import Labyrinth from './Labyrinth'
import Loader from './Loader'

const Game = () => {
  const currentCoordinates = useSelector(
    (state) => state.game.currentCoordinates
  )

  return (
    <>
      {currentCoordinates ? <Labyrinth /> : <StartPage />}
      <Loader />
    </>
  )
}

export default Game
