import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import labyrinth from 'reducers/labyrinth';
import { LabyrinthWrapper } from 'components/LabyrinthWrapper';
import 'nes.css/css/nes.min.css';
// documentation on the nes.css to be found here: https://github.com/nostalgic-css/NES.css
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
