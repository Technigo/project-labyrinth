/* eslint-disable linebreak-style */
import React from 'react'
import { Provider } from 'react-redux'
import { labyrinth } from 'reducers/labyrinth'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import StartScreen from 'components/StartScreen'

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer
  })
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  )
}
