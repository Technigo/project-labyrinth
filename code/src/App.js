import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { game } from './reducers/game'
import { ui } from './reducers/ui'

import { LoadingIndicator } from './components/LoadingIndicator'
import { Card } from './lib/Card'
import { Main } from './components/Main'

const reducer = combineReducers({ game: game.reducer, ui: ui.reducer})


const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Main>
      <LoadingIndicator />
      <Card />
      </Main>
    </Provider>
  )
}
