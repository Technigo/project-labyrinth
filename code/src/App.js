import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import  game  from './reducers/game'
import StartGame from './components/StartGame'
import GameElements from './components/GameElements'

const reducer = combineReducers({
  game: game.reducer
})

const store = configureStore({ reducer })


export const App = () => {

  return (
    <Provider store ={store}>
      <StartGame />
      <GameElements />
    </Provider>
  )
}


