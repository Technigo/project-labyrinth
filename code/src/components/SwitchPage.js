import React from "react";
import { useSelector } from "react-redux";
import { ui } from "reducers/ui";
import { GamePage } from "./GamePage";
import { StartPage } from "./StartPage";

export const SwitchPage = () => {
  const loading = useSelector((store) => store.ui.loading);
  const labyrinth = useSelector((store) => store.labyrinth.location);
  const loadingState = useSelector((store) => store.labyrinth.loading);
  return (
    <div>
      {loading && <p>Loading....</p>}

      {!loadingState && labyrinth === null && <StartPage />}
      {!loadingState && labyrinth !== null && <GamePage />}
    </div>
  );
};
