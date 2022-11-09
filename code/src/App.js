import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ui } from 'reducers/ui';
import gamestate from 'reducers/gamestate';
import StartScreen from 'components/StartScreen';
import LoadingIndicator from 'components/LoadingIndicator';

export const App = () => {
  const reducer = combineReducers({
    ui: ui.reducer,
    gamestate: gamestate.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <LoadingIndicator />
      <StartScreen />
    </Provider>
  )
}
