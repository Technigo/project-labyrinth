import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Start from "./Start";
import Gamepage from "./Gamepage";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

const Game = () => {
  const gameStatus = useSelector((store) => store.labyrinth.gameStatus);
  console.log(gameStatus);
  return <Main>{gameStatus ? <Gamepage /> : <Start />}</Main>;
};

export default Game;
