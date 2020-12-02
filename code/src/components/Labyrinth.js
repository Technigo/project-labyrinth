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
              (Previous position:{" "}
              <SpanText>
                {
                  positionHistory[positionHistory.length - 1].gameData
                    .coordinates
                }
              </SpanText>{" "}
              | you just moved:{" "}
              <SpanText>{pastActions[pastActions.length - 1]}</SpanText>)
            </PositionText>
          )}

          <DescriptionText>
            <RegularText>
              Your current position: <SpanText>{gameData.coordinates}</SpanText>
            </RegularText>
            <br />
            <br />
            {gameData.description}
          </DescriptionText>
          {gameData.actions.length > 0 ? (
            <InstructionText>Choose your next direction:</InstructionText>
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
                <ButtonWrapper>
                  <Button
                    onButtonClick={() =>
                      handleNextStep(item.type, item.direction)
                    }
                    text={item.direction}
                  />
                </ButtonWrapper>
                <DescriptionText>{item.description}</DescriptionText>
              </GameDescription>
            ))}
          </BottomSection>
        ) : (
          <Button onButtonClick={handleGameRestart} text="Restart" />
        )}
      </MainWrapper>
    );
  }
};

const TopSection = styled.section`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomSection = styled.section`
  margin: 2px 0;
`;

const GameDescription = styled.article`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 6px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PositionText = styled.p`
  font-size: 14px;
`;

const DescriptionText = styled.p`
  background: #fff;
  padding: 4px;
  border-radius: 4px;
  margin: 2px 0;
  font-style: italic;
`;

const RegularText = styled.span`
  font-style: normal;
  font-size: 14px;
  font-family: sans-serif;
`;

const SpanText = styled.span`
  font-weight: bold;
`;

const InstructionText = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 10px 0;
`;
