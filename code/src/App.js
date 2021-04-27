import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import direction from './reducers/direction'
import StartScreen from './components/StartScreen'

const reducer = combineReducers({
  direction: direction.reducer
})

const store = configureStore({reducer})

export const App = () => {
  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  )
}
