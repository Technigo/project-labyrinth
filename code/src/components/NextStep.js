import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionFetch } from "../reducers/gameFetch";
import { Divider, Button, Text } from "../styling/styling";

export const NextStep = () => {
  const gameDetails = useSelector((store) => store.gameState.gameDetails);
  const currentUser = useSelector((store) => store.gameState.userName);
  const dispatch = useDispatch();

  const onNextMove = (direction) => {
    dispatch(actionFetch(currentUser, direction));
  };

  
<<<<<<< HEAD
  return (
=======
  return (   
>>>>>>> a68edcb53b7ca09c31ca2817cec4fbece4985413
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

