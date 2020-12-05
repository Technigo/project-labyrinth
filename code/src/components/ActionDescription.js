import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import { SmallText } from '../lib/Styling';

const ActionDescriptionPlaceholder = styled.div`
  grid-area: instructions;
`;

export const ActionDescription = () => {
  const actions = useSelector((state) => state.game.currentStep.actions);

  return (
    <ActionDescriptionPlaceholder>
      {actions.map((action) => (
        <SmallText key={action.direction}>
          {action.direction}: {action.description}
        </SmallText>
      ))}
    </ActionDescriptionPlaceholder>
  );
};