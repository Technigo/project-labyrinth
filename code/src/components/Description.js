import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import games, { generateMove } from '../reducers/games'

const Description = () => {
  const userName = useSelector(store => store.games.username)
  const description = useSelector(store => store.games.description.description)
  const userActions = useSelector(store => store.games.description.actions)
 
  const dispatch = useDispatch()

  return (
    <div>
      <p>{description}</p>
      {userActions.map(action=> (
        <div>
          <button 
            className="nes-btn is-warning"
            type='button'
            onClick={() => dispatch(generateMove(userName, action.direction))}
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