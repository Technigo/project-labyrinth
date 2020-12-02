import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getNextPosition } from '../reducers/reusable'
import { StartButton } from './StartButton'

export const ActionList = () => {

  const actions = useSelector(store => store.game.gameState.actions)
  const userName = useSelector(store => store.game.userName)
  const dispatch = useDispatch()

  const onAction = (action) => {
    dispatch(getNextPosition(action, userName))
  }

  return (
    <>
      {actions.map((action, index) => {
        return (
          <div key={index}>
            <p>{action.description}</p>
            <button onClick={() => onAction(action)}>Go {action.direction}</button>
          </div>
        )
      })}
      {actions.length === 0 && <StartButton />}
    </>
  )
}