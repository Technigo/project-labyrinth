import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { ui } from 'reducers/ui'
import { gameReducer } from './reducers/gameReducer'
import { GameWrapper } from './components/GameWrapper'

const reducer = combineReducers({
  ui: ui.reducer,
  gameReducer: gameReducer.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GameWrapper />
    </Provider>
  )
}