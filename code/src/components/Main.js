import React from "react";
import { useSelector } from "react-redux";
import { UsernameScreen } from "../screens/UsernameScreen";
import { GameScreen } from "screens/GameScreen";

export const Main = () => {
  const currentScreen = useSelector((store) => store.screen.currentScreen);

  return (
    <>
      {currentScreen === "username" && <UsernameScreen />}
      {currentScreen === "game" && <GameScreen />}
    </>
  );
};
