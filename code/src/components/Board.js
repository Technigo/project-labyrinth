import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import { Description } from "./Description";
import { Status } from "./Status";
import { Avatar } from "./Avatar";
import { Direction } from "./Direction";
import { ActionDescription } from "./ActionDescription";
import { BackOrRestart } from "./BackOrRestart";

const BoardGrid = styled.div`
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "status status status"
    "description description description"
    ". North ."
    "West avatar East"
    ". South ."
    "instructions instructions instructions"
    "back back back";
`;

export const Board = () => {
  const stateUsername = useSelector((state) => state.game.username);
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>
      {!isLoading && stateUsername && (
        <>
          <BoardGrid>
            <Status />
            <Description />
            <Avatar />
            <Direction />
            <ActionDescription />
            <BackOrRestart />
          </BoardGrid>
        </>
      )}
    </>
  );
};