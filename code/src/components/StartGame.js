import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGame } from "../reducers/game";
import Game from "components/Game";

const StartGame = () => {
  const dispatch = useDispatch();
  const story = useSelector((store) => store.game.moves);
  console.log(story);
  return (
    <div>
      <button onClick={() => dispatch(fetchGame())}>Start Game</button>
      <Game />
    </div>
  );
};
export default StartGame;
