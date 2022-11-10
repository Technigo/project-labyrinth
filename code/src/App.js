/* eslint-disable linebreak-style */
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { choices } from 'reducers/choices'
import { ui } from 'reducers/ui'
import { Home } from 'pages/Home'

const reducer = combineReducers({
  choices: choices.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}