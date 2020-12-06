import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'
import { StartBoard } from './components/StartBoard'
import { gameReducer } from 'reducers/gameReducer';
import { configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({
  gameReducer: gameReducer.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StartBoard />
    </Provider>
  )
}
