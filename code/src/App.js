
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from '@reduxjs/toolkit';
import { createGlobalStyle } from 'styled-components'
import thunk from 'redux-thunk'
import {applyMiddleware, compose} from '@reduxjs/toolkit'

import GameContainer from './components/GameContainer';
import { game } from './reducers/game';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const GlobalStyle = createGlobalStyle`
body {
  background-color: #0B8565;
}`;

const reducer = combineReducers({ game: game.reducer });

// Store the code 
// 1) Retrieve the local storage and use it as out initial state
  const persistedStateJSON = localStorage.getItem("reduxStates");
  console.log(`persistedStateJSON: ${persistedStateJSON}`);

    let persistedState = {};

  if (persistedStateJSON) {
    persistedState = JSON.parse(persistedStateJSON);
  }
  console.log(`persistedState: ${persistedState}`)

// 2) Create the store using the initial state and retrieved state 

const store = createStore(
  reducer,
  persistedState,
  composeEnhancer(applyMiddleware(thunk))
);


// 3) Store the state in localstorage on ANY redux state change 
store.subscribe(() => {
  localStorage.setItem('reduxStates', JSON.stringify(store.getState()));
});


export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <GameContainer />
    </Provider>
  )
}
