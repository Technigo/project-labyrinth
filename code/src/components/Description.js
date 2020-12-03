import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

const DescriptionPlaceholder = styled.div`
  grid-area: description;
  justify-self: center;
  align-self: end;
  text-align: center;
  border: 3px solid #ff6932;
  border-radius: 5px;
  box-shadow: 10px 10px 10px grey;
  padding: 5px;

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const Description = () => {
  const currentStep = useSelector((state) => state.game.currentStep);

  return (
    <>
      <DescriptionPlaceholder>
        {currentStep.description}
      </DescriptionPlaceholder>
    </>
  )
};