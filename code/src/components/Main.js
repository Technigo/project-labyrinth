import React from 'react'
import { useSelector } from 'react-redux'
import { StartingPage } from './StartingPage'
import { GamePage } from './GamePage'
import { LoadingPage } from './LoadingPage'

export const Main = () => {
  const { coordinates } = useSelector((store) => store.game.currentLocation);
  const isLoading = useSelector((store) => store.ui.isLoading);

  return (
    <div>
      {coordinates
        ? <GamePage coordinates={coordinates} />
        : <StartingPage />}
      {isLoading && <LoadingPage />}
    </div>
  )
}