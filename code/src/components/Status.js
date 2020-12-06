import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import { SmallText } from "../lib/Styling";

const StatusPlaceholder = styled.div`
  grid-area: status;
  align-self: flex-end;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Status = () => {
  const stateUsername = useSelector((state) => state.game.username);
  const currentStep = useSelector((state) => state.game.currentStep);
  const steps = useSelector((state) => state.game.stepCounter);

  return (
    <StatusPlaceholder>
      <SmallText>Username: {stateUsername}</SmallText>
      <SmallText>Current position: {currentStep.coordinates}</SmallText>
      <SmallText>Steps made: {steps}</SmallText>
    </StatusPlaceholder>
  );
};