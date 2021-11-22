import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ui } from "./reducers/ui";
import StartPage from "components/StartPage";
import { LoadingIndicator } from "components/LoadingIndicator";
import { Provider } from "react-redux";
import GamePage from "components/GamePage";
import StartGameButton from "components/StartGameButton";

const reducer = combineReducers({
  ui: ui.reducer,
});

export const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LoadingIndicator />
        <Link to="/game">
          <StartGameButton />
        </Link>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
