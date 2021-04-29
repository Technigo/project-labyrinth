import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import "nes.css/css/nes.min.css"

import game from "./reducers/game"
import Game from "./components/Game"

//TO-DO:
//[X] Blue Level
//[/] Red Level
//[_] Se över om JSON.stringify är skriven enligt best practice i POST requestsen
//[~] utilize that we know the next action's desc for early printing during loading?
//[_] Se om vi kan få placeholdertexten i name input att bli wrapped i smala mobile views
//[_] Vår fina NES text input går sönder i desktop view :( Fixa detta
//[_] Get fake loading to work ;P
//[_] Se om vi kan använda variabler i vår fetch URL + variabel för request body för att slå samman våra fetches :)
//[_] Write to history array
//[/] Consider the difficulty of implementing a scroll-able action/room backlog!
//    What if each room just ADDS to a "log" array object, 
//  filled with strings (room descriptions and actions taken!) 
//  which are the printed as paragraphs! Actions taken can simply be logged by adding the payload to the log before adding the new fetch results. Might need a new reducer called logAction, but that will be easy.
//[_] Implement local storage
//[_] Make RESET button a smaller, always available thing. Otherwise the player can never restart and rename themselves when localStorage is enabled, unless they clear localStorage
//[_] Undersök bugg: inga actions MEN en room description!
//[_] Felhantering
//[X] Loader some egen component
//[_] Put loading... by the bar and figure out what is needed for the ACTIONS box
//[_] Retain UI size somewhat between rooms

//[_] Implement a map function:
//  [_] It probably entails drawing out a grid

const reducer = combineReducers({ 
  game: game.reducer
})

const store = configureStore({ reducer })

store.subscribe(() => {
  localStorage.setItem('game', JSON.stringify(store.getState().game))
})

export const App = () => {
  return (
    <Provider store={store}>
      {}
      <Game />
    </Provider>
    
  )
}
