import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import  { ui } from './reducers/ui'
import { labyrinth } from './reducers/labyrinth'

import { EnterLabyrinth } from './components/EnterLabyrinth'
import { LoadingIndicator } from './components/LoadingIndicator'

const reducer = combineReducers({
  ui: ui.reducer,
  labyrinth: labyrinth.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingIndicator />
      <EnterLabyrinth />
    </Provider>
  )
}
