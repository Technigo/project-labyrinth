import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import { gameSteps } from "reducers/gameSteps";
import { loading } from "reducers/loading";
import { Main } from "components/Main";

const reducer = combineReducers({
  gameSteps: gameSteps.reducer,
  loading: loading.reducer,
});

const store = createStore(reducer);

export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
