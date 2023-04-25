import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Game } from 'reducers/Game';

export const App = () => {
  const reducer = combineReducers(
    { game: Game.reducer }
  )

  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <div>
      Find me in src/app.js!
      </div>
    </Provider>
  )
}
