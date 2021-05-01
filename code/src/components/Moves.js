import React from "react";
import { useSelector } from "react-redux";

import { StartPage } from "./StartPage";
import { GamePage } from "./GamePage";

export const Moves = () => {
  const username = useSelector((store) => store.game.username);
  return <div>{username ? <GamePage /> : <StartPage />}</div>;
};
