import React from 'react'
import { useDispatch } from 'react-redux'
import "nes.css/css/nes.min.css";

import game, { continueGame } from '../reducers/game'

const ActionButton = ({ chosenDirection }) => {
  const dispatch = useDispatch()
  const onGameContinue = () => {
    dispatch(game.actions.setAction(chosenDirection))
    dispatch(continueGame())
  }

  return (
    <button onClick={onGameContinue} type="button" className="nes-btn is-primary">Start walking</button>
  )
}
export default ActionButton