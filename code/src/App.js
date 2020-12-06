import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// -- reducer --
import { game } from "./reducers/game";
import { ui } from "./reducers/ui";

// -- components --
import { GameDescription } from "./components/GameDescription";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { Header } from "./components/Header";
import { RestartGame } from "./components/RestartGame";

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer,
});

// --- LOCAL STORAGE ---

//1. Retrieve the local storage and use it as our initial state
const persistedStateJSON = localStorage.getItem("ReJoelsState");

let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

//2. Create the storage using the initial state
const store = configureStore({ reducer, persistedState });

//3. Store the state in local storage on ANY redux state change
store.subscribe(() => {
  localStorage.setItem("ReJoelsState", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <LoadingIndicator />
      <GameDescription />
      <RestartGame />
    </Provider>
  );
};
