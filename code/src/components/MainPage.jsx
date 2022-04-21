import React from "react";
import { useSelector } from "react-redux";

import { StartPage } from "./StartPage";
import { Game } from "./Game";

export const MainPage = () => {
  const currentPosition = useSelector((store) => store.game.currentPosition);

  return <> {currentPosition ? <Game /> : <StartPage />} </>;
};