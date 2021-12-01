import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { game } from "./reducers/game";

import Loader from "./components/Loader";
import Content from "./components/Content";

export const App = () => {
  const reducer = combineReducers({
    game: game.reducer,
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <Loader />
      <Content />
    </Provider>
  );
};
