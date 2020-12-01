import { UserName } from 'components/StartGame'
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { StartGame } from './components/StartGame'
import { GameState } from './components/GameState'
import { game } from './reducers/game'


const reducer = combineReducers({
  game: game.reducer
});

export const store = configureStore({ reducer });

export const App = () => {

  return (
    <Provider store={store} >
      <StartGame />
      <GameState />
    </Provider>
  )
}
