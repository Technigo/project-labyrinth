import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import gameplay from "./reducers/gameplay";
import loading from "reducers/loading";

const reducer = combineReducers({
  gameplay: gameplay.reducer,
  loading: loading.reducer,
});

const store = configureStore({ reducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
