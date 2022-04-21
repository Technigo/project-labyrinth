import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { game } from "reducers/game";
import { playerAction } from "reducers/game";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Actions = ({ action }) => {
  const dispatch = useDispatch();
  const coordinates = useSelector((store) => store.game.position.coordinates);

  const playerChoice = () => {
    dispatch(game.actions.setType(action.type));
    dispatch(game.actions.setDirection(action.direction));
    dispatch(playerAction());
  };

  return (
    <>
      <Button key={coordinates} onClick={playerChoice}>
        {action.type} {action.direction}
      </Button>
    </>
  );
};

export default Actions;

const Appear = keyframes`
from {opacity: 0}
to {opacity: 1}
`;

const Button = styled.button`
  padding: 5px 10px;
  font-weight: 600;
  border: 2px solid #04fc0e;
  background-color: black;
  color: #04fc0e;
  font-size: 16px;
  cursor: pointer;
  width: 150px;
  animation: ${Appear} 5s ease-in;
`;
