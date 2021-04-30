import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import "nes.css/css/nes.min.css"

import game from "./reducers/game"
import Game from "./components/Game"

//TO-DO:
//[X] Blue Level
//[/] Red Level
//[~] utilize that we know the next action's desc for early printing during loading?
//[~] Se om vi kan få placeholdertexten i name input att bli wrapped i smala mobile views
//[X] Vår fina NES text input går sönder i desktop view :( Fixa detta
//[X] Loader some egen component
//[X] Write to history array
//[X] Implement local storage
//[X] Make RESET button a smaller, always available thing. Otherwise the player can never restart and rename themselves when localStorage is enabled, unless they clear localStorage
//[X] Implement a map function:
//  [X] It probably entails drawing out a grid
//[X] Fixed stuff
//[X] EndOfGame component
//[X] Se över om JSON.stringify är skriven enligt best practice i POST requestsen

//Viktigast:
//[X] IN ACTIONS.JS: Line 27:13:  Expected a default case 
//[X] IN MAP.JS: Line 13:34:  Expected to return a value at the end of arrow function  array-callback-return
//[X] IN MAP.JS: Line 14:13:  Expected a default case
//[X] Variabler i vår fetch URL + variabel för request body för att slå samman våra fetches :)
//[_] Felhantering

//Sekundära:
//[_] Put loading... by the bar and figure out what is needed for the ACTIONS box
//[_] Undersök bugg: inga actions MEN en room description!


//MARTIN'S EXTRA FINPUTS: 
//[_] Updrade mapArray to have objects instead of integers for each square, with booleans for each exit (north, south etc.)
//[_] Get fake loading to work ;P
//[_] Retain UI size somewhat between rooms
//[_] Implement Log (component?) which reads from history + the current room
//    What if each room just ADDS to a "log" array object, 
//  filled with strings (room descriptions and actions taken!) 
//  which are the printed as paragraphs! Actions taken can simply be logged by adding the payload 
//  to the log before adding the new fetch results. 
//  Might need a new reducer called logAction, but that will be easy.
//[_] remove bottom border on RoomDescription box specifically!

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
      <Game />
    </Provider>
  )
}
