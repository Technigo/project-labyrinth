import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

// -- fetch
import { fetchNextMove } from "reducers/fetch";

// -- library
import { GoBackButton } from "lib/GoBackButton";

// --- STYLED COMPONENTS ---

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DirectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const DirectionButton = styled.button`
  width: 200px;
  height: 50px;
  margin: 30px auto;
  border-radius: 5px;
  border: none;
  background-color: #d9d0c1;
  font-family: "Caveat", cursive;
  font-size: 20px;
`;

const ActionText = styled.p`
  text-align: center;
  font-weight: bold;
  padding: 10px;
  background: rgba(217, 208, 193, 0.45);
  margin: auto 90px;
  border-radius: 5px;
`;

export const Actions = () => {
  const actionsArray = useSelector((store) => store.game.play.actions);

  const dispatch = useDispatch();

  return (
    <ActionContainer>
      {actionsArray.map((action) => (
        <DirectionWrap key={action.direction}>
          <DirectionButton
            type="button"
            onClick={() => dispatch(fetchNextMove(action.direction))}
            direction={action.direction}
            description={action.description}
          >
            Go {action.direction}
          </DirectionButton>
          <ActionText>{action.description}</ActionText>
        </DirectionWrap>
      ))}
      <GoBackButton />
    </ActionContainer>
  );
};
