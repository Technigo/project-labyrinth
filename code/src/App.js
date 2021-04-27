import React from "react";
import { useSelector } from "react-redux";

import GameScreen from "./components/GameScreen";
import StartScreen from "./components/StartScreen";

export const App = () => {
  const userName = useSelector((store) => store.gameFetch.userName);

  return userName ? <GameScreen /> : <StartScreen />;
};
