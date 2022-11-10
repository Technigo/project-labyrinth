import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
	name: 'game',
	initialState: {
		username: '',
		gameObject: {
			coordinates: '',
			description: '',
			actions: [],
		},
		history: [],
	},
	reducers: {
		setUserName: (state, action) => {
			state.username = action.payload;
		},
		setGameObject: (state, action) => {
			if (state.gameObject) {
				state.history.push(state.gameObject);
			}
			state.gameObject = action.payload;
		},
	},
});

export default gameSlice;
export const { setUserName, setGameObject } = gameSlice.actions;

export const fetchGame = () => {
	return (dispatch, getState) => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: getState().game.username,
			}),
		};
		console.log(options);
		fetch('https://labyrinth-technigo.herokuapp.com/start', options)
			.then((res) => res.json())
			.then((data) => {
				dispatch(game.actions.setGameObject(data));
				console.log(data);
			});
	};
};
