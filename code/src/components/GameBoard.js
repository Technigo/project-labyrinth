import React from 'react'
import { useSelector } from 'react-redux'

import { games } from '../reducers/games'
import { createPlayer } from '../reducers/games'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const GameBoard = () => {
  //const game = useSelector(store => store.games.games)
  //const username = useSelector((store) => store.games.username)
  //console.log(game.username)

  return (
    <div>
      <StartScreen />
      {/* { username
        ? <GameScreen />
        : <StartScreen />
      }  */}
    </div>
  )
}

export default GameBoard
