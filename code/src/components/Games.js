import React from 'react'
import { useSelector } from 'react-redux'
 
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Games = () => {
  const actions = useSelector(store => store.games.actions)
  // console.log(description)

  return (
    <div>
      {  actions
        ? <GameScreen />
        : <StartScreen />
      }
    </div>
    
  )
}

export default Games