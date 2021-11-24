import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGameData } from "reducers/gameSteps";
import { continueFetchGameData } from "reducers/gameSteps";
import { Loading } from "components/Loading";
import styled from "styled-components/macro";

export const GameScreen = () => {
  const dispatch = useDispatch();
  const username = useSelector((store) => store.gameSteps.username);
  const game = useSelector((store) => store.gameSteps.gameStepList);
  const isLoading = useSelector((store) => store.loading.loading);
  const gameHistory = useSelector((store) => store.gameSteps.gameHistory);
  const lastMove =
    gameHistory.length > 0 ? gameHistory[gameHistory.length - 1] : undefined;

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
        {lastMove && <LastMove>You went {lastMove}.</LastMove>}
        <QuestionDescription>{game.description}</QuestionDescription>
        {isLoading && <Loading />}
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
                        action.direction
                      )
                    );
                  }}
                >
                  Go {action.direction}
                </MoveButton>
              </OptionsContainer>
            );
          })}
        {game.actions.length === 0 && (
          <div>
            Congratulations you finished the game in {gameHistory.length} moves!
          </div>
        )}
      </QuestionWrapper>
    </GameQuestionContainer>
  );
};

const GameQuestionContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: white;
  display: grid;
  grid-template-rows: 1fr auto auto;
  flex-direction: column;
  letter-spacing: 1px;
  line-height: 22px;
`;

const QuestionDescription = styled.span`
  color: white;
  font-size: 18px;
`;

const QuestionWrapper = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  min-height: 250px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoveButton = styled.button`
  font-family: "Raleway", sans-serif;
  background-color: transparent;
  padding: 10px;
  border: none;
  color: white;
  border-bottom: white 1px solid;
  font-size: 20px;
`;

const OptionDescription = styled.span`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
`;

const LastMove = styled.p`
  font-size: 18px;
`;
