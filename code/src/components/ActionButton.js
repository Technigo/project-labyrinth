import React from 'react'
import { useDispatch } from 'react-redux'

import game, { continueGame } from '../reducers/game'

const ActionButton = ({ direction, type }) => {
  const dispatch = useDispatch()
  const payload = { direction, type }
  const onGameContinue = () => {
    dispatch(game.actions.setAction(payload))
    dispatch(continueGame())
  }

  return (
    <button onClick={onGameContinue}>Go {direction} </button>
  )
}
export default ActionButton