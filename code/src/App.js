import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import game from "./reducers/game";
import GamePage from "./components/GamePage";
import { loader } from "reducers/loader";

// a function to combine all slices in the reducers folder
const reducer = combineReducers({
  game: game.reducer,
  loader: loader.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GamePage />
    </Provider>
  );
};
