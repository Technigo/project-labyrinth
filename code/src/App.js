import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { labyrinth } from './reducers/description';
import { LabyrinthGame } from 'components/LabyrinthGame';

const reducer = combineReducers({
  labyrinth: labyrinth.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <LabyrinthGame />
    </Provider>
  );
};
