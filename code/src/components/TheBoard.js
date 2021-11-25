import React from "react";
import { useSelector } from "react-redux";
import StartPage from "./StartPage";
import { LoadingIndicator } from "./LoadingIndicator";
import TheGame from "./TheGame";
import styled from "styled-components";

const BoardCard = styled.div`
  background: lightblue;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Amatic SC", cursive;

  section {
    width: 500px;
    text-align: center;
  }

  button {
    width: 100px;
    padding: 5px;
    border-radius: 6px;
    margin: 10px;
    font-family: "Amatic SC", cursive;
    background: lightcoral;
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
