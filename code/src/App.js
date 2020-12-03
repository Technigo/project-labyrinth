import React from 'react'
import { Provider } from 'react-redux'; 
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { labyrinth } from 'reducers/labyrinth';

import { HomePage } from './components/HomePage';
import { ui } from 'reducers/ui';

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
  )
}
