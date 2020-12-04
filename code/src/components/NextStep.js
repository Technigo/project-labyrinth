import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { gameState } from "../reducers/gameState";
import { actionFetch } from "../reducers/gameFetch";

import { Divider, DirectionButton, Description, ActionHeading, GroupCol, GroupRow } from "../styling/styling";

export const NextStep = () => {
  const gameDetails = useSelector((store) => store.gameState.gameDetails);
  const currentUser = useSelector((store) => store.gameState.userName);

  const dispatch = useDispatch();

  const onNextMove = (direction) => {
    dispatch(actionFetch(currentUser, direction));
    dispatch(gameState.actions.setLoader(true));
  };

  return (
    <>
      <Description>{gameDetails.description}</Description>
      <Divider />
      <ActionHeading>Possible actions:</ActionHeading>
      <GroupRow>
      {gameDetails.actions.map((action, index) => (
        <GroupCol key={index}>
          <p>{action.description}</p>
          <DirectionButton onClick={() => onNextMove(action.direction)}>
            Go {action.direction.toLowerCase()}
          </DirectionButton>
          </GroupCol>
      ))}
      </GroupRow>
    </>
  );
};
