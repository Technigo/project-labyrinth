import React from "react";

import { createSlice } from "@reduxjs/toolkit";

export const startSlice = createSlice({
	name: "startSlice",
	initialState: {
		username: "",
	},
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload;
		},
	},
});

export const fetchUsername = () => {
	const options = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username: startSlice.username }),
	};

	return (dispatch) => {
		fetch("https://wk16-backend.herokuapp.com/start", options)
			.then((response) => response.json())
			.then((json) => {
				dispatch(startSlice.actions.setUsername(json));
			});
	};
};
