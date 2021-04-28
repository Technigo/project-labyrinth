import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from 'components/StartScreen'
import GameScreen from 'components/GameScreen'
// import games from 'reducers/games'

const GameBoard = () => {
  // const game = useSelector(store => store.games)
  const username = useSelector(store => store.games.username)
  console.log(username)

  return (
    <div>
      {/* { <StartScreen /> }
      {game.username} */}

      { username? <GameScreen /> : <StartScreen /> }
      
    </div>
  )
}

export default GameBoard
