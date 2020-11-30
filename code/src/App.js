
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import GameContainer from './components/GameContainer';
import { game } from './reducers/game';

const reducer = combineReducers({ game: game.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GameContainer />
    </Provider>
  )
}
