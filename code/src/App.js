import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import StartScreen from 'components/StartScreen';
import { questions } from 'reducers/questions';
import GameScreen from 'components/GameScreen';
import Questions from 'components/Questions';

export const App = () => {
  const reducer = combineReducers({
    questions: questions.reducer
  });

  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <StartScreen />
      <GameScreen />
      <Questions />
    </Provider>
  );
};
