import React from "react";
import { useSelector } from "react-redux";

import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";
import { Loading } from "./Loading";

const Game = () => {
  const gameData = useSelector((store) => store.game.gameData);
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          <div>{gameData ? <GameScreen /> : <StartScreen />}</div>
        </section>
      )}
    </>
  );
};

export default Game;
