import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";

import { Loading } from "./Loading";
import { Button } from "../lib/Button";
import { game } from "../reducers/game";
import { selectNextStep } from "../reducers/reusable";
import { Map } from "./Map";

export const Labyrinth = () => {
  const gameData = useSelector(store => store.game.currentGameState.gameData);
  const coordinates = useSelector(
    store => store.game.currentGameState.gameData.coordinates
  );
  const username = useSelector(store => store.game.username);
  const isLoading = useSelector(store => store.ui.isLoading);
  const pastActions = useSelector(store => store.game.pastActions);
  const positionHistory = useSelector(store => store.game.positionHistory);
  const dispatch = useDispatch();

  const handleNextStep = (type, direction) => {
    dispatch(selectNextStep(type, direction, coordinates));
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
                <SpanText> {username}</SpanText>
              </RegularText>
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
                {gameData.coordinates === "1,3" && pastActions.length <= 0
                  ? `${username} has already completed the Labyrinth. Enter a new username and try again!`
                  : `Congratulations ${username}! You have completed the Labyrinth!`}
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
                  <DirectionText>{item.description}</DirectionText>
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
    justify-content: space-evenly;
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border-radius: 10px;
  margin-bottom: 6px;
  padding: 4px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (min-width: 768px) {
    width: 250px;
    margin: 0 4px;
<<<<<<< HEAD
    min-height: 180px;
=======
    min-height: 220px;
>>>>>>> afda01ef108afe4130fc8e88dae870367d03dff6
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

const DirectionText = styled.p`
  background: #e3e5f1;
  padding: 4px;
  border-radius: 10px;
  margin: 2px 0;
  font-style: italic;
  width: 100%;

  @media (min-width: 768px) {
    padding: 4px 10px;
  }
`;

const DescriptionText = styled(DirectionText)`
  @media (min-width: 1024px) {
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
