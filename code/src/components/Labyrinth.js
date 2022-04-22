import React from 'react'
import { useSelector } from 'react-redux'
import { Loading } from './Loading'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Labyrinth = () => {
  const labyrinth = useSelector((store) => store.labyrinth.username)
  const isLoading = useSelector((store) => store.loader.isLoading)

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>{labyrinth ? <GameScreen /> : <StartScreen />}</div>
      )}
    </>
  )
}

export default Labyrinth
