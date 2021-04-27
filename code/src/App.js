import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import maze from "./reducers/maze"
import StartScreen from './components/StartScreen'

const reducer = combineReducers({
  maze: maze.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  )
}
