import React from "react";
import { useSelector } from "react-redux";

import StartPage from "./StartPage";
import { LoadingPage } from "./LoadingPage";
//import Maze from "./Maze"

const GamePage = () => {
  const gameStatus = useSelector((state) => state.game.setGameStatus);

  return (
    <>
      {gameStatus ? <Maze /> : <StartPage />}
      <LoadingPage />
    </>
  );
};

export default GamePage;
