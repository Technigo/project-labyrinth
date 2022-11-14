import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import labyrinth from 'reducers/labyrinth';
import Parent from 'components/Parent';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer
  })

  const store = configureStore({
    reducer
  })

  return (
    <Provider store={store}>
      <Parent />
    </Provider>
  )
}
