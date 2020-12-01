import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
		<div>
			{showStart && (
				<div>
					<input
						placeholder="Write a username"
						type="text"
						onChange={(event) => setNewUserName(event.target.value)}
						value={newUserName}
					/>
					<button
						onClick={() => onStart()}>
						Start game
					</button>
				</div>
			)}

			{loader && (
				<div>
					<p>Loading...</p>
				</div>
			)}

			{!showStart && (
				<div>
					<div>
						<p>{gameDetails.description}</p>
					</div>
					<div>
						{gameDetails.actions.map((action) => (
							<button key={action.description} onClick={() => onAction(action)}>
								{action.type} {action.direction}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
