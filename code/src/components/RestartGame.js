import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// --- reducer
import { game } from "reducers/game";

// --- STYLED COMPONENTS ---

const RestartContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const RestartButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #9a1c26;
  width: 100px;
  height: 50px;
  font-family: "Caveat", cursive;
  font-size: 20px;
  margin-top: 70px;
  color: #ffff;
`;

// Component to restart the game using dispatch

export const RestartGame = () => {
  const dispatch = useDispatch();
  return (
    <RestartContainer>
      <RestartButton
        type="button"
        onClick={() => dispatch(game.actions.restart())}
      >
        Restart game
      </RestartButton>
    </RestartContainer>
  );
};
