import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import { BackButton, BackOrRestart } from './BackOrRestart';

const DescriptionPlaceholder = styled.div`
  grid-area: description;
  justify-self: center;
  align-self: end;
  text-align: center;
  border: 3px solid #ff6932;
  padding: 1vw;
`;

export const Description = () => {
  const currentStep = useSelector((state) => state.game.currentStep);

  return (
    <>
      <DescriptionPlaceholder>
        {currentStep.description}
        <BackOrRestart />
      </DescriptionPlaceholder>
    </>
  )
};