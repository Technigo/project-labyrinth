import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import game from "reducers/game";
import ui from "reducers/ui";
import StartScreen from "components/StartScreen";
import GamePlay from "components/GamePlay";

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/Gameplay" element={<GamePlay />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
