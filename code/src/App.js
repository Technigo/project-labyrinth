import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { gameReducer } from './reducers/gameReducer'
import { GameWrapper } from './components/GameWrapper'

const reducer = combineReducers({
  gameReducer: gameReducer.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <GameWrapper />
      </div>
    </Provider>
  )
}
