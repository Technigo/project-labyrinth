import React from 'react'
import { useSelector } from 'react-redux'
import { StartingPage } from './StartingPage'
import { GamePage } from './GamePage'

export const Main = () => {
  const { coordinates } = useSelector((store) => store.game.currentLocation);
  console.log(`currL: ${coordinates}`)
  return (
    <div>
      {coordinates
        ? <GamePage />
        : <StartingPage />}
    </div>
  )
}