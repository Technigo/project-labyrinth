import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import StartScreen from 'components/StartScreen';
import GameScreen from 'components/StartScreen';
import Game from 'components/Game';
import { labyrinth } from './reducers/labyrinth';

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};
