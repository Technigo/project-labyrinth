import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { gameState } from "./reducers/gameState";
// import { gameFetch } from './reducers/gameFetch'

import { StartGame } from "./components/StartGame";
import { BackgroundContainer } from './styling/styling';


const reducer = combineReducers({ gameState: gameState.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BackgroundContainer>
        <StartGame />
      </BackgroundContainer>
    </Provider>
  );
};
