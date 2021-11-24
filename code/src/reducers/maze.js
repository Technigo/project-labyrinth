import { createSlice } from '@reduxjs/toolkit';
import { coolestLoader } from './coolestLoader';

export const maze = createSlice({
	name: 'maze',
	initialState: {
		username: '',
		currentPosition: '',
		loading: false,
	},
	reducers: {
		setUsername: (store, action) => {
			store.username = action.payload;
		},
		setCurrentPosition: (store, action) => {
			store.currentPosition = action.payload;
		},
		setLoading: (store, action) => {
			store.loading = action.payload;
		},
	},
});

export const fetchMazeAlternatives = () => {
	return (dispatch, getState) => {
		dispatch(coolestLoader.actions.setLoading(true));

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: getState().maze.username,
			}),
		};

		fetch('https://wk16-backend.herokuapp.com/start', options)
			.then((res) => res.json())
			.then((json) => {
				dispatch(maze.actions.setCurrentPosition(json));
			})
			.finally(dispatch(coolestLoader.actions.setLoading(false)));
	};
};
export const fetchMazeAlternativesAction = (type, direction) => {
	return (dispatch, getState) => {
		dispatch(coolestLoader.actions.setLoading(true));

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: getState().maze.username,
				type,
				direction,
			}),
		};

		fetch('https://wk16-backend.herokuapp.com/action', options)
			.then((res) => res.json())
			.then((json) => {
				dispatch(maze.actions.setCurrentPosition(json));
			})
			.finally(dispatch(coolestLoader.actions.setLoading(false)));
	};
};
