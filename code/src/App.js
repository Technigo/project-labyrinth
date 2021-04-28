import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import gameactions from 'reducers/gameactions'

import Screens from './components/Screens'

const reducer = combineReducers({
  gameactions: gameactions.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  )
}
