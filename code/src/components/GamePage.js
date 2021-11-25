import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import StartPage from "./StartPage";
import { LoadingPage } from "./LoadingPage";
import Maze from "./Maze";

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const GamePage = () => {
  const gameStatus = useSelector((state) => state.game.gameStatus);
  const loading = useSelector((state) => state.loader.loading);
  console.log(loading);
  return (
    <MainContainer>
      {loading && <LoadingPage />}
      {gameStatus ? <Maze /> : <StartPage />}
    </MainContainer>
  );
};

export default GamePage;
