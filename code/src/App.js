import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { GameControls } from './components/Actions'
import { GameContainer } from './components/Description'
import { rooms } from 'reducers/rooms'

const reducer = combineReducers({ rooms: rooms.reducer })
const store = configureStore({ reducer });

const START_URL = "https://wk16-backend.herokuapp.com/start";
const username = "NewUser1337ClaudiaAxel"

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: username })
}

// Function which starts the game – it fetches from the START_URL, and when the response gets back, populates the "Description" with the description from the response.
const startGame = () => {
  fetch(START_URL, requestOptions)
  .then(response => response.json())
  .then(data => console.log(data));
}

export const App = () => {
  return (
    <Provider store={store}>
      {startGame()}
      <Description />
      <Actions />
    </Provider>
  )
} 
