import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import gameFetch from "reducers/gameFetch";
import Start from "components/Start";

const reducer = combineReducers({
  gameFetch: gameFetch.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Start />
    </Provider>
  );
};
