import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Main = () => {
  const step = useSelector(store => store.directions.step)

  return (
    <main className="main">
      {step
        ? <GameScreen />
        : <StartScreen />
      }
    </main>
  )
}

export default Main