import React from "react";
import { useSelector } from "react-redux";
import { UserInput } from "./UserInput";
import { StartGame } from "./StartGame";

import { Labyrinth } from "./Labyrinth";

export const Welcome = () => {
  const currentGameState = useSelector(store => store.game.currentGameState);
  console.log("Game state:" + currentGameState);

  if (!currentGameState.gameData) {
    return (
      <div>
        <h1>Welcome to the Labyrinth room</h1>
        <UserInput />
        <StartGame />
      </div>
    );
  } else {
    return <Labyrinth />;
  }
};
