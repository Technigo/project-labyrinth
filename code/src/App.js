import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { game } from './reducers/game'
import { ui } from './reducers/ui'

//import { GamePage } from './pages/GamePage'
import { GameBackground } from './components/GameBackground'
//import { GameContainer } from './components/GameBackground'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Card } from './lib/Card'

const reducer = combineReducers({ game: game.reducer, ui: ui.reducer})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main>
      <Card />
      <GameBackground />
      </Main>
    </Provider>
  )
}
