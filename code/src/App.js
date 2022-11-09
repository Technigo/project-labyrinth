import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gameReducer from 'reducers/game';
import StartScreen from 'Components/StartScreen';
// import Description from 'Components/Description';

export const App = () => {
  const reducer = combineReducers({
    game: gameReducer.reducer
  });
  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  )
}