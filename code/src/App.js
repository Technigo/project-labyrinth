import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import  { ui } from 'reducers/ui'
import { labyrinth } from 'reducers/labyrinth'

import { Labyrinth } from 'components/Labyrinth'

const reducer = combineReducers({
  ui: ui.reducer,
  labyrinth: labyrinth.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <h1>The Labyrinth</h1>
      <Labyrinth />

    </Provider>
  )
}
