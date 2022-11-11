import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { questions } from 'reducers/questions';
import FirstPage from 'components/FirstPage';

export const App = () => {
  const reducer = combineReducers({
    questions: questions.reducer,
  });

  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <FirstPage />
    </Provider>
  );
};
