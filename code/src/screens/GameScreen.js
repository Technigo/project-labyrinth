import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGameData } from "reducers/gameSteps";
import { continueFetchGameData } from "reducers/gameSteps";
import { Loading } from "components/Loading";
import styled from "styled-components/macro";
import { screen } from "reducers/screen";

export const GameScreen = () => {
  const dispatch = useDispatch();
  const username = useSelector((store) => store.gameSteps.username);
  const game = useSelector((store) => store.gameSteps.gameStepList);
  const isLoading = useSelector((store) => store.loading.loading);
  const gameHistory = useSelector((store) => store.gameSteps.gameHistory);
  const lastMove =
    gameHistory.length > 0 ? gameHistory[gameHistory.length - 1] : undefined;
  const [currentMove, setCurrentMove] = useState("");

  console.log(game);

  useEffect(() => {
    dispatch(fetchGameData(username));
  }, [dispatch, username]);

  if (game.length === 0) {
    return (
      <GameQuestionContainer>
        <div></div>
        <QuestionWrapper>
          <Loading />
        </QuestionWrapper>
      </GameQuestionContainer>
    );
  }

  return (
    <GameQuestionContainer>
      <div></div>
      <QuestionWrapper>
        <div>
          {lastMove && !isLoading && (
            <LastMove>You went {lastMove.direction}.</LastMove>
          )}
          {isLoading && <LastMove>You go {currentMove}...</LastMove>}
          {!isLoading && (
            <QuestionDescription>{game.description}</QuestionDescription>
          )}
          {isLoading && <Loading />}
        </div>
        <div>
          {!isLoading &&
            game.actions.map((action) => {
              return (
                <OptionsContainer key={action.direction}>
                  <OptionDescription>{action.description}</OptionDescription>
                  <MoveButton
                    onClick={() => {
                      dispatch(
                        continueFetchGameData(
                          username,
                          action.type,
                          action.direction,
                          action.description
                        )
                      );
                      setCurrentMove(action.direction);
                    }}
                  >
                    Go {action.direction}
                  </MoveButton>
                </OptionsContainer>
              );
            })}
          {game.actions.length === 0 && (
            <>
              <CongratulationText>
                Congratulations you finished the game in {gameHistory.length}{" "}
                moves!
              </CongratulationText>

              <OverviewButton
                onClick={() =>
                  dispatch(screen.actions.currentScreen({ screen: "overview" }))
                }
              >
                Overview
              </OverviewButton>
              <RestartButton
                onClick={() =>
                  dispatch(screen.actions.currentScreen({ screen: "username" }))
                }
              >
                Restart Game
              </RestartButton>
            </>
          )}
        </div>
      </QuestionWrapper>
    </GameQuestionContainer>
  );
};

const GameQuestionContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  letter-spacing: 1px;
  line-height: 22px;
  @media (min-width: 668px) and (max-width: 1024px) {
    line-height: 30px;
  }
  @media (min-width: 1025px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
`;

const QuestionDescription = styled.span`
  color: white;
  font-size: 18px;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 24px;
  }
  @media (min-width: 1025px) {
    font-size: 25px;
    line-height: 35px;
  }
`;

const QuestionWrapper = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 20px;
  min-height: 250px;
  transition: height 2s ease-in;
  @media (min-width: 668px) and (max-width: 1024px) {
    padding: 60px 80px;
    min-height: 250px;
  }
  @media (min-width: 1025px) {
    padding: 50px;
    width: 100%;
    min-height: 500px;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #bacede;
`;

const MoveButton = styled.button`
  font-family: "Raleway", sans-serif;
  background-color: transparent;
  padding: 10px;
  border: none;
  color: #bacede;
  border-bottom: white 1px solid;
  font-size: 20px;
  @media (min-width: 1025px) {
    border-bottom: 2px solid;
    font-size: 25px;
    margin-top: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const OptionDescription = styled.span`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 18px;
    text-align: center;
    margin-top: 30px;
  }
  @media (min-width: 1025px) {
    font-size: 20px;
    text-align: center;
    margin-top: 30px;
  }
`;

const LastMove = styled.p`
  font-size: 18px;
  margin: 20px 0 0 0;
  color: #8d8d8d;
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 20px;
  }
  @media (min-width: 1025px) {
    font-size: 20px;
  }
`;

const CongratulationText = styled.p`
  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 24px;
  }
  @media (min-width: 1025px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

const RestartButton = styled(MoveButton)`
  color: white;
  border-bottom: 1px solid;
  width: 100%;
  @media (min-width: 1025px) {
    border-bottom: 2px solid;
    font-size: 30px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const OverviewButton = styled(RestartButton)``;
