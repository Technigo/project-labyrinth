import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import game from 'reducers/game';
import StartScreen from 'components/StartScreen';
import { GlobalStyle } from 'utils/GlobalStyle';

export const App = () => {
  const reducer = combineReducers({
    game: game.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <GlobalStyle />
      <StartScreen />
    </Provider>
  );
};
