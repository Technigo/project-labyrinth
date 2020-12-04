import React, { useState } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { GameLoading } from "components/GameLoading";
import { LabyrinthGame } from "components/LabyrinthGame";

import { labyrinth } from "./reducers/labyrinth";
import { ui } from "./reducers/ui";

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
  ui: ui.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  const [gameCoordinates, setGameCoordinates] = useState("");

  return (
    <Provider store={store}>
      <GameLoading />
      <LabyrinthGame setGameCoordinates={setGameCoordinates} />
    </Provider>
  );
};
