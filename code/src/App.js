import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import Game from 'components/Game.js'
import StartPage from 'components/StartPage.js'
import { game } from 'reducers/game.js'

export const App = () => {
  const reducer = combineReducers({

    game: game.reducer

  })

  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <div>
        <StartPage />
        <Game />
      </div>
    </Provider>
  )
}
