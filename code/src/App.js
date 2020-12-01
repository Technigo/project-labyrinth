import { UserName } from 'components/UserName'
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { GameState } from 'GameState'
import { game } from './reducers/game'

const reducer = combineReducers({
  game: game.reducer
});

export const store = configureStore({ reducer });

export const App = () => {

  return (
    <Provider store={store} >
      <UserName />
      <GameState />
    </Provider>
  )
}
