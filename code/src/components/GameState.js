import React from "react";
import { useSelector } from "react-redux";
import { Action } from "./Action";
import styled from "styled-components/macro";
import { History } from "./History";
import { BoldText } from "lib/Text";

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
        {username && (
          <p>
            <BoldText>Player: </BoldText>
            {username}
          </p>
        )}
        {coordinates && (
          <p>
            <BoldText>Your coordinates: </BoldText>
            {coordinates}
          </p>
        )}
        {description && <p>{description}</p>}
        {actions.length > 0 && <h3>You have {actions.length} option(s):</h3>}
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
