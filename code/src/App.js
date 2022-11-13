import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import game from 'reducers/game';
import ui from 'reducers/ui';
import StartScreen from 'components/StartScreen';

export const App = () => {
  const reducer = combineReducers({
    game: game.reducer,
    ui: ui.reducer
  });
  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  )
}