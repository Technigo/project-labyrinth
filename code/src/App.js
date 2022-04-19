import React from 'react'
import StartScreen from './components/StartScreen'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import labyrinth from './reducers/labyrinth'

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  )
}
