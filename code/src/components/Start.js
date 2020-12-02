import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getFirstPosition } from '../reducers/reusable'

export const Start = () => {

  const userName = useSelector(store => store.game.userName)
  const dispatch = useDispatch()

  const onStart = () => {
    console.log(userName)
    dispatch(getFirstPosition(userName))
  }

  return (
    <button onClick={() => onStart()}>Play game</button>
  )
}