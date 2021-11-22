import { createSlice } from "@reduxjs/toolkit";

export const moveSlice = createSlice({
	name: "moveSlice",
	initialState: {
		game: [],
	},
	reducers: {
		setGame: (state, action) => {
			state.game = action.payload;
		},
	},
});

export const fetchAction = () => {
	return (dispatch) => {
		fetch("https://wk16-backend.herokuapp.com/action")
			.then((response) => response.json())
			.then((json) => {
				dispatch(moveSlice.actions.setGame(json));
			});
	};
};
