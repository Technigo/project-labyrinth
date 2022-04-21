import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

import game from './reducers/game';
import Game from './components/Game';


const reducer = combineReducers ({
  game: game.reducer
});

const store = configureStore({ reducer });

export const App = () => {

  return (
    <Provider store={store}>
      <Container>
        <Game />
      </Container>
    </Provider>
  );
};

const Container = styled.div`
  
`