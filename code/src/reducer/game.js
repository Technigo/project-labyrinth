import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
	name: 'game',
	initialState: {
		items: null,
		username: '',
	},
	reducers: {
		setName: (store, action) => {
			store.username = action.payload
		},
		setItem: (store, action) => {
			console.log(store.username)
			store.items = action.payload
			console.log(store.items)
		},
	},
})

export const fetchGame = () => {
	return (dispatch, getState) => {
		fetch('https://labyrinth-technigo.herokuapp.com/start', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username: getState().game.username }),
		})
			.then((res) => res.json())
			.then((data) => dispatch(game.actions.setItem(data)))
	}
}

export const navigateGame = (type, direction) => {
	return (dispatch, getState) => {
		fetch('https://labyrinth-technigo.herokuapp.com/start', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: getState().game.username,
				type: type,
				direction: direction,
			}),
		})
			.then((res) => res.json())
			.then((data) => console.log(data, 'secondAPi'))
	}
}

export default game
