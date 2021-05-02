import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import "nes.css/css/nes.min.css"

import game from "./reducers/game"

import Game from "./components/Game"

const reducer = combineReducers({ 
  game: game.reducer
})

const store = configureStore({ reducer })

store.subscribe(() => {
  localStorage.setItem('game', JSON.stringify(store.getState().game))
})

export const App = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}
