import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../lib/Button";
import { getStartGame } from "../reducers/reusable";

export const StartGame = () => {
  const username = useSelector(store => store.game.username);
  const dispatch = useDispatch();

  const handleGameStart = () => {
    dispatch(getStartGame(username));
  };
  return (
    <div>
      <p>Start Game Component</p>
      <Button onClick={handleGameStart}>Start Game</Button>
    </div>
  );
};
