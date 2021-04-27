import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NameInput } from "./NameInput";
import { WelcomeScreen } from "./WelcomeScreen";

import game from "../reducers/game";

const Game = () => {
  const userName = useSelector((store) => store.game.userName);

  return (
    <div>
      <p>This is the Game component!</p>
      {userName ? <WelcomeScreen /> : <NameInput />}
    </div>
  );
};

export default Game;
