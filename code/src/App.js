import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { games } from './reducers/games'

import GameBoard from './components/GameBoard'

const reducer = combineReducers({
  game: games.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GameBoard />
    </Provider>
  )
}
