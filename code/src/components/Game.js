import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNextPosition } from '../reducers/game'

const Game = () => {
  
  const testing = useSelector((state) => state.game.currentPosition)
  const userName = useSelector((state) => state.game.username)

  const dispatch = useDispatch()

  const onAction = (actionDirection) => {
    dispatch(getNextPosition(actionDirection, userName))
  }

  return (
    <div>
   
      {testing && (
        <>
          <h1>{testing.description}</h1>
          {testing.actions.map(action => {
            console.log(action.direction)
            console.log(userName)
            return (
              <>
              <button onClick={() => onAction(action.direction)}>Go {action.direction}</button>
              <p>{action.description}</p>
              </>
            )
          })}
        </>
      )}
    </div>
  )
}

export default Game