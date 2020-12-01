import React from 'react'

import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { rooms } from 'reducers/rooms'

import { StartGame } from './components/StartGame'

const reducer = combineReducers({ rooms: rooms.reducer })
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StartGame></StartGame>

    </Provider>
  )
} 
