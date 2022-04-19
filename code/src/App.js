import React from 'react'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import LoaderContainer from './components/LoaderContainer'

import game from './reducers/game'

const reducer = combineReducers({
  game: game.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <LoaderContainer />
    </Provider>
  )
}
