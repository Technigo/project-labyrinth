import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import StartScreen from 'components/StartScreen';
import LoadingIndicator from 'components/LoadingIndicator';
import { gameState } from 'reducers/gamestate'
import { ui } from 'reducers/ui';

export const App = () => {
  const reducer = combineReducers({
    ui: ui.reducer,
    gameState: gameState.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <LoadingIndicator />
      <StartScreen />
    </Provider>
  )
}
