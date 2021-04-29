import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import game, { nextStep } from 'reducers/game'

const InGame = () => {
  const direction = useSelector((store) => store.game.direction)
  const actions = useSelector((store) => store.game.direction.actions)
  const usernameFinal = useSelector((store) => store.game.username)
  const history = useSelector((store) => store.game.history)
  const dispatch = useDispatch() 

  const onSetHistoryReverse = () => {
    dispatch(game.actions.setHistoryReverse())
  }


  return (
    <div>
        <p>{direction.description}</p>
        <button disabled={!history.length} onClick={onSetHistoryReverse}>Back</button>
        {
          actions.map((action) => (
            <div key={action.description}>
              <p>{action.description}</p>
              <button onClick={() => dispatch(nextStep(usernameFinal, action.direction))}>{action.direction}</button>
            </div>
          ))
        }
  </div>
  )
}

export default InGame