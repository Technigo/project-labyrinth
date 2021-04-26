import React from 'react'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import { useSelector } from 'react-redux'

const Labyrinth = () => {
  const username = useSelector(store => store.labyrinth.username)

  console.log(username)

  return (
    <main>
      <StartScreen />
      <GameScreen />
    </main>
  )
}

export default Labyrinth