import React from 'react'
import "nes.css/css/nes.min.css"
import { useDispatch } from 'react-redux'

import game, { advance } from '../reducers/game'

const RestartButton = () => {

  const dispatch = useDispatch()

	const onRestart = () => {
    dispatch(game.actions.setUsername(""))
    dispatch(game.actions.setGameState({ 
      coordinates: 0,
      description: "",
      actions: [], 
    }))
  }

  return (
    <button 
			type="button" 
			className="nes-btn is-error" 
			onClick={onRestart}
		>
			RESTART
		</button>
  )
}

export default RestartButton