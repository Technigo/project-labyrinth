import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import { game } from './reducers/game'

const reducer = combineReducers({ game: game.reducer })

// Retrieve localstorage as initial state
const persistedStateJSON = localStorage.getItem('gameReduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// Create store with initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem('gameduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <div>Find me in src/app.js!</div>
    </Provider>
  )
}
