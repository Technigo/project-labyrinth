import React from "react";
import { useSelector } from "react-redux";
import { game } from "../reducers/game";

export const GamePage = () => {
  const question = useSelector((store) => store.game.description);
  const actions = question.actions;
  {
    console.log(question.actions[actions.type]);
  }
  return <div></div>;
};
