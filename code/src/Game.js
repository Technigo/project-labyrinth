import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { thunk, actionThunk, games } from './reducers/games';

export const Game = () => {
	const userName = useSelector((store) => store.games.username);
	const gameDetails = useSelector((store) => store.games);
	const [newUserName, setNewUserName] = useState('');

	const dispatch = useDispatch();
	const onStart = () => {
		dispatch(thunk(newUserName));
		dispatch(games.actions.setUsername(newUserName));
	};

	const onAction = (action) => {
		dispatch(actionThunk(newUserName, action));
	};

	return (
		<div>
			<input
				type="text"
				onChange={(event) => setNewUserName(event.target.value)}
				value={newUserName}
			/>

			<button onClick={() => onStart()}>Start game</button>
			{/* <button onClick={() => dispatch(games.actions.resetGame())}>
				Reset game
			</button> */}
			<p>Description: {gameDetails.description}</p>
			{gameDetails.actions.map((action) => (
				<button key={action.description} onClick={() => onAction(action)}>
					{action.type} {action.direction}
				</button>
			))}
		</div>
	);
};
