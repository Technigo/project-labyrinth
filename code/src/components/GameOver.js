import React from "react";
import { useDispatch } from "react-redux";
import { quest } from "reducers/quest";

export const GameOver = () => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(quest.actions.setPlayersName(""));
    dispatch(quest.actions.setHistory([]));
  };

  return (
    <>
      <h1>This journey is completed.</h1>
      <h2>...many others yet to come.</h2>
      <button onClick={onButtonClick}>Play Again</button>
    </>
  );
};
