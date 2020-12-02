import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { game } from './reducers/game'
import { ui } from './reducers/ui'

import { Header } from './components/Header'
import { LoadingIndicator } from './components/LoadingIndicator'
import { Card } from './lib/Card'

const reducer = combineReducers({ game: game.reducer, ui: ui.reducer})


const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <LoadingIndicator />
      <Card />
    </Provider>
  )
}
