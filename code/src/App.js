import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import games from './reducers/games'
import StartScreen from 'components/StartScreen'

const reducer = combineReducers({
  games: games.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <StartScreen />
      </div>
    </Provider>
  )
}
