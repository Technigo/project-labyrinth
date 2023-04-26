import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { labyrinth } from 'reducers/labyrinth';
import { Main } from 'components/Main';

const reducer = combineReducers({
  labyrinth: labyrinth.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
