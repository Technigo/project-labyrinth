import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { game } from './reducers/game';

import { loading } from './reducers/loading';
import LoadingScreen from './components/LoadingScreen';
import { Game } from './components/Game';

const reducer = combineReducers({
  loading: loading.reducer,
  game: game.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingScreen />
    </Provider>
  );
};
