import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import SpinLoader from './SpinLoader'

const Labyrinth = () => {
  const labyrinth = useSelector((store) => store.labyrinth.username)
  console.log(labyrinth)
  const isLoading = useSelector((store) => store.loader.isLoading)

  return (
    <>
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div>{labyrinth ? <GameScreen /> : <StartScreen />}</div>
      )}
    </>
  )
}

export default Labyrinth
