import React from "react";
import { useSelector } from "react-redux";

import { NameInput } from "./NameInput";
import { GameScreen } from "./GameScreen";
import { WelcomeScreen } from "./WelcomeScreen";

const Game = () => {
  const userName = useSelector((store) => store.game.userName);
  const gameStart = useSelector((store) => store.game.gameStart);

  // Singel page application
  // rendering the GameScreen, WelcomeScreen or NameInput
  if (gameStart) {
    return (
      <main>
        <GameScreen />
      </main>
    );
  } else {
    return <main>{userName ? <WelcomeScreen /> : <NameInput />}</main>;
  }
};

export default Game;
