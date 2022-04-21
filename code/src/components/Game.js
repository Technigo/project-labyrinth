import React from "react";
import { useSelector } from "react-redux";

import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";

const Game = () => {
  const gameData = useSelector((store) => store.game.gameData);
  console.log(gameData);

  //V3 function
  // const renderScreen = () => {
  //     if (quote) {
  //         return <GameScreen />
  //     }
  //       return <StartScreen />
  // }

  // V1
  return (
    <section>
      <div>{gameData ? <GameScreen /> : <StartScreen />}</div>
    </section>
  );

  // V2
  // if (quote) {
  //     return <GameScreen />
  // }
  //   return <StartScreen />

  // V3
  // return renderScreen();
};

export default Game;
