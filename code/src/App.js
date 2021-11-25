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
import thunk from "redux-thunk";
import { TheBoard } from "components/TheBoard";

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer,
});

const composeEnhancer =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <TheBoard />
        {/* <StartPage />
        <TheGame />
        <LoadingIndicator /> */}
      </Provider>
    </>
  );
};
