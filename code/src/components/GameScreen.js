import React from "react";
import { useSelector } from "react-redux";

import gameFetch from "../reducers/gameFetch";

const GameScreen = () => {
  const gameScreen = useSelector((store) => store.gameFetch);

  // console.log(gameScreen);

  return <div>GameScreen</div>;
  // <div>
  //   {gameScreen.map((choice) => (
  //     <button>{choice}</button>
  //   ))}
  // </div>
  // );
};

export default GameScreen;
