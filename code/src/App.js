import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { Main } from 'components/Main';

import { game } from 'reducers/game';
import { ui } from 'reducers/ui';

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
};
