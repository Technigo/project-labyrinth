/* eslint-disable linebreak-style */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { labyrinth } from 'reducers/labyrinth';
import { FirstScreen } from 'components/Pages/FirstScreen'
import { GlobalStyles } from 'components/Styles/Globalstyles';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer
  });

  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <GlobalStyles />
      <FirstScreen />
    </Provider>
  );
}
