import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import StartPage from "./StartPage";
import { LoadingPage } from "./LoadingPage";
import Maze from "./Maze";

const MainContainer = styled.main`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const GamePage = () => {
  const gameStatus = useSelector((state) => state.game.gameStatus);

  return (
    <MainContainer>
      {gameStatus ? <Maze /> : <StartPage />}
      <LoadingPage />
    </MainContainer>
  );
};

export default GamePage;
