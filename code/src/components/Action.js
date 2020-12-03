import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { executeAction, game } from "../reducers/game";
import styled from "styled-components";
import { CardButton } from "lib/Buttons";

// const MoveButton = styled.button`
//   background: black;
//   color: #4cff42;
//   font-family: "Inconsolata", monospace;
//   font-size: 15px;
//   padding: 10px;
//   text-transform: capitalize;
// `;
const GameCard = styled.div`
  border: 4px solid red;
  /* background: white; */
  margin-bottom: 20px;
`;

export const Action = ({ description, type, direction }) => {
  const dispatch = useDispatch();

  const username = useSelector((store) => store.game.username);

  const handleOnClick = () => {
    // thunk:
    dispatch(executeAction(username, type, direction));
    // action:
    dispatch(game.actions.setHistory({ type, direction }));
  };

  return (
    <GameCard>
      <p>{description}</p>
      <CardButton onClick={handleOnClick}>
        {type} {direction}
      </CardButton>
    </GameCard>
  );
};
