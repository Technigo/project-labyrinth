import { createSlice } from '@reduxjs/toolkit'

import { ui } from './ui'

export const games = createSlice({
	name: 'games',
	initialState: {
		username: '',
		actions: [],
		description: '',
		coordinates: '',
		history: []
	},
	reducers: {
		generateDescription: (state, action) => {
            // Check if description from Redux store is not empty obj.
            // If it is, do not push empty str to history array
            // If it is not, do it
            if (state.description) {
                state.history = [...state.history, state.description];
            }
            state.description = action.payload;   
		},	
		
		history: state => {
            if (state.history.length > 0) {
                state.description = state.history[state.history.length - 1];
                state.history = state.history.slice(0, state.history.length -1);
            }
        },	

		playGame: (store, action) => {
			store.description = action.payload.description
			store.actions = action.payload.actions
			store.coordinates = action.payload.coordinates
		},

		setUsername: (store, action) => {
			store.username = action.payload
		}
	}
})

export const thunk = (userName) => {
	return (dispatch) => {
		dispatch(ui.actions.setLoading(true))
		fetch('https://wk16-backend.herokuapp.com/start', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: userName })
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch(games.actions.playGame(data))
				dispatch(ui.actions.setLoading(false))
			})
	}
}

export const actionThunk = (userName, action) => {
	console.log(action)
	return (dispatch) => {
		dispatch(ui.actions.setLoading(true))
		fetch('https://wk16-backend.herokuapp.com/action', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: userName,
				type: action.type,
				direction: action.direction,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch(games.actions.playGame(data))
				dispatch(ui.actions.setLoading(false))
				dispatch(games.actions.generateDescription(data.description))
			}
			)}}