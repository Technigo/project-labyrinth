import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
// Components

// Reducers
import { labyrinth } from './reducers/labyrinth'
import { ui } from './reducers/ui'

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
  ui: ui.reducer
})
const store = configureStore({ reducer })

export const App = () => {
  return (

    <Provider store={store}>
      Find me in src/app.js!
    </Provider>
  )
}
