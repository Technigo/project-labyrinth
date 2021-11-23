import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ui } from "./reducers/ui";
import { quest } from "./reducers/quest";

// components
import { MainRender } from "components/MainRender";

import "./index.css";

const reducer = combineReducers({
  ui: ui.reducer,
  quest: quest.reducer,
});

const persistedStateJSON = localStorage.getItem("reduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = configureStore({ reducer, preloadedState: persistedState });

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <main className="app">
        <MainRender />
      </main>
    </Provider>
  );
};
