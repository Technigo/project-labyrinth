import React from 'react'

import { useSelector } from 'react-redux'
import { Game } from './Game'
import { CreateUsername } from './CreateUsername'

export const GameWrapper = () => {
  const username = useSelector(state => state.rooms.username)

  return (
    <div className="game-container">
      {/* Om username är "" i initialState, visa upp createUsername  */}
      {console.log(username)}
      {
        username === "" &&
        <CreateUsername />
      }
      {
        username !== "" &&
        <Game />
      }
    </div>
  )
} 
