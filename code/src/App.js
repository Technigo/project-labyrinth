import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import StartGame from "components/StartGame";
import { game } from "./reducers/game";
import { loading } from "./reducers/loading";

const reducer = combineReducers({
  game: game.reducer,
  loading: loading.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StartGame />
    </Provider>
  );
};
