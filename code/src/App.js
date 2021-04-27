import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import "nes.css/css/nes.min.css"

import game from "./reducers/game"
import StartScreen from './components/StartScreen'
import GameplayScreen from './components/GameplayScreen'

const reducer = combineReducers({ 
  game: game.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <StartScreen />  
      <GameplayScreen />   
    </Provider>
    
  )
}
