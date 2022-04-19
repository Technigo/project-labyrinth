import React from "react";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";
import { game } from "reducers/game";

const Game = () => {
  const positionDescription = useSelector(
    (store) => store.game.position.description
  );
  return (
    <div>
      <p>The Game</p>
      <Typewriter
        key={positionDescription}
        onInit={(typewriter) => {
          typewriter.changeDelay(60).typeString(positionDescription).start();
        }}
      />
    </div>
  );
};

export default Game;
