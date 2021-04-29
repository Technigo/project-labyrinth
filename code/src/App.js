import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import "nes.css/css/nes.min.css"

import game from "./reducers/game"
import Game from "./components/Game"

//TO-DO:
//[_] Se över om JSON.stringify är skriven enligt best practice i POST requestsen
//[~] utilize that we know the next action's desc for early printing during loading?
//[_] Se om vi kan få placeholdertexten i name input att bli wrapped i smala mobile views

const reducer = combineReducers({ 
  game: game.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      {}
      <Game />
    </Provider>
    
  )
}
