/* eslint-disable indent */
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { game } from './reducers/game'
import { ui } from './reducers/ui'
import { Start } from './components/Start'
import { Loading } from './components/Loading'
import { Container } from './lib/Container'

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Start />
        <Loading />
      </Container>
    </Provider>
  )
}