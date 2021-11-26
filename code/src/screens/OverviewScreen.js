import React from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { screen } from "reducers/screen";
import { gameSteps } from "reducers/gameSteps";

export const OverviewScreen = () => {
  const gameHistory = useSelector((store) => store.gameSteps.gameHistory);
  const dispatch = useDispatch();
  return (
    <OverviewContainer>
      <OverviewWrapper>
        <StepInformation>Steps that you have walked:</StepInformation>
        {/* mapped over the gameHistory and return items containing the direction and the description 
        of the steps the person has taken.*/}
        {gameHistory.map((item, index) => {
          return (
            <ItemWrapper>
              <NumberDirectionContainer>
                <NumberCounter>{index + 1}</NumberCounter>
                <div>You went {item.direction}</div>
              </NumberDirectionContainer>
              <div>{item.description}</div>
            </ItemWrapper>
          );
        })}

        {/* Restart button that returns the person to the username screen and resets the game. */}
        <RestartButton
          onClick={() => {
            dispatch(screen.actions.currentScreen({ screen: "username" }));
            dispatch(gameSteps.actions.resetGame());
          }}
        >
          Restart Game
        </RestartButton>
      </OverviewWrapper>
    </OverviewContainer>
  );
};

const OverviewContainer = styled.section`
  color: white;
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  letter-spacing: 1px;
  line-height: 22px;

  @media (min-width: 668px) and (max-width: 1024px) {
    line-height: 30px;
  }

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
`;

const OverviewWrapper = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  row-gap: 10px;
  min-height: 250px;

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

const RestartButton = styled.button`
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
      transition: all 500ms;
      cursor: pointer;
      color: white;
    }
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
`;

const NumberDirectionContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 10px;
  margin-bottom: 10px;
`;

const StepInformation = styled.div`
  font-size: 20px;
`;

const NumberCounter = styled.div`
  font-size: 30px;
`;
