import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import game from './reducers/game'
import StartPage from './components/StartPage'
// import { startGame } from 'reducers/game'

const reducer = combineReducers({
  game: game.reducer
})
const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <StartPage />
    </Provider>
  )
}
