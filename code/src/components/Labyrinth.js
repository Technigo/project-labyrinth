import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";

import { MainWrapper } from "./Welcome";
import { Loading } from "./Loading";
import { Button } from "../lib/Button";
import { game } from "../reducers/game";
import { selectNextStep } from "../reducers/reusable";
import { Map } from "./Map";

export const Labyrinth = () => {
  const gameData = useSelector(store => store.game.currentGameState.gameData);
  const username = useSelector(store => store.game.username);
  const isLoading = useSelector(store => store.ui.isLoading);
  const pastActions = useSelector(store => store.game.pastActions);
  const positionHistory = useSelector(store => store.game.positionHistory);
  const dispatch = useDispatch();

  const handleNextStep = (type, direction) => {
    dispatch(selectNextStep(username, type, direction));
  };

  const handleGameRestart = () => {
    dispatch(game.actions.restartGame());
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <MainWrapper>
        <Map />
        <TopSection>
          {pastActions.length > 0 && (
            <PositionText>
              Previous position:{" "}
              <SpanText>
                {
                  positionHistory[positionHistory.length - 1].gameData
                    .coordinates
                }
              </SpanText>{" "}
              you just moved:{" "}
              <SpanText>{pastActions[pastActions.length - 1]}</SpanText>
            </PositionText>
          )}

          <DescriptionText>
            Your current position: {gameData.coordinates}
          </DescriptionText>
          <DescriptionText>{gameData.description}</DescriptionText>
          {gameData.actions.length > 0 ? (
            <InstructionText>Choose your next direction</InstructionText>
          ) : (
            <InstructionText>
              You have completed the Labyrinth <br /> End of game!
            </InstructionText>
          )}
        </TopSection>
        {gameData.actions.length > 0 ? (
          <BottomSection>
            {gameData.actions.map(item => (
              <GameDescription key={item.direction}>
                <Button
                  onClick={() => handleNextStep(item.type, item.direction)}
                >
                  Head {item.direction}
                </Button>
                <DescriptionText>{item.description}</DescriptionText>
              </GameDescription>
            ))}
          </BottomSection>
        ) : (
          <Button onClick={handleGameRestart}>Restart</Button>
        )}
      </MainWrapper>
    );
  }
};

const TopSection = styled.section`
  border: 2px solid #e8e8e8;
  padding: 10px;
`;

const BottomSection = styled.section`
  border: 2px solid #e8e8e8;
  padding: 10px;
`;

const GameDescription = styled.article`
  border: 2px solid #e8e8e8;
`;

const PositionText = styled.p`
  font-size: 14px;
  color: #ffffff;
`;

const DescriptionText = styled.p`
  font-size: 16px;
`;

const SpanText = styled.span`
  font-weight: bold;
`;

const InstructionText = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
