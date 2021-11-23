import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { gameReducer } from '../reducers/gameReducer';

import { loading } from './reducers/loading';
import { LoadingScreen } from '../components/LoadingScreen';

const reducer = combineReducers({
  loading: loading.reducer,
  gameReducer: gameReducer.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingScreen />
    </Provider>
  );
};
