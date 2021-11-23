import { createSlice } from "@reduxjs/toolkit";

export const game = createSlice({
	name: "game",
	initialState: {
		username: "",
		data: [],
		// gameStatus: {},
		// history: [],
	},
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload;
		},
		setData: (state, action) => {
			state.data = action.payload;
		},
		// setGameStatus: (state, action) => {
		// 	if (state.gameStatus) {
		// 		state.history = [...state.history, state.gameStatus]
		// 	}
		// 	state.data = action.payload;
		// },
	},
});

export const fetchGameData = (username) => {
	return (dispatch) => {
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username }),
		};
		console.log("are you fetching?");

		fetch("https://wk16-backend.herokuapp.com/start", options)
			.then((response) => response.json())
			.then((json) => {
				dispatch(game.actions.setData(json));
			});
	};
};
