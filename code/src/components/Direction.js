import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import { nextStepFetch } from "../reducers/reusable";
import { Button } from '../lib/Styling';

const DirectionContainer = styled.div`
  grid-area: ${(props) => props.direction};
  justify-self: start;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    ". button ."
    "description description description";
`;

const StyledButton = styled(Button)`
  grid-area: button;
  align-self: end;
  width: 100%;
  height: 50%;
`;

const DescriptionPlaceholder = styled.div`
  grid-area: description;
  justify-self: center;
  align-self: center;
  text-align: center;
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
          <StyledButton
            value={action.direction}
            onClick={(event) => onNextStep(event.target.value)}>
            Go to {action.direction}
          </StyledButton>
          <DescriptionPlaceholder>{action.description}</DescriptionPlaceholder>
        </DirectionContainer>
      ))}
    </>
  );
};