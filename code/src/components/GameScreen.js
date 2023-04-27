/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { continueGame } from 'reducers/labyrinth';
import { useDispatch, useSelector } from 'react-redux';
import { GameWrapper, InnerWrapper, Th1, DirectionContainer, GameBtn, ActionContainer } from 'styles/GameStyles';
import { Devices } from 'styles/GlobalStyles';
import styled from 'styled-components'

import TypeIt from 'typeit-react';

const GameScreen = () => {
  const dispatch = useDispatch();
  const labyrinth = useSelector((store) => store.labyrinth);
  const currentStep = useSelector((store) => store.labyrinth.currentStep);
  const currentStepActions = useSelector(
    (store) => store.labyrinth.currentStep.actions
  );
  console.log('labyrinth details', labyrinth);
  console.log('currentStep', currentStep)

  return (
    <GameWrapper>
      <InnerWrapper>
        <TypeIt
          options={{
            speed: 30
          }}>
          <Th1>{currentStep.description}</Th1>
          {/* <GameP>Choose wisely {labyrinth.username}</GameP> */}
        </TypeIt>
        <div>
          {currentStepActions ? (
            <DirectionContainer>
              {currentStepActions.map((action) => (
                <ActionContainer>
                  <GameBtn
                    type="button"
                    key={action.direction}
                    onClick={() => dispatch(continueGame(action.direction))}>
                  Go {action.direction}
                  </GameBtn>
                  <InfoText>To the {action.direction}: {action.description}</InfoText>
                </ActionContainer>
              ))}
            </DirectionContainer>
          ) : (
            ''
          )}
        </div>
      </InnerWrapper>
    </GameWrapper>
  );
}

const InfoText = styled.p`
font-family: 'Special Elite';
font-size: 1em;
color: whitesmoke;
line-height: 1.4;

@media ${Devices.mobile} {
  font-size: 14px;
}
`
export default GameScreen;