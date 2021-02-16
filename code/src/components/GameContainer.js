import React from "react";
import { useSelector } from "react-redux";
import { GameContinue } from "./GameContinue";
import { StartGameContainer } from "../lib/GameContainerStyle";
import { GameStart } from "./GameStart";

const GameContainer = () => {
  const gameStart = useSelector((store) => store.game.isGameStarted);

  return (
    <StartGameContainer>
      <GameStart />
      {gameStart && <GameContinue />}
    </StartGameContainer>
  );
};

export default GameContainer;
