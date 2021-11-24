import { createSlice } from '@reduxjs/toolkit';
import { coolestLoader } from './coolestLoader';

export const maze = createSlice({
	name: 'maze',
	initialState: {
		mazeList: [{ description: 'hahahaah', direction: '' }],
	},
	reducers: {
		setMazeList: (state, action) => {
			state.mazeList = action.payload;
		},
	},
});

export const fetchMazeAlternatives = () => {
	return (dispatch) => {
		dispatch(coolestLoader.actions.setLoading(true));

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: 'banan',
			}),
		};

		fetch('https://wk16-backend.herokuapp.com/start', options)
			.then((res) => res.json())
			.then((json) => {
				dispatch(maze.actions.setMazeList(json));
				dispatch(coolestLoader.actions.setLoading(false));
			});
	};
};
export const fetchMazeAlternativesAction = (direction) => {
	return (dispatch) => {
		dispatch(coolestLoader.actions.setLoading(true));

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: 'banan',
				// uniqueID??? kanske googlar mvh vad cd code
				type: 'move',
				direction: direction,
				// error här^
			}),
		}; // gr8

		fetch('https://wk16-backend.herokuapp.com/action', options)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				dispatch(maze.actions.setMazeList(json));
				dispatch(coolestLoader.actions.setLoading(false));
			});
	};
};

// detta är andra APIN https://wk16-backend.herokuapp.com/action
