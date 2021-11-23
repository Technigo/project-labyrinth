import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { game } from './reducers/game';
import StartPage from './components/StartPage';
import MainGame from './components/MainGame';
import LoadingSpinner from './components/LoadingSpinner';
import { spinner } from 'reducers/spinner';

//storen är korrekt connectad med reducern :)
const reducer = combineReducers({
  game: game.reducer,
  spinner: spinner.reducer,
});

const store = configureStore({ reducer: reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingSpinner />
      <StartPage />
      <MainGame />
    </Provider>
  );
};
