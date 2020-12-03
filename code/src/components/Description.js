import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

const DescriptionPlaceholder = styled.div`
  grid-area: description;
  justify-self: center;
  align-self: end;
  text-align: center;
`;

export const Description = () => {
  const currentStep = useSelector((state) => state.game.currentStep);

  return <DescriptionPlaceholder>{currentStep.description}</DescriptionPlaceholder>;
};