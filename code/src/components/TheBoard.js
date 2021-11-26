import React from "react";
import { useSelector } from "react-redux";
import StartPage from "./StartPage";
import { LoadingIndicator } from "./LoadingIndicator";
import TheGame from "./TheGame";
import styled from "styled-components";
// import Labyrinth from "../pictures/labyrinth.jpg";

const BoardCard = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Zen Kurenaido", sans-serif;
  font-size: 12px;

  section {
    background: rgba(0, 0, 0, 0.5);
    width: 80vw;
    text-align: center;
    padding: 10px 10px 30px 10px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const TheBoard = () => {
  const currentPosition = useSelector((store) => store.game.currentPosition);

  return (
    <BoardCard>
      {currentPosition ? <TheGame /> : <StartPage />}
      <LoadingIndicator />
    </BoardCard>
  );
};
