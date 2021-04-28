import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateMove } from "../reducers/game";

export const GamePage = () => {
  const gameUsername = useSelector((store) => store.game.username);
  const gameActions = useSelector((store) => store.game.currentStep.actions);

  const dispatch = useDispatch();

  return (
    <>
      {gameActions.map((action) => (
        <div key={action}>
          <button
            type="button"
            onClick={() =>
              dispatch(generateMove(gameUsername, action.direction))
            }
          >
            {action.direction}
          </button>
          <p>{action.description}</p>
        </div>
      ))}
    </>
  );
};
