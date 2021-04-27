import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import games, { generateMove } from '../reducers/games'

const Description = () => {
  const ourUserName = useSelector(store => store.games.username)
  const userActions = useSelector(store => store.games.description.actions)
 
  const dispatch = useDispatch()

  return (
    <div>
      {userActions.map(action=> (
        <div key={action.type}>
          <button 
            className="nes-btn is-warning"
            type='button'
            onClick={() => dispatch(generateMove(ourUserName, action.direction))}
          >
            {action.direction}
          </button>
          <p>{action.description}</p>
        </div>
          ))}
      </div>
  )
}

export default Description