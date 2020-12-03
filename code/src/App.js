import React from 'react';
import { Provider } from 'react-redux'; 
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { labyrinth } from 'reducers/labyrinth';
import { ui } from 'reducers/ui';
import { HomePage } from './components/HomePage';

const reducer = combineReducers({
  labyrinth:labyrinth.reducer,
  ui:ui.reducer
});

const store = configureStore({reducer});

export const App = () => {
  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>
  );
};
