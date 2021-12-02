import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { ui } from "./reducers/ui";
import steps from "./reducers/steps";

import Container from "./components/Container";

const reducer = combineReducers({
  ui: ui.reducer,
  steps: steps.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};
