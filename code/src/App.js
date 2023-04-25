/* eslint-disable linebreak-style */
import React from 'react'
import { Provider } from 'react-redux'
import { game } from 'reducers/game'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Game } from 'components/Game'

const reducer = combineReducers({
  game: game.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}
