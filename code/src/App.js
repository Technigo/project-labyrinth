import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { StarterPage } from 'components/StarterPage'
import { Game } from 'components/Game'
import fetchGame from './reducers/gameFetch'

export const App = () => {
  const reducer = combineReducers({
    gameFetch: fetchGame.reducer
  });
  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <StarterPage />
      <Game />
    </Provider>
  )
}
