import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import LoadingPage from 'components/LoadingPage'
import Start from './components/Start'
import Game from './components/Game'

import game from './reducers/game'

const reducer = combineReducers({
  game: game.reducer
})

const store = configureStore({ reducer })

const App = () => {
  return (
    <Provider store={store}>
      <LoadingPage />
      <Start />
      <Game />
    </Provider>
  )
}

export default App


