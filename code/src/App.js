import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { labyrinth } from 'reducers/labyrinth';
import StartScreen from 'components/StartScreen';
import ui from 'reducers/ui';
import { GlobalStyle } from 'components/styling/GlobalStyles';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer,
    ui: ui.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <GlobalStyle />
      <StartScreen />
    </Provider>
  );
};
