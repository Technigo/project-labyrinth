import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import game from './reducers/game'
import StartScreen from './components/StartScreen'

const reducer = combineReducers({
game: game.reducer

})

const store = configureStore({ reducer })

export const App = () => {
  return (
  <Provider store={store}>
      <StartScreen/>
  </Provider>
  )
}
