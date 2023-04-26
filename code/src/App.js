import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Game } from 'reducers/Game';
import { AppStart } from 'components/AppStart';

export const App = () => {
  const reducer = combineReducers(
    { game: Game.reducer }
  )

  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <div>
        <AppStart />
      </div>
    </Provider>
  )
}

