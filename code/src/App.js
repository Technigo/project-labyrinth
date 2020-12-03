import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from "styled-components/macro";

import { Header } from './components/Header';
import { Start } from './components/Start';
import { Loading } from './components/Loading';
import { Board } from './components/Board';
import { Footer } from './components/Footer';

import { game } from './reducers/game';
import { ui } from './reducers/ui';

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer
});

const store = configureStore({ reducer });

const Grid = styled.main`
  padding: 0 5vw;
  display: grid;
  grid-template-rows: 10vh 80vh 10vh;
`;

export const App = () => {
  return (
    <Provider store={store}>
      <Grid>
        <Header />
        <Start />
        <Loading />
        <Board />
        <Footer />
      </Grid>
    </Provider>
  )
}
