import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { 
	Button,
	TextField,
	Card,
	CircularProgress
} from '@material-ui/core'
import AirplanemodeActiveSharpIcon from '@material-ui/icons/AirplanemodeActiveSharp';

import { thunk, actionThunk, games } from '../reducers/games'

export const Game = () => {
	const gameDetails = useSelector((store) => store.games)
	const loader = useSelector((store) => store.ui.isLoading)
	const [newUserName, setNewUserName] = useState('')
	const [showStart, setShowStart] = useState(true)

  const dispatch = useDispatch()
  
	const onStart = () => {
		dispatch(thunk(newUserName))
		dispatch(games.actions.setUsername(newUserName))
		setShowStart(false)
	}

	const onAction = (action) => {
		dispatch(actionThunk(newUserName, action))
	}

	return (
		<div className='app-container'>
			{showStart && (
				<form className='form' onSubmit={() => onStart()}>
					<TextField
						variant='filled' 
						placeholder="Write a username"
						color ="secondary"
						type="text"
						label="Type Name Here"
						required
						onChange={(event) => setNewUserName(event.target.value)}
						value={newUserName}
					/>
					<Button
						className='button'
						startIcon = {< AirplanemodeActiveSharpIcon/>}
						variant="contained" 
						color="primary"
						type='submit'>
						Start game
					</Button>
				</form>
			)}

			{loader && (
				<div>
					<CircularProgress/>
					<p>Loading...</p>
				</div>
			)}

			{!showStart && (
				<div className="discreption-container">
					<div className='discription'>
						<p>{gameDetails.description}</p>
					</div>
					<div>
						{gameDetails.actions.map((action) => (
							<Button variant="contained" color="primary" key={action.description} onClick={() => onAction(action)}>
								{action.type} {action.direction}
							</Button>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
