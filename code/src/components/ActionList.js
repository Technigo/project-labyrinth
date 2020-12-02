import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { nextPosition } from '../reducers/reusable'

export const ActionList = () => {

  const actions = useSelector(store => store.game.gameState.actions)
  const userName = useSelector(store => store.game.userName)
  const dispatch = useDispatch()

  const onAction = (action) => {
    dispatch(nextPosition(action, userName))
  }

  return (
    <>
      {actions.map(item => {
        return (
          <>
            <p>{item.description}</p>
            <button onClick={() => onAction(item)}>Go {item.direction}</button>
          </>
        )
      })}
    </>
  )
}