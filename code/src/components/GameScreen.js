/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from 'styled-components';
import { continueGame, labyrinth } from 'reducers/labyrinth';
import { useDispatch, useSelector } from 'react-redux';
import { InnerWrapper, Th1, DirectionContainer, GameBtn, ActionContainer, RestartBtn } from 'styles/GameStyles';
import { Devices } from 'styles/GlobalStyles';
import TypeIt from 'typeit-react';

import arch from '../assets/arch.jpg';
import bridge from '../assets/bridge.jpg';
import books from '../assets/books.jpg';
import end from '../assets/end.png';
import cave from '../assets/cave.jpg';
import mechanical from '../assets/mechanical.jpg';
import light from '../assets/light.jpg';
import room from '../assets/room.jpg';

export const GameScreen = () => {
  const dispatch = useDispatch();
  const currentGameState = useSelector((store) => store.labyrinth.currentGameState);
  const currentGameStateActions = useSelector(
    (store) => store.labyrinth.currentGameState.actions
  );
  const coordinates = useSelector((store) => store.labyrinth.currentGameState.coordinates);

  const onClickRestart = () => {
    console.log('user restarted')
    dispatch(labyrinth.actions.restart());
  }
  console.log('labyrinth details', labyrinth);
  console.log('currentGameState', currentGameState)

  return (
    <GameWrapper coordinates={coordinates}>
      <InnerWrapper>
        <TypeIt
          options={{
            speed: 30,
            cursor: false
          }}>
          <Th1>{currentGameState.description}</Th1>
        </TypeIt>
        <div>
          {currentGameStateActions.length > 0 ? (
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
          )
            : <img src="https://media.giphy.com/media/tk8aCAvTg8Hjq/giphy.gif" alt="clapping man" />}
        </div>
        <RestartBtn
          type="button"
          onClick={onClickRestart}>Restart
        </RestartBtn>
      </InnerWrapper>
    </GameWrapper>
  );
}

export const GameWrapper = styled.div`
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${(props) => {
    let bgImage;
    if (props.coordinates === '0,0') {
      bgImage = `url(${arch})`;
    } else if (props.coordinates === '1,0') {
      bgImage = `url(${cave})`;
    } else if (props.coordinates === '1,1') {
      bgImage = `url(${bridge})`;
    } else if (props.coordinates === '0,1') {
      bgImage = `url(${mechanical})`;
    } else if (props.coordinates === '0,2') {
      bgImage = `url(${room})`;
    } else if (props.coordinates === '0,3') {
      bgImage = `url(${books})`;
    } else if (props.coordinates === '1,3') {
      bgImage = `url(${end})`;
    }
    return bgImage
  }};`

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