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
          <WelcomeP>Hi {username}, you are ready to start playing!</WelcomeP>
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
  min-height: 100vh;
`;

const Image = styled.img`
  width: 100%;
  max-width: 530px;
  margin: 10px 0;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

const WelcomeP = styled.p`
  color: #fff;
  font-weight: 500;
`;
