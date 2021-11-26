import React from "react";
import { Provider } from "react-redux";
// import thunk from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { ui } from "./reducers/ui";
import steps from "./reducers/steps";

import Container from "./components/Container";

const reducer = combineReducers({
  ui: ui.reducer,
  steps: steps.reducer,
});

// const composeEnhancer =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const store = configureStore(
  { reducer }
  // composeEnhancer(applyMiddleware(thunk))
);

export const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};
