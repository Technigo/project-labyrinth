import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { Start } from './components/Start';
import { Loading } from './components/Loading';
import { Board } from './components/Board';
import { game } from './reducers/game';
import { ui } from './reducers/ui';

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Start />
      <Loading />
      <Board />
    </Provider>
  )
}
