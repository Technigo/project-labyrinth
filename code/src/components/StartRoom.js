//Here lives our username data and game initiation
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { game } from '../reducers/game'
import { GenerateAction } from '../reducers/reusable'

export const StartRoom = () => {

	const dispatch = useDispatch()
	const userName = useSelector((store) => store.game.name)

	const handleSubmit = (event) => {
		event.preventDefault()
		dispatch(GenerateAction(userName))
	}

	const addUsername = (value) => {
		dispatch(game.actions.addUsername(value))
	}


  return(
    <div>
		  <p>Welcome {userName}</p>
	<form onSubmit={handleSubmit}> 
		<input
		onChange={event => addUsername(event.target.value)}
		type="text"
		placeholder="enter your name here..."
		required
		/>
		<button
		type="submit">Start game</button>
	</form>


	  </div>
  )
}