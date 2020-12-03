import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

const PositionPlaceholder = styled.div`
  grid-area: position;
  justify-self: end;
  text-align: right;
`;

export const Position = () => {
  const currentStep = useSelector((state) => state.game.currentStep);
  const steps = useSelector((state) => state.game.stepCounter);

  return (
    <PositionPlaceholder>
      <p>Current position: {currentStep.coordinates}</p>
      <p>Steps made: {steps}</p>
    </PositionPlaceholder>
  );
};