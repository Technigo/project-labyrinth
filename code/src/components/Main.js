import React from 'react'
import { useSelector } from 'react-redux'
import { StartingPage } from './StartingPage'
import { GamePage } from './GamePage'

export const Main = () => {
  const location = useSelector((store) => store.game.location);

  return (
    <div>
      {location
        ? <GamePage />
        : <StartingPage />}
    </div>
  )
}