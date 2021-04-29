import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import game, { nextStep } from 'reducers/game'

const InGame = () => {
  const direction = useSelector((store) => store.game.direction)
  const actions = useSelector((store) => store.game.direction.actions)
  const username = useSelector((store) => store.game.username)
  const dispatch = useDispatch() 

  console.log('action:', actions)

  console.log(direction)


  return (
    <div>
        <p>{direction.description}</p>
        {
          actions.map((action) => (
            <div key={action.description}>
              <p>{action.description}</p>
              <button onClick={() => dispatch(nextStep(username, action.direction))}>{action.direction}</button>
            </div>
          ))
        }
  </div>
  )
}

export default InGame