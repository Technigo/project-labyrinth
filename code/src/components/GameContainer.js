import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { generateActionMove } from '../reducers/fetch'

export const GameContainer = () => {
  const dispatch = useDispatch()

  const game = useSelector((store) => store.game.gameinfo);

  const onActionMoveGenerate = () => {
    dispatch(generateActionMove())
  }

  return (
    <div>
      <div>{game.description}</div>
      {console.log(game.actions)}
      {game.actions.map((item) => (
        <div>
          <p>{item.description}</p>
          <button onClick={onActionMoveGenerate}>{item.direction}</button>
        </div>
      ))}
    </div>
  );
};
