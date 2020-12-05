import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { game } from "reducers/game";

const GoBackContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BackButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #260b01;
  color: #ffff;
  height: 50px;
  width: 75px;
  font-family: "Caveat", cursive;
  font-size: 15px;
`;

export const GoBackButton = () => {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(game.actions.historyGoBack());
  };

  return (
    <GoBackContainer>
      <BackButton type="button" onClick={handleGoBack}>
        Go back
      </BackButton>
    </GoBackContainer>
  );
};
