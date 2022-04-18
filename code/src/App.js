import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import game from 'reducer/game'
import ui from 'reducer/ui'
import StartPage from 'components/StartPage'
import Loadingspinner from 'components/Loadingspinner'

const reducer = combineReducers({
	game: game.reducer,
	ui: ui.reducer,
})

//________Handle Local storage________
const localStorageKey = 'gameReduxState'
const persistedStateJSON = localStorage.getItem(localStorageKey)
let persistedState = {}

if (persistedStateJSON) {
	persistedState = JSON.parse(persistedStateJSON)
}

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
	localStorage.setItem(localStorageKey, JSON.stringify(store.getState()))
})

export const App = () => {
	return (
		<Provider store={store}>
			<Loadingspinner />
			<StartPage />
		</Provider>
	)
}
