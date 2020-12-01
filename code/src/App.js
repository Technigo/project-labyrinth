
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createGlobalStyle } from 'styled-components'

import GameContainer from './components/GameContainer';
import { game } from './reducers/game';

const GlobalStyle = createGlobalStyle`
body {
  background-color: #0B8565;
}`;

const reducer = combineReducers({ game: game.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <GameContainer />
    </Provider>
  )
}
