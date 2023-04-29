import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Game } from 'components/Game';
import fetchGame from './reducers/gameFetch';
import { loading } from './reducers/load';

export const App = () => {
  const reducer = combineReducers({
    gameFetch: fetchGame.reducer,
    loading: loading.reducer
  });

  const store = configureStore({ reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware() });

  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};
