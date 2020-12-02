import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { game } from './reducers/game'
import { ui } from './reducers/ui'

import { Header } from './components/Header'
import { Main } from './components/Main'
import { Card } from './lib/Card'
import { Footer } from './components/Footer'

const reducer = combineReducers({ game: game.reducer, ui: ui.reducer})


const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main>
      <Card />
      </Main>
      <Footer/>
    </Provider>
  )
}
