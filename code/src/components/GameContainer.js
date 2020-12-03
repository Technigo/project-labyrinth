import React from "react";
import { useSelector } from "react-redux";

import { StartGame } from "./StartGame";
import { NextStep } from "./NextStep";
import { TheEnd } from "./TheEnd";
import { TextContainer } from "../styling/styling";

export const GameContainer = () => {
  const gameDetails = useSelector((store) => store.gameState.gameDetails);

  return (
    <TextContainer>
      {!gameDetails.coordinates && <StartGame />}

      {gameDetails.coordinates && gameDetails.coordinates !== "1,3" && (
        <NextStep />
      )}
      {gameDetails.coordinates === "1,3" && (
        <TheEnd description={gameDetails.description} />
      )}
    </TextContainer>
  );
};
