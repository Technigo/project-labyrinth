import React from 'react'
import { Provider } from 'react-redux'
import StartScreen from 'components/StartScreen'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import game from 'reducers/game'

const reducer = combineReducers({
  game: game.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
    <StartScreen />
    </Provider>
  )
}
