import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import { UserInput } from "./UserInput";
import { StartGame } from "./StartGame";
import { Labyrinth } from "./Labyrinth";

export const Welcome = () => {
  const currentGameState = useSelector(store => store.game.currentGameState);
  const username = useSelector(store => store.game.username);

  if (!currentGameState.gameData) {
    return (
      <MainWrapper>
        <UserInput />
        <Image src="./assets/labyrinth-poster.jpg" alt="labyrinth" />
        {username.length && (
          <WelcomeP>Hi {username}, ready to start playing!</WelcomeP>
        )}
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
  height: 100vh;
`;

const Image = styled.img`
  width: 300px;
  margin: 10px 0;
`;

const WelcomeP = styled.p`
  color: #fff;
  font-weight: 500;
`;
