import React from "react";
import { useSelector } from "react-redux";

import { Start } from "./Start";
import { Labyrinth } from "./Labyrinth";

export const Game = () => {
  const currentPosition = useSelector((store) => store.game.currentPosition);

  return (
    <div className="container">
      {currentPosition ? <Labyrinth /> : <Start />}
    </div>
  );
};
