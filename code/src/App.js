import React from 'react'
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import game from 'reducers/game';
import { ui } from './reducers/ui';
import { Main } from './components/Main';

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
