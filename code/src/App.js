import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import labyrinth from 'reducers/labyrinth'
import StartPage from 'components/StartPage'

export const App = () => {
  const reducer = combineReducers({ labyrinth: labyrinth.reducer })
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <StartPage />
    </Provider>
  )
}
