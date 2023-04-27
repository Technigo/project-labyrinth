/*eslint-disable*/
import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import labyrinth from 'reducers/labyrinth';
import loading from 'reducers/loading';
import StartScreen from 'components/StartScreen';
import { Provider } from 'react-redux';
import Loading from 'components/Loading';
import Error from 'components/Error';
import End from 'components/EndPage';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer,
    loading: loading.reducer
  });

const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  )
}