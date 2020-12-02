import React from 'react'
import { useDispatch } from 'react-redux'

import { game } from '../reducers/game'
import { getFirstPosition } from '../reducers/reusable'

export const StartButton = () => {

  const dispatch = useDispatch()

  const onStart = () => {
    const userName = Math.random()
    console.log(userName)
    dispatch(game.actions.setUserName(userName))
    dispatch(getFirstPosition(userName))
  }

  return (
    <button onClick={() => onStart()}>Play game</button>
  )
}