import React from "react";
import { useSelector } from "react-redux";

import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";

const Game = () => {
  const gameData = useSelector((store) => store.game.gameData);
  console.log(gameData);

  return (
    <section>
      <div>{gameData ? <GameScreen /> : <StartScreen />}</div>
    </section>
  );
};

export default Game;
