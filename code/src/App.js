import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import labyrinth from './reducers/labyrinth'
import loader from 'reducers/loader'

import Labyrinth from 'components/Labyrinth'
const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
  loader: loader.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Labyrinth />
    </Provider>
  )
}
