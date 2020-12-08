import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { games } from './reducers/games'
import { Game } from './components/Game'
import { ui } from './reducers/ui'

const reducer = combineReducers({ games: games.reducer, ui: ui.reducer })

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}