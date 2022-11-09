import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import game from 'reducers/game';
import StartPage from 'components/StartScreen';
import GameScreen from 'components/GameScreen';
import { useSelector } from 'react-redux';

export const App = () => {
  const response = useSelector((state) => state.game.response);

  const reducer = combineReducers({
    game: game.reducer
  });
  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <StartPage />
      {response && <GameScreen />}
    </Provider>
  );
};
