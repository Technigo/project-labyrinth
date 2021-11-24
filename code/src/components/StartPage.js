import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchMazeAlternatives, maze } from '../reducers/maze';

export const StartPage = () => {
	const dispatch = useDispatch();

	const handleInputChange = (event) => {
		dispatch(maze.actions.setUsername(event.target.value));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(fetchMazeAlternatives());
	};

	return (
		<>
			<h1>Want to enter the labyrinth!?</h1>

			{/* Remember to use a form tag and the onSubmit event to handle enter clicks AND button clicks in one go */}
			<form onSubmit={handleSubmit}>
				<label>
					Add your username
					<input type="text" required onChange={handleInputChange} />
				</label>
				<button type="submit">Lets go</button>
			</form>
		</>
	);
};
