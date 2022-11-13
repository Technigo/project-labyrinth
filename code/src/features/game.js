import { createSlice } from '@reduxjs/toolkit';

const startUrl = 'https://labyrinth-technigo.herokuapp.com/start';
const actionUrl = 'https://labyrinth-technigo.herokuapp.com/action';
const initialState = {
	username: '',
	gameStatus: null,
	loading: false,
};
export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setUsername: (state, action) => {
			state.username = action.payload;
		},
		setGameStatus: (state, action) => {
			state.gameStatus = action.payload;
		},
		restart: () => {
			return initialState;
		},
	},
});

export const { setLoading, setUsername, setGameStatus, restart } =
	gameSlice.actions;

export const startGame = () => {
	return (dispatch, getState) => {
		dispatch(setLoading(true));
		fetch(startUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: getState().game.username }),
		})
			.then((res) => res.json())
			.then((json) => {
				dispatch(setGameStatus(json));
				//console.log(json);
				dispatch(setLoading(false));
			});
	};
};

export const makeMoves = (type, direction) => {
	return (dispatch, getState) => {
		dispatch(setLoading(true));
		fetch(actionUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: getState().game.username,
				type,
				direction,
			}),
		})
			.then((res) => res.json())
			.then((json) => {
				dispatch(setGameStatus(json));
				dispatch(setLoading(false));
			});
	};
};
