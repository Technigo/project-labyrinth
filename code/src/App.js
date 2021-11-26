import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { game } from './reducers/game';

import { Game } from './components/Game';
import { Start } from './components/Start';

const reducer = combineReducers({
  game: game.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Game />
      <Start />
    </Provider>
  );
};
