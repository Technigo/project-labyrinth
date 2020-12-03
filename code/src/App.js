import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { ui } from 'reducers/ui'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { gameReducer } from './reducers/gameReducer'
import { GameWrapper } from './components/GameWrapper'
import { History } from './components/History'

const reducer = combineReducers({
  ui: ui.reducer,
  gameReducer: gameReducer.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <LoadingIndicator />
        <GameWrapper />
        <History />
      </div>
    </Provider>
  )
}
