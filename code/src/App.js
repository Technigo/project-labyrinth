import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { directions } from './reducers/directions'

import Main from './components/Main'

const reducer = combineReducers({
  directions: directions.reducer
})

const store = configureStore({ reducer: reducer})

export const App = () => {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
