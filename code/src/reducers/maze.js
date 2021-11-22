import { createSlice } from '@reduxjs/toolkit';
import { coolestLoader } from './coolestLoader';

export const maze = createSlice({
	name: 'maze',
	initialState: {
		mazeList: [{ description: 'hahahaah' }],
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
		fetch('https://wk16-backend.herokuapp.com/start', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username: 'FellowTraveler' }),
		})
			.then((res) => res.json())
			.then((json) => {
				dispatch(maze.actions.setMazeList(json));
				dispatch(coolestLoader.actions.setLoading(false));
			});
	};
};
