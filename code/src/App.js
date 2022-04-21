import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { game } from "./reducers/game";
import { ui } from "./reducers/ui";

import { MainPage } from "./components/MainPage";
import { LoadingAnimation } from "./components/LoadingAnimation";

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingAnimation/>
      <MainPage />
    </Provider>
  );
};