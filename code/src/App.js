import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { StartPage } from 'components/StartPage'
import { game } from 'reducers/game'

const reducer = combineReducers ({
  game: game.reducer,
})

const store = configureStore({reducer})

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <StartPage />
      </Provider>
    </div>
  )
}
