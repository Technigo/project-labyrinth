import React from 'react'
import { useSelector } from 'react-redux'

import { EnterLabyrinth } from './EnterLabyrinth' 
import { InsideLabyrinth } from './InsideLabyrinth'
import { LoadingIndicator } from './LoadingIndicator'

export const Game = () => {
  const labyrinthData = useSelector(store => store.game.labyrinthData)

  return (
    <>
    {labyrinthData ? <InsideLabyrinth /> : <EnterLabyrinth />}
    <LoadingIndicator />
    </>
  )
}