import React from "react";
import { useSelector } from "react-redux";

import { NameInput } from "./NameInput";
import { GameScreen } from "./GameScreen";
import { WelcomeScreen } from "./WelcomeScreen";
import { EndScreen } from "./EndScreen";

const Game = () => {
  const userName = useSelector((store) => store.game.userName);
  const gameStart = useSelector((store) => store.game.gameStart);
  const gameActions = useSelector((store) => store.game.gameData?.actions);
  console.log(gameActions)
  // Single page application
  // rendering the GameScreen, WelcomeScreen or NameInput
  if (gameStart && gameActions.length === 0) {
    return (
      <main>
        <EndScreen />
      </main>
    );
  } else if(gameStart){
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
