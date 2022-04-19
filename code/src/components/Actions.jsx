import React from "react";
import { useDispatch } from "react-redux";
import { game } from "reducers/game";
import { playerAction } from "reducers/game";

const Actions = ({ action }) => {
  const dispatch = useDispatch();

  const playerChoice = () => {
    dispatch(game.actions.setType(action.type));
    dispatch(game.actions.setDirection(action.direction));
    dispatch(playerAction());
  };

  return (
    <div>
      <button onClick={playerChoice}>
        {action.type} {action.direction}
      </button>
    </div>
  );
};

export default Actions;
