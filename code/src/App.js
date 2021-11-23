import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { labyrinth } from './reducers/description';

import { StartPage } from 'components/StartPage';
import { Description } from 'components/Description';
import { LoadingLottie } from 'components/Lottie';

const reducer = combineReducers({
  labyrinth: labyrinth.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StartPage />
      {/* <Description /> */}
      <LoadingLottie />
    </Provider>
  );
};
