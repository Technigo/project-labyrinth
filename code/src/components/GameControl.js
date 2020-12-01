import React from 'react'
import { useDispatch } from 'react-redux'

import { game } from '../reducers/game'
import { generateNewMove } from '../reducers/fetch'

export const GameControl = () => {
  const dispatch = useDispatch()

  const onGameGenerate = () => {
    dispatch(generateNewMove())
  }

  return (
    <>
      <button onClick={onGameGenerate}>Click</button>
    </>
  )
}