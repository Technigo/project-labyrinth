import React from 'react'
import { useDispatch } from 'react-redux'
import "nes.css/css/nes.min.css";

import game, { continueGame } from '../reducers/game'

const ActionButton = ({ direction, type }) => {
  const dispatch = useDispatch()
  const payload = { direction, type }
  const onGameContinue = () => {
    dispatch(game.actions.setAction(payload))
    dispatch(continueGame())
  }

  return (
    <>
      <button onClick={onGameContinue} type="button" className="nes-btn is-primary">Start walking</button>
      <label>
        <input type="radio" className="nes-radio" name="answer" checked />
        <span>{direction}</span>
      </label>
    </>
  )
}
export default ActionButton