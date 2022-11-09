import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import game from 'reducers/game';
import Wrapper from 'components/Wrapper';

export const App = () => {
  const gameStart = useSelector((state) => state.game.gameStarted);
  const gameOver = useSelector((state) => state.game.gameOver);

  const reducer = combineReducers({
    game: game.reducer
  });
  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
};
