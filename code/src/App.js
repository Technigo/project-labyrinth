import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import game from 'reducers/game'
import { MainPage } from 'components/MainPage'

export const App = () => {
  const reducer = combineReducers({
    game: game.reducer
  })

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
}
