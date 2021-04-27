import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { directions } from './reducers/directions'

import StartScreen from './components/StartScreen'

const reducer = combineReducers({
  directions: directions.reducer
})

const store = configureStore({ reducer: reducer})

export const App = () => {

  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  )
}
