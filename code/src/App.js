import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import game from './reducers/game'

import FullGame from './components/FullGame'

const reducer = combineReducers({
  game: game.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <FullGame/>
    </Provider>
  )
}
