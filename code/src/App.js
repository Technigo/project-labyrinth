import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { StartingPage } from 'components/StartingPage'
import { ui } from 'reducer/ui'
import { game } from 'reducer/game'
import { GamePage } from 'components/GamePage'

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer
})
const store = configureStore({
  reducer
})

export const App = () => {
  return (
    <Provider store={store}>
      <StartingPage />
      <GamePage />
    </Provider>
  )
}
