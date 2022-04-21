import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import ui from './reducers/ui'
import game from './reducers/game'
// import StartScreen from './components/StartScreen'
import Game from './components/Game'
import Loading from './components/Loading'

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
  <Provider store={store}>
      <Loading/>
      <Game/>
  </Provider>
  )
}
