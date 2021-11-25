import React from "react";
import { Provider } from "react-redux";
import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from "@reduxjs/toolkit";
import { game } from "reducers/game";
import { ui } from "reducers/ui";
import { TheBoard } from "components/TheBoard";
import thunk from "redux-thunk";

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer,
});

const composeEnhancer =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// const persistedStateJSON = localStorage.getItem("todos");
// let persistedState = {};

// if (persistedStateJSON) {
//   persistedState = JSON.parse(persistedStateJSON);
// }

const store = createStore(
  reducer,
  // persistedState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancer(applyMiddleware(thunk))
);

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <TheBoard />
      </Provider>
    </>
  );
};
