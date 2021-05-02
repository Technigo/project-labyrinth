import React from 'react'
import { useDispatch } from 'react-redux'
import "nes.css/css/nes.min.css";

import game from '../reducers/game'

const RestartButton = () => {
  const dispatch = useDispatch()
  const onGameRestart = () => {
    dispatch(game.actions.setGameState(null))
  }

  return (
    <button
      onClick={onGameRestart}
      type="button"
      className="nes-btn is-primary">
      Restart
    </button>
  )
}
export default RestartButton