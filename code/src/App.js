import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Game from 'components/Game';
import { labyrinth } from './reducers/labyrinth';
import { ui } from './reducers/ui';
import Loading from 'components/Loading';

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
  ui: ui.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Loading />
      <Game />
    </Provider>
  );
};
