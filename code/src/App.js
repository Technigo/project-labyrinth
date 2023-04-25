import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { maze } from 'reducers/maze';
import { ui } from 'reducers/ui';
import { WelcomePage } from 'components/WelcomePage';

export const App = () => {
  const reducer = combineReducers({
    maze: maze.reducer,
    ui: ui.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <WelcomePage />
    </Provider>
  )
}
