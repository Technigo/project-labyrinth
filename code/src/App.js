import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { gameSteps } from "reducers/gameSteps";
import { loading } from "reducers/loading";
import { Main } from "components/Main";
import { screen } from "reducers/screen";

const reducer = combineReducers({
  gameSteps: gameSteps.reducer,
  loading: loading.reducer,
  screen: screen.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
