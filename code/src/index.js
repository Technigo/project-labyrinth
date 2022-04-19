import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import instructions from "./reducers/instructions";

const reducer = combineReducers({
  instructions: instructions.reducer,
});

const store = configureStore({ reducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
