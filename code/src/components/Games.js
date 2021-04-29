import React from 'react'
import { useSelector } from 'react-redux'
 
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Games = () => {
  const description = useSelector(store => store.games.description)
  // console.log(description)

  return (
    <div>
      {description
        ? <GameScreen />
        : <StartScreen />
      }
    </div>
    
  )
}

export default Games