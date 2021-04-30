import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import labyrinth from './reducers/labyrinth'

import Container from './components/Container'

const reducer = combineReducers({
  labyrinth: labyrinth.reducer
})

const store = configureStore({reducer})

store.subscribe(() => localStorage.setItem('labyrinth', JSON.stringify(store.getState().labyrinth)))

export const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}
