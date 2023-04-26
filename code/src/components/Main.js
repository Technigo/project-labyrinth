import React from 'react'
import { useSelector } from 'react-redux'
import StartScreen from './StartScreen'
import GameBoard from './GameBoard'

export const Main = () => {
  const { coordinates } = useSelector((store) => store.game.currentLocation)
  const isLoading = useSelector((store) => store.ui.isLoading)

  return (
    <div>
      {isLoading && <div> Loading... </div>}
      {coordinates
        ? <GameBoard coordinates={coordinates} />
        : <StartScreen />}
    </div>
  )
}

