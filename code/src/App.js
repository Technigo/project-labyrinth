import React from 'react'
import { Provider } from 'react-redux';
import { Start } from 'components/Start'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { labyrinth } from 'reducers/labyrinth';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer
  });
  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <Start />
    </Provider>
  )
}