import { createSlice } from '@reduxjs/toolkit';

export const labyrinthSlice = createSlice({
	name: 'labyrinthSlice',
	initialState: {
		username: null,
		currentPosition: null,
		choices: [],
		history: [],
	},
	reducers: {
		// sets a username
		setUserName: (state, action) => {
			state.username = action.payload;
		},
		// sets the current position in the labyrinth
		setCurrentPosition: (state, action) => {
			state.currentPosition = action.payload;
		},
		// sets where we've already been
		setHistory: (state, action) => {
			if(state.currentPosition) {
				state.history = [...state.history, action.payload];
			}
		},
		// // starts the game
		// startGame: (state, action) => {
		// 	state.choices = action.payload.choices;
		// 	state.description = action.payload.description;
		// 	state.coordinates = action.payload.coordinates;
		// },
		// // lets us continue the game
		// continueGame: (state, action) => {
		// 	state.choices = action.payload.choices;
		// 	state.description = action.payload.description;
		// 	state.coordinates = action.payload.coordinates;
		// },
		
	},
});

export const startGameThunk = (username) => {
	return (dispatch, getState) => {
		fetch('https://wk16-backend.herokuapp.com/start', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: getState().labyrinthSlice.username,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch(labyrinthSlice.actions.setCurrentPosition(data))
			});
	};
};

export const nextStepThunk = (type, direction) => {
	return (dispatch, getState) => {
		fetch('https://wk16-backend.herokuapp.com/action', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}, 
			body: JSON.stringify({
				username: getState().labyrinthSlice.username, 
				type, 
				direction,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				dispatch(labyrinthSlice.actions.setCurrentPosition(data))
				dispatch(labyrinthSlice.actions.setHistory(data))
			})
	}
}

export default labyrinthSlice.reducer;
