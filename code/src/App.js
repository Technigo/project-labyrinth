import React from "react";
import { Provider } from "react-redux";
import { Start } from "./components/Start";
import { start } from "./reducers/start";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loader from "./reducers/loader";

const reducer = combineReducers({
  start: start.reducer,
  loader: loader.reducer,
});

const store = configureStore({ reducer });
export const App = () => {
  return (
    <Provider store={store}>
      <Start />
    </Provider>
  );
};
