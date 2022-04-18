import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import Game from './components/Game'
import game from 'reducer/game'
import StartPage from 'components/StartPage'

const reducer = combineReducers({
	game: game.reducer,
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
			<StartPage />
		</Provider>
	)
}
