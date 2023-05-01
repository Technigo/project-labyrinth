/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { game } from './reducers/game';
import Game from './components/Game';

const reducer = combineReducers({
  game: game.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};
