import { createSlice } from '@reduxjs/toolkit';

export const labyrinthSlice = createSlice({
	name: 'labyrinthSlice',
	initialState: {
		username: '',
		choices: [],
		description: '',
		coordinates: '',
	},
	reducers: {
		startGame: (state, action) => {
			state.choices = action.payload.choices;
			state.description = action.payload.description;
			state.coordinates = action.payload.coordinates;
		},
		continueGame: (state, action) => {
			state.choices = action.payload.choices;
			state.description = action.payload.description;
			state.coordinates = action.payload.coordinates;
		},
		setUserName: (state, action) => {
			state.username = action.payload;
		},
	},
});

export const startGame = (username) => {
	return (dispatch) => {
		fetch('https://wk16-backend.herokuapp.com/start', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};
};

export const {} = labyrinthSlice.actions;
export default labyrinthSlice.reducer;
