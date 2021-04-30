import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import LoadingScreen from './LoadingScreen'

const Main = () => {
  const step = useSelector(store => store.directions.step)
  const loading = useSelector(store => store.directions.loading)

  return (
    <main className="main">
      {loading && 
        (<LoadingScreen />)}
      {step && !loading && 
        (<GameScreen />)}
      {!step && !loading && 
        (<StartScreen />)}
    </main>
  )
}

export default Main