import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";

import { Button } from "../lib/Button";
import { getStartGame } from "../reducers/reusable";

export const StartGame = () => {
  const username = useSelector(store => store.game.username);
  const dispatch = useDispatch();

  const handleGameStart = () => {
    dispatch(getStartGame(username));
  };
  return (
    <BottomSection>
      <Button disabled={!username.length} onClick={handleGameStart}>
        Start Game
      </Button>
    </BottomSection>
  );
};

const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
