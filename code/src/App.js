import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import StartScreen from 'components/StartScreen';
import GameScreen from 'components/StartScreen';
import Choice from 'components/StartScreen';
import { labyrinth } from './reducers/labyrinth';

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StartScreen />
      <GameScreen />
    </Provider>
  );
};
