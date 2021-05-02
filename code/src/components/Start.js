import React from "react";
import { useSelector } from "react-redux";

import StartScreen from "./StartScreen"
import Game from "./Game"

const Start = () => {
  const userName = useSelector(store => store.gameFetch.userName)

  return (
    <div>
      {userName
        ? <Game />
        : <StartScreen />}
    </div>
  );
};

export default Start;
