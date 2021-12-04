import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ui } from "./reducers/ui";
import { game } from "./reducers/game";
import LandingPage from "pages/LandingPage";
import Game from "pages/Game";
import StartGame from "pages/StartGame";

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer,
});

const preloadedStateJSON = localStorage.getItem('gameReduxState')
let preloadedState = {}

if (preloadedStateJSON) {
  preloadedState = JSON.parse(preloadedStateJSON) 
}

//configures the store with the slices and the localstate
const store = configureStore({ reducer, preloadedState })

//Store the state in localstorage, when Redux state changes
store.subscribe(() => {
  localStorage.setItem('gameReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/start" element={<StartGame />} />
            <Route path="/game" element={<Game />} />
          </Routes>
      </BrowserRouter>
    </Provider>
  );
};
