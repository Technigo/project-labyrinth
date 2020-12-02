import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getNextPosition } from '../reducers/reusable'
import { Start } from './Start'

export const ActionList = () => {

  const actions = useSelector(store => store.game.gameState.actions)
  const userName = useSelector(store => store.game.userName)
  const dispatch = useDispatch()

  const onAction = (action) => {
    dispatch(getNextPosition(action, userName))
  }

  return (
    <>
      {actions && actions.map(item => {
        return (
          <>
            <p>{item.description}</p>
            <button onClick={() => onAction(item)}>Go {item.direction}</button>
          </>
        )
      })}
      {actions.length === 0 &&
        <Start />
      }
    </>
  )
}