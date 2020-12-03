import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

const DescriptionPlaceholder = styled.div`
  grid-area: instruction;
  text-align: center;
`;

export const ActionDescription = () => {
  const actions = useSelector((state) => state.game.currentStep.actions);

  return (
    <>
      {actions.map((action) => (
        <DescriptionPlaceholder key={action.direction}>{action.direction}: {action.description}</DescriptionPlaceholder>
      ))}
    </>
  );
};