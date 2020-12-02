import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Button } from '../lib/Button'
import { fetchActionData } from '../reducers/thunk'

export const TheLabyrinth = () => {
  const gameData = useSelector(state => state.game.all.data)
  const username = useSelector(state => state.game.username)

  const dispatch = useDispatch()

  // this is the actions found previously in button
  // updated thunk so it has the params of username, move, direction
  // so username, direction and type is not hardcorded into 'xxxx'
  const handleActionClick = (type, direction) => {
    dispatch(fetchActionData(username, type, direction))
  }

  return (
    <>
    <div>
    <p>{gameData.coordinates}</p>
      <p>{gameData.description}</p>
      <p>{gameData.direction}</p>
    </div>
    <div>
      {/* //this was originally in Card */}
      {/* // The mapfunction needs to have a key */}
      {gameData.actions.map(item => (
        <Button onClick={() => handleActionClick(item.type, item.direction)}>
          {/* // this was also in button before */}
          {item.direction}
        </Button>
      ))}
    </div>
    </>
  )

  // 


}


