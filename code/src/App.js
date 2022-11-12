import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import game from 'reducers/game';
import Wrapper from 'components/Wrapper';

// import { GameWrapper } from './components/styled/GameWrapper.styled';
import 'nes.css/css/nes.min.css';

import { OuterWrapper } from 'components/styled/containers';

export const App = () => {
  const reducer = combineReducers({
    game: game.reducer
  });
  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <OuterWrapper
        style={{
          backgroundImage: 'url(/assets/maze.png)'
        }}
      >
        <Wrapper />
      </OuterWrapper>
    </Provider>
  );
};
