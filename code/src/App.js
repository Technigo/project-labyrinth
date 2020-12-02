import React from 'react'

import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { rooms } from 'reducers/rooms'
import { StartGame } from './components/StartGame'
import { CreateUsername } from './components/CreateUsername'

const reducer = combineReducers({ rooms: rooms.reducer })
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <CreateUsername /> 
        <StartGame/>
      </main>
    </Provider>
  )
} 
