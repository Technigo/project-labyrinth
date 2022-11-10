import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import game from 'reducers/game';
import Wrapper from 'components/Wrapper';
import LoadingIndicator from 'components/LoadingIndicator';
import 'nes.css/css/nes.min.css';

export const App = () => {
  const reducer = combineReducers({
    game: game.reducer
  });
  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <LoadingIndicator />
      <Wrapper />
    </Provider>
  );
};
