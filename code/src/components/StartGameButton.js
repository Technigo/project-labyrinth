import React from "react";
import { useDispatch } from "react-redux";
import { fetchGame } from "reducers/game";

export const StartGameButton = () => {
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(fetchGame())}>
      Start Game!
    </button>
  );
};
