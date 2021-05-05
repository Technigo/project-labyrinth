import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import Labyrinth from './components/Labyrinth'
import labyrinth from './reducers/labyrinth'
import { ui } from 'reducers/ui'

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Labyrinth />
    </Provider>
  )
}
