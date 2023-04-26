import React from 'react'
import { useSelector } from 'react-redux'
import StartScreen from './StartScreen'
import { GameBoard } from './GameBoard'
import Loading from './Loading';

export const Main = () => {
  const { coordinates } = useSelector((store) => store.game.currentLocation)
  const isLoading = useSelector((store) => store.ui.isLoading)

  return (
    <div>
      {isLoading && <Loading />}
      {coordinates
        ? <GameBoard coordinates={coordinates} />
        : <StartScreen />}
    </div>
  )
}

