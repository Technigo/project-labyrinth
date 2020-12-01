import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// Components
import { Loading } from './components/Loading';
import { Labyrinth } from './components/Labyrinth';
import { DirectionButtons } from './components/DirectionButtons';

// Reducers
import { labyrinth } from './reducers/labyrinth';
import { ui } from './reducers/ui';

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
  ui: ui.reducer,
});

const store = configureStore({ reducer });
// ----------------------------------------------------------------

export const App = () => {
  return (
    <Provider store={store}>
      <Loading />
      <Labyrinth />
      <DirectionButtons />
    </Provider>
  );
};
