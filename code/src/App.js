import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { StartScreen } from 'components/StartScreen';
import { questions } from 'reducers/questions';

const reducer = combineReducers({
  questions: questions.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  );
};
