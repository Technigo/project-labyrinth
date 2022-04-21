import { createSlice } from '@reduxjs/toolkit';
import { API_START_URL, API_ACTION_URL } from 'utils/urls';

export const gamereducer = createSlice({
	name: 'gamereducer',
	initialState: {
		currentPosition: null,
		username: null,
		history: [],
		loading: false,
	},

	reducers: {
		setCurrentPosition: (store, action) => {
			if (store.currentPosition !== null) {
				store.history.push(store.currentPosition);
			}
			store.currentPosition = action.payload;
		},

		setHistory: (store, action) => {
			if (store.history.length !== 0) {
				store.currentPosition = store.history[store.history.length - 1];
			}
		},

		setUsername: (store, action) => {
			store.username = action.payload;
		},

		setLoading: (store, action) => {
			store.loading = action.payload;
		},
	},
});

export const startGame = () => {
	return (dispatch, getState) => {
		dispatch(gamereducer.actions.setLoading(true));
		fetch(API_START_URL, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ username: getState().gamereducer.username }),
		})
			.then((res) => res.json())
			.then((data) => dispatch(gamereducer.actions.setCurrentPosition(data)))
			.finally(() => dispatch(gamereducer.actions.setLoading(false)));
	};
};

export const nextStep = (type, direction) => {
	return (dispatch, getState) => {
		dispatch(gamereducer.actions.setLoading(true));
		fetch(API_ACTION_URL, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				username: getState().gamereducer.username,
				type,
				direction,
			}),
		})
			.then((res) => res.json())
			.then((data) => dispatch(gamereducer.actions.setCurrentPosition(data)))
			.finally(() => dispatch(gamereducer.actions.setLoading(false)));
	};
};
