import React from 'react'
import { useSelector } from 'react-redux'

import StartPage from './StartPage'
import Labyrinth from './Labyrinth'
import Loader from './Loader'

const Game = () => {
  const loading = useSelector((state) => state.ui.loading)

  const currentCoordinates = useSelector(
    (state) => state.game.currentCoordinates
  )

  if (loading) {
    return <Loader />
  }
  return currentCoordinates ? <Labyrinth /> : <StartPage />
}

export default Game
