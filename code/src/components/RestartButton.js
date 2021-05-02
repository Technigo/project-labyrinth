import React from 'react'
import { useDispatch } from 'react-redux'

import labyrinth from '../reducers/labyrinth'

const RestartButton = ({setBackground}) => {
  const dispatch = useDispatch()
  const onGameRestart = () => {
    dispatch(labyrinth.actions.restartGame())
    setBackground("/assets/labyrinth-Background.jpg")
  }

  return (
    <button
      className="restart"
      onClick={onGameRestart}
    >
      Restart
    </button>
  )
}
export default RestartButton