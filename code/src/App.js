import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { game } from 'reducers/game'
import { ui } from 'reducers/ui'
import { StartScreen } from 'components/StartScreen'

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer
});
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <StartScreen />
      </div>
    </Provider>
  )
}
