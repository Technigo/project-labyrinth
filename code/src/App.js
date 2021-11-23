import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({
  /*  xxx: xxx.reducer */
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider>
      <div>Find me in src/app.js!</div>
    </Provider>
  );
};
