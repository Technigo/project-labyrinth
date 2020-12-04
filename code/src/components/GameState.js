import React from "react";
import { useSelector } from "react-redux";
import { Action } from "./Action";
import styled from "styled-components/macro";
import { History } from "./History";

const GameContainer = styled.div`
  width: 700px;
`;

const TopContainer = styled.div`
  width: 500px;
  margin: 40px 0;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GameState = () => {
  const username = useSelector((store) => store.game.username);

  const description = useSelector((store) => store.game.gameState.description);
  const coordinates = useSelector((store) => store.game.gameState.coordinates);
  const actions = useSelector((store) => store.game.gameState.actions);

  return (
    <GameContainer>
      <TopContainer>
        <p>{username && `Player: ${username}`}</p>
        <p>{coordinates && `Your coordinates: ${coordinates}`}</p>
        <p>{description && description}</p>
        <p>{actions.length > 0 && `You have ${actions.length} option(s):`}</p>
      </TopContainer>

      <BottomContainer>
        <CardWrapper>
          {actions &&
            actions.map((action) => {
              return <Action key={action.description} {...action} />;
              // Spreading action keys as props ---> i.e. description, type, direction
            })}
        </CardWrapper>
        <History />
      </BottomContainer>
    </GameContainer>
  );
};
