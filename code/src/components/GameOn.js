import React from 'react'
import { useSelector } from 'react-redux'

import { StartPage } from './StartPage'
import { TheLabyrinth } from './TheLabyrinth'
// import { LoadingIndicator } from './LoadingIndicator'

export const GameOn = () => {
  const currentPosition = useSelector(store => store.labyrinth.currentPosition)

  return (
    <>
      {currentPosition ? <TheLabyrinth /> : <StartPage />}
      {/* <LoadingIndicator /> */}
    </>
  )
}