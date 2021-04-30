import React from 'react'
import { useSelector } from 'react-redux'
 
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Games = () => {
  const actions = useSelector(store => store.games.actions)
  const loading = useSelector(store => store.games.loading)
  // console.log(description)

  return (
    <div>
      {loading && <h1>loading...</h1>}
      {  actions
        ? <GameScreen />
        : <StartScreen />
      }
    </div>
    
  )
}

export default Games