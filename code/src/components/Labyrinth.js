import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { labyrinthSlice, startGame } from 'reducers/labyrinthSlice';

export const Labyrinth = () => {
	const dispatch = useDispatch();
	const gameData = useSelector((store) => store.labyrinthSlice);
	const [username, setUsername] = useState('');
	const [beginning, setBeginning] = useState(true);

	const handleNameInput = (event) => {
		setUsername(event.target.value);
	};

	const start = () => {
		dispatch(startGame(username));
		dispatch(labyrinthSlice.actions.setUserName(username));
		setBeginning(false);
	};
	// const username = useSelector((store) => store.labyrinthSlice.username);
	return (
		<>
			{beginning && (
				<div>
					<input
						onChange={(event) => handleNameInput(event)}
						value={username}
						type='text'
						placeholder='Write your name here..'></input>
					<button type='submit' onClick={() => start()}>
						Enter name
					</button>
				</div>
			)}
			{!beginning && (
				<div>
					<h2>{gameData.description}</h2>
					{gameData.actions.map((action) => {
						<button key={action.description}>{action.choices}</button>;
					})}
				</div>
			)}
		</>
	);
};
