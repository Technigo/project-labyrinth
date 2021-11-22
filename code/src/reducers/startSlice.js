import { createSlice } from "@reduxjs/toolkit";

export const startSlice = createSlice({
	name: "startSlice",
	initialState: {
		username: "",
		data: [],
	},
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload;
		},
		setData: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const fetchUsername = (username) => {
	console.log(username);

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
				dispatch(startSlice.actions.setData(json));
			});
	};
};
