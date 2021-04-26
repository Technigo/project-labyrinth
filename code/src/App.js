import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { moves } from "./reducers/moves";

import { StartPage } from "./components/StartPage";
import { GamePage } from "./components/GamePage";

const reducer = combineReducers({
  moves: moves.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StartPage />
      <GamePage />
    </Provider>
  );
};
