import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { ui } from './reducers/ui'
import { game } from './reducers/game'
import StartGame from 'pages/StartGame'

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer
})

const store = configureStore({ reducer })

//we still need to import the loading indicator <LoadingIndicator />
export const App = () => {
  return (
    <Provider store={store}>
      <StartGame />
    </Provider>
  )
}
