import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { labyrinth } from 'reducers/labyrinth';
import { ui } from 'reducers/ui';
import { Main } from 'components/Main';
import { GlobalStyle } from 'reusableComponents/GlobalStyle';

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
  ui: ui.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  )
}
