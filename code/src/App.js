import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { game } from './reducers/game';
import { ui } from './reducers/ui';

import LoadingPage from './LoadingPage';

export const App = () => {
  const reducer = combineReducers({
    ui: ui.reducer,
    game: game.reducer
  });
  const store = configureStore({
    reducer //argument
  });

  return (
    <Provider store={store}>
    <LoadingPage />
      <div>
      Find me in src/app.js!
      </div>
    </Provider>
  );
};
