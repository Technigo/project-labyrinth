import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import WelcomeScreen from 'components/WelcomeScreen';
import { labyrinth } from 'reducers/labyrinth';

const reducer = combineReducers({
  labyrinth: labyrinth.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <WelcomeScreen />
    </Provider>
  )
}
