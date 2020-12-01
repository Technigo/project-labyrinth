import React from 'react'
import { useDispatch } from 'react-redux'

import { game } from '../reducers/game'
import { generateStartMove } from '../reducers/fetch'

export const GameControl = () => {
  const dispatch = useDispatch()

  const onGameGenerate = () => {
    dispatch(generateStartMove())
  }

  return (
    <>
      <button onClick={onGameGenerate}>Click</button>

    </>
  )
}