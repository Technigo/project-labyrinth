import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import gameFetch from "./reducers/gameFetch";

const reducer = combineReducers({
  gameFetch: gameFetch.reducer,
});
const store = configureStore({ reducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
