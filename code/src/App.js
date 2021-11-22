import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ui } from "./reducers/ui";
import { quest } from "./reducers/quest";

// components
import { MainRender } from "components/MainRender";

import "./index.css";

const reducer = combineReducers({
  ui: ui.reducer,
  quest: quest.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main className="app">
        <MainRender />
      </main>
    </Provider>
  );
};
