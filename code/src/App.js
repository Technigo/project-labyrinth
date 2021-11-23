import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit' //createStore
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { game } from './reducers/game'
import { ui } from './reducers/ui'
import { Header } from './components/Header'
import { StartPage } from './components/StartPage'
import { CurrentStep } from './components/CurrentStep'

const reducer = combineReducers({ game: game.reducer, ui: ui.reducer })
const store = configureStore({ reducer })

// Retrieve localstorage as initial state
// const persistedStateJSON = localStorage.getItem('gameReduxState')
// let persistedState = {}

// if (persistedStateJSON) {
//   persistedState = JSON.parse(persistedStateJSON)
// }

// Create store with initial state
// const store = createStore(
//   reducer,
//   persistedState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// Store the state in localstorage when Redux state change
// store.subscribe(() => {
//   localStorage.setItem('gameReduxState', JSON.stringify(store.getState()))
// })

export const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage/>} />
          <Route path="/game" element={<CurrentStep/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
