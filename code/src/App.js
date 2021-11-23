import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { ui } from "./reducers/ui";
import { game } from "./reducers/game";
import LandingPage from "pages/LandingPage";
import Game from "pages/Game";
import End from "pages/End";
import StartGame from "pages/StartGame";

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer,
});

const store = configureStore({ reducer });

//we still need to import the loading indicator <LoadingIndicator />
export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">LandingPage</Link>
              </li>
              <li>
                <Link to="/startGame">StartGame</Link>
              </li>
              <li>
                <Link to="/game">Game</Link>
              </li>
              <li>
                <Link to="/end">End</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/startGame" element={<StartGame />} />
            <Route path="/game" element={<Game />} />
            <Route path="/end" element={<End />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};
