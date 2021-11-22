import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { start } from 'reducers/start';
import Labyrinth from 'components/Labyrinth';

import { StartGame } from './components/StartGame';

const reducer = combineReducers({
  start: start.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>TEST</h1>
        <StartGame />
        <Labyrinth />
      </main>
    </Provider>
  );
};
