/* eslint-disable max-len */
import React from 'react'
import { Provider } from 'react-redux'
import { labyrinth } from 'reducers/labyrinth'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Game } from 'components/Game'

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer
  })

  const store = configureStore({ reducer })

  // In the return above we have the Game-component render first because in the Game-component we have a conditional in the return that checks the status of the store, specifially the coordinates. Right now it renders two StartScreen-components, one for the start screen, and one for the game. That is something we have to fix somehow
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}
