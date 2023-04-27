import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import labyrinth from 'reducers/labyrinth';
import { LabyrinthWrapper } from 'components/LabyrinthWrapper';
import { OuterWrapper } from 'components/styles/Container';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer
  });
  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <OuterWrapper>
        <LabyrinthWrapper />
      </OuterWrapper>
    </Provider>
  );
};
