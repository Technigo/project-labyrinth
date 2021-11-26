import React from "react";
import { useSelector } from "react-redux";

// components
import { Start } from "./Start";
import { Labyrinth } from "./Labyrinth";
import { LoadingIndicator } from "./LoadingIndicator";

export const Game = () => {
  const currentPosition = useSelector((store) => store.game.currentPosition);
  const loading = useSelector((store) => store.ui.isLoading);

  return (
    <>
      {loading && <LoadingIndicator />}

      {currentPosition ? <Labyrinth /> : <Start />}
    </>
  );
};
