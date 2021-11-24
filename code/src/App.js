import React from "react";
import { Provider } from "react-redux";
import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from "@reduxjs/toolkit";
import StartPage from "components/StartPage";
import { game } from "reducers/game";
import { ui } from "reducers/ui";
import { LoadingIndicator } from "components/LoadingIndicator";
import thunk from "redux-thunk";

// import "./index";

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
        <StartPage />
        <LoadingIndicator />
      </Provider>
    </>
  );
};
