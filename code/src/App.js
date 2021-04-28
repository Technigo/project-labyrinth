import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import direction from './reducers/direction'
import StartScreen from './components/StartScreen'
import InGame from 'components/InGame'

const reducer = combineReducers({
  direction: direction.reducer
})

const store = configureStore({reducer})

export const App = () => {
  return (
    <Provider store={store}>
      <StartScreen />
      <InGame />
    </Provider>
  )
}
