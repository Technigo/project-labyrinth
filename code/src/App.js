import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { loader } from "./reducers/loader";
import { labyrinth } from "./reducers/labyrinth";
import { LoadingPage } from "./components/LoadingPage";
import { StartGame } from "./components/StartGame";

import "./index";

// adds the reducers into one reducer to be able to configure the store with one reducer
const reducer = combineReducers({
  loader: loader.reducer,
  labyrinth: labyrinth.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <LoadingPage />
        <StartGame />
      </div>
    </Provider>
  );
};
