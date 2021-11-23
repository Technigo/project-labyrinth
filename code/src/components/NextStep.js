import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { gamestate, nextMove } from "../reducers/gamestate";


export const NextStep = () => {
  const gameStatus = useSelector((state) => state.gamestate.gameStatus);
  const currentUser = useSelector((state) => state.gamestate.username);

	console.log(currentUser)

  const dispatch = useDispatch();

  const onNextMove = (direction) => {
    dispatch(nextMove(currentUser, direction));
    dispatch(gamestate.actions.setLoading(true));
  };

  return (
    <>
			{/* <h1>Hello {currentUser}</h1>  */}
      <p>{gameStatus.description}</p>
      <p>Possible actions:</p>
        {gameStatus.actions.map((action, index) => (
          <div key={index}>
            <p>{action.description}</p>
            <button onClick={() => onNextMove(action.direction)}>
              Go {action.direction.toUpperCase()}
            </button>
          </div>
      ))}
    </>
  );
};