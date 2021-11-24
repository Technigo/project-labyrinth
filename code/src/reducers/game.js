import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const game = createSlice({
	name: "game",
	initialState: {
		username: "",
		currentPosition: null,
		isGameStarted: false,
		history: [],
	},
	reducers: {
		setGameStarted: (state) => {
			state.isGameStarted = !state.isGameStarted;
		},
		setUsername: (state, action) => {
			state.username = action.payload;
		},
		setCurrentPosition: (state, action) => {
			if (state.currentPosition) {
				state.history = [...state.history, state.currentPosition];
			}
			state.currentPosition = action.payload;
		},
	},
});

export const startGame = (username) => {
	return (dispatch) => {
		dispatch(ui.actions.setLoading(true));
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username }),
		};

		fetch("https://wk16-backend.herokuapp.com/start", options)
			.then((response) => response.json())
			.then((json) => {
				dispatch(game.actions.setCurrentPosition(json));
			})
			.finally(() => dispatch(ui.actions.setLoading(false)));
	};
};

export const nextStep = (direction) => {
	return (dispatch, getState) => {
		dispatch(ui.actions.setLoading(true));
		const state = getState();
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: state.game.username,
				type: "move",
				direction,
			}),
		};

		fetch("https://wk16-backend.herokuapp.com/action", options)
			.then((response) => response.json())
			.then((json) => {
				dispatch(game.actions.setCurrentPosition(json));
			})
			.finally(() => dispatch(ui.actions.setLoading(false)));
	};
};
