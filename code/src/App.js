import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { start } from 'reducers/start';
import { ShowGame } from './components/ShowGame';

const reducer = combineReducers({
  start: start.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <ShowGame />
      </main>
    </Provider>
  );
};
