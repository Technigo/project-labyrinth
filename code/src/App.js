import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
/* import LoadingPage from 'components/LoadingPage'; */
import StartPage from 'components/StartPage'
import MainPage from 'components/MainPage';
import { game } from 'reducers/game';
import { ui } from 'reducers/ui';

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer
});
const store = configureStore({
  reducer /* argument */
});

export const App = () => {
  return (
    <Provider store={store}>
      <StartPage />
      <MainPage />
    </Provider>
  );
};
