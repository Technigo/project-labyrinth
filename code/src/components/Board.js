import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import { Username } from "./Username";
import { Description } from "./Description";
import { Position } from "./Position";
import { Avatar } from "./Avatar";
import { Direction } from "./Direction";

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 2fr 1fr 2fr 1fr 2fr;
  grid-template-areas:
    "username . position"
    "description description description"
    ". North ."
    ". avatar ."
    "West avatar East"
    ". avatar ."
    ". South .";
`;

export const Board = () => {
  const stateUsername = useSelector((state) => state.game.username);
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>
      {!isLoading && stateUsername && (
        <BoardGrid>
          <Username />
          <Description />
          <Position />
          <Avatar />
          <Direction />
        </BoardGrid>
      )}
    </>
  );
};
