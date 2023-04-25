/* eslint-disable linebreak-style */
import React from 'react'
import { Loader } from 'components/Loader'
import { Provider } from 'react-redux'
import { game } from 'reducers/game'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { StartingPage } from 'components/StartingPage'
import { GamePlay } from 'components/GamePlay'

const reducer = combineReducers({
  game: game.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Loader loaderColor="#fff" textColor="#fff" />
      <StartingPage />
      <GamePlay />
    </Provider>
  )
}
