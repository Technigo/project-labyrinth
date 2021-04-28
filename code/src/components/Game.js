import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NameInput } from "./NameInput";
import { GameScreen } from "./GameScreen";
import { WelcomeScreen } from "./WelcomeScreen";

import game from "../reducers/game";

const Game = () => {
  const userName = useSelector((store) => store.game.userName);
  const gameStart = useSelector((store) => store.game.gameStart);

    if (gameStart) {
      return (
        <>
          {/* render GameScreen */}
          <p>This is the GameScreen component!</p>
          <GameScreen />
        </>
        )
    } else {
      // render welcome or nameinput
      return (
        <div>
          <p>This is the Game component!</p>
          {userName ? <WelcomeScreen /> : <NameInput />}
    
        </div>
      );
    
    }
};

export default Game;
