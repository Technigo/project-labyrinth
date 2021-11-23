import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { labyrinth } from './reducers/description';

import { StartPage } from 'components/StartPage';
import { Description } from 'components/Description';

const reducer = combineReducers({
  labyrinth: labyrinth.reducer
  /*   loader: loader.reducer, */
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StartPage />
      {/* <Description /> */}
    </Provider>
  );
};
