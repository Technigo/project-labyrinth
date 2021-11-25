import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { game } from "reducers/game";

import GameBoard from "components/GameBoard";
import RestartButton from "components/RestartButton";
import LoadingStuff from "components/LoadingStuff";
import { ui } from "reducers/ui";

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer,
});

const store = configureStore({ reducer });

// clear cache

export const App = () => {
  return (
    <Provider store={store}>
      <>
        <GameBoard />
        <RestartButton />
        <LoadingStuff />
      </>
    </Provider>
  );
};
