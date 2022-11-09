import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  GameBoard from 'components/GameBoard'
import games from 'reducers/games'

export const App = () => {
    const reducer = combineReducers({
      games: games.reducer
    })

    const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <GameBoard />
    </Provider>
  )
}
