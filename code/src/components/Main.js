import React from 'react'
import { useSelector } from 'react-redux'
import { StartingPage } from './StartingPage'
import { GamePage } from './GamePage'
import { LoadingPage } from './LoadingPage'

export const Main = () => {
  const { coordinates } = useSelector((store) => store.game.currentLocation);
  const isLoading = useSelector((store) => store.ui.isLoading);

  // Depending on if the loading is true or false (see reducer) the loading page is showing
  // If we haven't done the first fetch, there is no coordinates and the startpage
  // will show, otherwise GamePage (which is what is happening when you enter the game)
  return (
    <div>
      {isLoading && <LoadingPage />}
      {coordinates
        ? <GamePage coordinates={coordinates} />
        : <StartingPage />}
    </div>
  )
}