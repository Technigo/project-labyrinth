import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import labyrinth from 'reducers/labyrinth'
import { ui } from './reducers/ui'

import Game from 'components/Game'

const reducer = combineReducers({
  ui: ui.reducer,
  labyrinth: labyrinth.reducer
})

// const store = configureStore({ reducer })

// local storage : use that instead
const persistedStateJSON = localStorage.getItem('state')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

const store = configureStore({ reducer, preloadedState: persistedState })

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()))
})
// local storage


export const App = () => {
  return (
    <Provider store={store}>
        <Game />
    </Provider>
    )
}
