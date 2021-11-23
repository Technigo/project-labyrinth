import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import GameCard from "components/GameCard";
import { game } from "reducers/game";
import { ui } from "reducers/ui";
import LoadingIndicator from "components/LoadingIndicator";

import "./index";

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer,
});

const store = createStore(reducer);

export const App = () => {
  return (
    <Provider store={store}>
      Find me in src/app.js!
      <GameCard />
      <LoadingIndicator />
    </Provider>
  );
};
