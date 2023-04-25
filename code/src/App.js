import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { labyrinth } from 'reducers/labyrinth';
import StartScreen from 'components/StartScreen';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  )
}
