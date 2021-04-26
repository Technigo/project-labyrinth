import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import labyrinth from './reducers/labyrinth'
import Game from './components/Game';

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
});

const store = configureStore({reducer});

export const App = () => {

  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}
