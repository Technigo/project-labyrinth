import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Game } from 'reducers/Game';
import { StartGame } from 'components/StartGame';
import { GameScreen } from 'components/GameScreen';

export const App = () => {
  const reducer = combineReducers(
    { game: Game.reducer }
  )

  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <div>
        <StartGame />
        <GameScreen />
      </div>
    </Provider>
  )
}
