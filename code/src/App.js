import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import directions from './reducers/directions';

import Directions from './components/Directions';

const reducer = combineReducers ({
  directions: directions.reducer
});

const store = configureStore({ reducer });

export const App = () => {

  return (
    <Provider store={store}>
      <div>
        <Directions />
      </div>
    </Provider>
  );
};
