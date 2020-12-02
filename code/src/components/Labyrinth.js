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
      <LabyrinthWrapper>
        <Map />
        <TextWrapper>
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
                Your current position:{" "}
                <SpanText>{gameData.coordinates}</SpanText>
              </RegularText>
              {gameData.description}
            </DescriptionText>
            {gameData.actions.length > 0 ? (
              <InstructionText>Choose your next direction:</InstructionText>
            ) : (
              <InstructionText>
                Congratulations you have completed the Labyrinth
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
                      text={`Head ${item.direction}`}
                    />
                  </ButtonWrapper>
                  <DescriptionText>{item.description}</DescriptionText>
                </GameDescription>
              ))}
            </BottomSection>
          ) : (
            <Button onButtonClick={handleGameRestart} text="Restart" />
          )}
        </TextWrapper>
      </LabyrinthWrapper>
    );
  }
};

export const LabyrinthWrapper = styled.main`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const TopSection = styled.section`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

const TextWrapper = styled.div`
  @media (min-width: 1024px) {
    margin-left: 30px;
  }
`;

const BottomSection = styled.section`
  margin: 2px 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

const GameDescription = styled.article`
  background: #e3e5f1;
  border-radius: 4px;
  margin-bottom: 6px;
  padding: 4px;

  @media (min-width: 768px) {
    width: 250px;
    margin: 0 4px;
    min-height: 180px;
  }
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
  background: #e3e5f1;
  padding: 4px;
  border-radius: 4px;
  margin: 2px 0;
  font-style: italic;
  width: 100%;

  @media (min-width: 768px) {
    padding: 4px 10px;
  }
`;

const RegularText = styled.span`
  font-style: normal;
  font-size: 14px;
  font-family: sans-serif;
  display: block;
  margin-bottom: 10px;
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
