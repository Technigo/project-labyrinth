import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionFetch } from "../reducers/gameFetch";
import { Divider, Button } from "../styling/styling";

export const NextStep = () => {
  const gameDetails = useSelector((store) => store.gameState.gameDetails);
  const currentUser = useSelector((store) => store.gameState.userName);
  const dispatch = useDispatch();

  const onNextMove = (direction) => {
    dispatch(actionFetch(currentUser, direction));
  };

  return (
    <>
      <p>{gameDetails.description}</p>
      <Divider />
      <p>Possible actions:</p>
      {gameDetails.actions.map((action, index) => (
        <div key={index}>
          <p>{action.description}</p>
          <Button onClick={() => onNextMove(action.direction)}>
            Go {action.direction.toLowerCase()}
          </Button>
        </div>
      ))}
    </>
  );
};
