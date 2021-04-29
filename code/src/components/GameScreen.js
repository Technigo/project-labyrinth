import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import gameactions, { nextAction, generateGame } from '../reducers/gameactions'

const GameScreen = () => {
  const gameStart = useSelector(store => store.gameactions.gamestart)
  const dispatch = useDispatch()

  const onDirection = (action) => {
    dispatch(gameactions.actions.setActions(action.description))
    dispatch(nextAction())
  }

  return (
    <div>
      <p>{gameStart.description}</p>
      {gameStart.actions.map((action) => (
        <button
          key={action.description}
          onClick={onDirection(action)}>
          {action.direction}
        </button>
      ))}
    </div>
  )
}

export default GameScreen