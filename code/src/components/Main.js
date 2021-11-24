import React from "react";
import { useSelector } from "react-redux";

import { StartGame } from "./StartGame";
import { Game } from "./Game";

export const Main = () => {
  const currentPosition = useSelector((store) => store.game.currentPosition);

  return <> {currentPosition ? <Game /> : <StartGame />} </>;
};
