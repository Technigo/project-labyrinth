import React from 'react'
import { useDispatch } from 'react-redux'

import { startGame } from '../reducers/game'

const StartGame = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <p>Hello Technigoa, this game works like this</p>
      <p>blablabla</p>
      <p>blablabla</p>
      <p>blablabla</p>
      <p>Click this button to start the game</p>
      <button
        type="button"
        onClick={() => dispatch(startGame())}
      >Click</button>
    </div>
  )
}

export default StartGame
