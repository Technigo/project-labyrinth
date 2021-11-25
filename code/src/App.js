import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import Game from './components/Game'
import NotFoundPage from './components/NotFoundPage'
import ui from './reducers/ui'
import { game } from './reducers/game'

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Game />
      <NotFoundPage />
    </Provider>
  )
}
