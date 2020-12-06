import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import { game } from "../reducers/game";
import { Text, ActionButton } from "../lib/Styling";

const ButtonContainer = styled.div`
  grid-area: back;
  justify-self: center;
  align-self: center;
  display: flex;
  align-items: baseline;
`;

const GoBackText = styled(Text)`
  margin: 0 10px 0 0;
`;

export const BackOrRestart = () => {
  const dispatch = useDispatch();
  const coordinates = useSelector((state) => state.game.currentStep.coordinates)

  const onGoBack = () => {
    dispatch(game.actions.oneStepBack());
  };

  if (coordinates === "1,3") {
    return (
      <ButtonContainer>
        <GoBackText>Great! You made it out of the maze. Want to try again?</GoBackText>
        <ActionButton onClick={() => window.location.reload()}>
          Play again
        </ActionButton>
      </ButtonContainer>
    )
  } else if (coordinates === "0,0") {
    return (
      <>
      </>
    )
  } else {
    return (
      <ButtonContainer>
        <GoBackText>Does this feel wrong?</GoBackText>
        <ActionButton onClick={onGoBack}>
          Go back
        </ActionButton>
      </ButtonContainer>
    )
  }
};
