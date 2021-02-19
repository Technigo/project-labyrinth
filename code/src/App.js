import React from 'react'

import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { rooms } from 'reducers/rooms'
import { loader } from 'reducers/loader'
import { GameWrapper } from './components/GameWrapper'

// We have two reducers – the rooms, and the loader. The 'rooms' is responsible for handling the game state, and the username.
const reducer = combineReducers({ 
  rooms: rooms.reducer,
  loader: loader.reducer
})
const store = configureStore({ reducer: reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main>
      <GameWrapper/>
      </main>
    </Provider>
  )
} 
