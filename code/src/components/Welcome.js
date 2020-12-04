import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import { UserInput } from "./UserInput";
import { Labyrinth } from "./Labyrinth";

export const Welcome = () => {
  const currentGameState = useSelector(store => store.game.currentGameState);

  if (!currentGameState.gameData) {
    return (
      <MainWrapper>
        <UserInput />
        <Image src="./assets/labyrinth-poster.jpg" alt="labyrinth" />
      </MainWrapper>
    );
  } else {
    return <Labyrinth />;
  }
};

export const MainWrapper = styled.main`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Image = styled.img`
  width: 100%;
  max-width: 530px;
  margin: 40px 0;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (min-width: 768px) {
    max-width: 500px;
  }
`;
