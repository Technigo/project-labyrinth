import React from 'react'
import { Provider } from 'react-redux'
// import StartingPage from 'components/StartingPage'
import GameBoard from 'components/GameBoard'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import steps from 'reducers/steps'

const reducer = combineReducers({ steps: steps.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GameBoard />
    </Provider>
  )
}
