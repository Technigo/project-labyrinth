/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { continueGame, labyrinth } from 'reducers/labyrinth';
import { useDispatch, useSelector } from 'react-redux';
import { GameWrapper, InnerWrapper, Th1, DirectionContainer, GameBtn, ActionContainer, RestartBtn } from 'styles/GameStyles';
import { Devices } from 'styles/GlobalStyles';
import styled from 'styled-components'

import TypeIt from 'typeit-react';

const GameScreen = () => {
  const dispatch = useDispatch();
  const currentGameState = useSelector((store) => store.labyrinth.currentGameState);
  const currentGameStateActions = useSelector(
    (store) => store.labyrinth.currentGameState.actions
  );

  const onClickRestart = () => {
    console.log('user restarted')
    dispatch(labyrinth.actions.restart());
  }
  console.log('labyrinth details', labyrinth);
  console.log('currentGameState', currentGameState)

  return (
    <GameWrapper>
      <InnerWrapper>
        <TypeIt
          options={{
            speed: 30,
            cursor: false
          }}>
          <Th1>{currentGameState.description}</Th1>
        </TypeIt>
        <div>
          {currentGameStateActions ? (
            <DirectionContainer>
              {currentGameStateActions.map((action) => (
                <ActionContainer>
                  <GameBtn
                    type="button"
                    key={action.direction}
                    onClick={() => dispatch(continueGame(action.direction))}>
                  Go {action.direction}
                  </GameBtn>
                  <InfoText>You look {action.direction}, <br /> {action.description}</InfoText>
                </ActionContainer>
              ))}
            </DirectionContainer>
          ) : (
            'Well done. You have successfully navigated out of the labyrinth'
          )}
        </div>
        <RestartBtn
          type="button"
          onClick={onClickRestart}>Restart
        </RestartBtn>
      </InnerWrapper>
    </GameWrapper>
  );
}

const InfoText = styled.p`
font-family: 'Special Elite';
font-size: 1em;
color: whitesmoke;
line-height: 1.4;
text-align:center;

@media ${Devices.mobile} {
  font-size: 14px;
}
`
export default GameScreen;