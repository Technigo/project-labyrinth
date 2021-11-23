import React from "react";
import { game } from "./reducers/game";
import LoadingIndicator from "components/LoadingIndicator";
import { Provider } from "react-redux";
import GameSwitcher from "components/GameSwitcher";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ui } from "reducers/ui";

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer,
});

export const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GameSwitcher />
      <LoadingIndicator />
    </Provider>
  );
};
