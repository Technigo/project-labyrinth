import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// Reducers
import { game } from './reducers/game'
// Components
import { Game } from './components/Game'

//Redux setUp
const reducer = combineReducers({
  game: game.reducer,
})
const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}
