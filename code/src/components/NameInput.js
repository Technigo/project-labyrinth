import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import labyrinthSlice from 'reducers/labyrinthSlice';

export const NameInput = () => {
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');

	const handleNameInput = (event) => {
		setUsername(event.target.value);
	};

	const handleNameSubmit = (event) => {
		event.preventDefault();
		dispatch(labyrinthSlice.actions.setUsername(username));
		localStorage.setItem('username', username);
	};

	return (
		<>
			<div>
				<input
					onChange={(event) => handleNameInput(event)}
					value={username}
					type='text'
					placeholder='Write your name here..'></input>
				<button
					type='submit'
					onClick={(event) => {
						handleNameSubmit(event);
					}}>
					Enter name
				</button>
			</div>
		</>
	);
};
