import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gamestate from 'reducers/gamestate';
import StartScreen from 'components/StartScreen';

export const App = () => {
  const reducer = combineReducers({
    gamestate: gamestate.reducer
  });
  const store = configureStore({ reducer });
  // const store = configureStore(combineReducers({
  //   quotes: quotes.reducer
  // }));

  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  )
}

/* http://api.quotable.io/random */
