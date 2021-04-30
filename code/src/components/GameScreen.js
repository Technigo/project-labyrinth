import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { nextAction } from '../reducers/gameactions'

const GameScreen = () => {
  const gameStart = useSelector(store => store.gameactions.gamestart)

  const dispatch = useDispatch()

  return (
    <div className="gamescreen-container fade-in">
      <p>{gameStart.description}</p>
      {gameStart.actions.map((action) => (
        <button
          key={action.description}
          onClick={() => dispatch(nextAction(action.direction))}>
          {action.direction}
        </button>
      ))}
    </div>
  )
}

export default GameScreen