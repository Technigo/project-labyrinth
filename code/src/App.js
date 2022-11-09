import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import game from 'reducers/game';
import { ui } from 'reducers/ui';
import Main from 'components/Main';
import { GlobalStyle } from 'utils/GlobalStyle';

export const App = () => {
  const reducer = combineReducers({
    game: game.reducer,
    ui: ui.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  );
};
