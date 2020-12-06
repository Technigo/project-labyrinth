import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import { nextStepFetch } from "../reducers/reusable";
import { ActionButton } from "../lib/Styling";

const DirectionContainer = styled.div`
  grid-area: ${(props) => props.direction};
  justify-self: center;
  align-self: center;
`;

export const Direction = () => {
  const dispatch = useDispatch();
  const stateUsername = useSelector((state) => state.game.username);
  const actions = useSelector((state) => state.game.currentStep.actions);

  const onNextStep = (direction) => {
    dispatch(nextStepFetch(stateUsername, "move", direction));
  };

  return (
    <>
      {actions.map((action) => (
        <DirectionContainer key={action.direction} direction={action.direction}>
          <ActionButton
            value={action.direction}
            onClick={(event) => onNextStep(event.target.value)}>
            Go to {action.direction}
          </ActionButton>
        </DirectionContainer>
      ))}
    </>
  );
};
