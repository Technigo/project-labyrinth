import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import { LoadingIndicator } from './LoadingIndicator'


export const Game = () => {

  const username = useSelector(store => store.labyrinth.username)
  const isLoading = useSelector((store) => store.ui.isLoading)

  return (
    <div>
      {username ?
      isLoading ? <LoadingIndicator /> : <GameScreen />
      :
      <StartScreen />}
    </div>
    )
}

export default Game
