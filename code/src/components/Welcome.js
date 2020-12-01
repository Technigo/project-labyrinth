import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import { UserInput } from "./UserInput";
import { StartGame } from "./StartGame";
import { Labyrinth } from "./Labyrinth";

export const Welcome = () => {
  const currentGameState = useSelector(store => store.game.currentGameState);
  console.log("Game state:" + currentGameState);

  if (!currentGameState.gameData) {
    return (
      <MainWrapper>
        <UserInput />
        <Image src="./assets/Labyrinth2.png" alt="labyrinth" />
        <StartGame />
      </MainWrapper>
    );
  } else {
    return <Labyrinth />;
  }
};

export const MainWrapper = styled.main`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 300px;
  margin: 10px 0;
`;
