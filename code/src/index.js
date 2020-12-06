import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { App } from "./App";
import { game } from "./reducers/game";
import { ui } from "./reducers/ui";

import "./index.css";

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer,
});

// Get localstorage and sets as preloadedState
const persistedStateJSON = localStorage.getItem("gameStore");
let preloadedState = {};
if (persistedStateJSON) {
  preloadedState = JSON.parse(persistedStateJSON);
}

// Configure store with preloadedState
export const store = configureStore({ reducer, preloadedState });

// Store the state in localstorage on Redux state change
store.subscribe(() => {
  localStorage.setItem("gameStore", JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
