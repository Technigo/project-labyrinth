import React from "react";
import StartPage from "./StartPage";
import GamePage from "./GamePage";
import { useSelector } from "react-redux";

const GameSwitcher = () => {
  const coordinates = useSelector((store) => store.game.gameList.coordinates);

  switch (coordinates) {
    case "0,0":
      return <GamePage />;
    case "1,0":
      return <GamePage />;
    case "1,1":
      return <GamePage />;
    case "0,1":
      return <GamePage />;
    case "0,2":
      return <GamePage />;
    case "0,3":
      return <GamePage />;
    case "1,3":
      return <GamePage />;
    default:
      return <StartPage />;
  }
};

export default GameSwitcher;
