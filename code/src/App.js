import { combineReducers, configureStore } from "@reduxjs/toolkit";
import React from "react";
import { ui } from "./reducers/ui";
import StartPage from "components/StartPage";
import { LoadingIndicator } from "components/LoadingIndicator";
import { Provider } from "react-redux";

const reducer = combineReducers({
  ui: ui.reducer,
});

export const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StartPage />
      <LoadingIndicator />
    </Provider>
  );
};
