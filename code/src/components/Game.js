import React from "react";
import { useSelector } from "react-redux";

import Start from "./Start";
import Gamepage from "./Gamepage";

const Game = () => {
  const gameStatus = useSelector((store) => store.labyrinth.gameStatus);
  console.log(gameStatus);
  return <div>{gameStatus ? <Gamepage /> : <Start />}</div>;
};

export default Game;
