import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { game } from './reducers/game'
import { Description } from './components/Description'
import { ActionList } from './components/ActionList'

const reducer = combineReducers({
  game: game.reducer
})
const store = configureStore({ reducer })

export const App = () => {

  return (
    <Provider store={store}>
      <Description />
      <ActionList />
    </Provider>
  )
}
