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
  const history = useSelector((state) => state.game.history);

  return (
    <PositionPlaceholder>
      <p>Coordinates: {currentStep.coordinates}</p>
      <p>Round: {history.length + 1}</p>
    </PositionPlaceholder>
  );
};