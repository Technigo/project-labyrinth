import React from "react";
import { HeroAnimation } from "./HeroAnimation";
import { useDispatch } from "react-redux";
import { quest } from "reducers/quest";

export const GameOver = () => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(quest.actions.setPlayersName(""));
  };

  return (
    <>
      <h1>This journey is completed.</h1>
      <h2>...many others yet to come.</h2>
      <HeroAnimation />
      <button onClick={onButtonClick}>Play Again</button>
    </>
  );
};
