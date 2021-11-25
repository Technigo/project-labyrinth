import React from 'react';
import { useDispatch } from 'react-redux';
import { labyrinthSlice } from 'reducers/labyrinthSlice';

import { startGameThunk } from 'reducers/labyrinthSlice';

export const Starting = () => {
	const dispatch = useDispatch();

	const handleNameInput = (event) => {
		dispatch(labyrinthSlice.actions.setUserName(event.target.value));
	};

	const start = (event) => {
		event.preventDefault();
		dispatch(startGameThunk());
	};

	return (
		<>
			<h1>Welcome, do you want to enter our Labyrinth?</h1>
			<form onSubmit={start}>
				<input onChange={handleNameInput} type='text' required></input>
				<button type='submit'>Enter name</button>
			</form>
		</>
	);
};
