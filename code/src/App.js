import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { GameStart } from './components/GameStart'
import { GameContainer } from './components/GameContainer'
import { game } from './reducers/game'
import { loader } from './reducers/Loader'
import { LoadingIndicator } from './components/LoadingIndicator'

const reducer = combineReducers({ 
  game: game.reducer,
  loader: loader.reducer
})
const store = configureStore({ reducer })

export const App = () => {
  return (

    <Provider store={store}>
    <main>
      <div className="gif-box">
      <LoadingIndicator />
      <GameContainer/>
      <GameStart />
      </div> 
    </main>
    </Provider>
  )
}
