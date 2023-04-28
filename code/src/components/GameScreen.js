/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from 'styled-components';
import { continueGame, labyrinth } from 'reducers/labyrinth';
import { useDispatch, useSelector } from 'react-redux';
import { InnerWrapper, Th1, DirectionContainer, GameBtn, ActionContainer, RestartBtn } from 'styles/GameStyles';
import { Devices } from 'styles/GlobalStyles';
import TypeIt from 'typeit-react';
import { v4 as uuidv4 } from 'uuid';

import arch from '../assets/arch.jpg';
import bridge from '../assets/bridge.jpg';
import books from '../assets/books.jpg';
import end from '../assets/end.png';
import cave from '../assets/cave.jpg';
import mechanical from '../assets/mechanical.jpg';
import room from '../assets/room.jpg';

const directionArrows = (arrowChoice) => {
  if (arrowChoice === 'North') {
    return '\u2191'
  } else if (arrowChoice === 'East') {
    return '\u2192'
  } else if (arrowChoice === 'South') {
    return '\u2193'
  } else if (arrowChoice === 'West') {
    return '\u2190'
  }
}

export const GameScreen = () => {
  const dispatch = useDispatch();
  const currentGameState = useSelector((store) => store.labyrinth.currentGameState);
  const currentGameStateActions = useSelector(
    (store) => store.labyrinth.currentGameState.actions
  );
  const coordinates = useSelector((store) => store.labyrinth.currentGameState.coordinates);
  const playerHistory = useSelector((store) => store.labyrinth.playerHistory);

  const onClickRestart = () => {
    console.log('user restarted')
    dispatch(labyrinth.actions.restart());
  }
  console.log('labyrinth details', labyrinth);
  console.log('currentGameState', currentGameState)
  console.log('player history', playerHistory)

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
        <HistoryContainer>
          {console.log('Player history arrows started')}
          <InfoText>Moves: </InfoText>
          {playerHistory.length > 0 ?
            (playerHistory.map((playerChoice) => (
              <ArrowText key={uuidv4()}>{directionArrows(playerChoice)}  </ArrowText>
            )))
            : ''}
        </HistoryContainer>
        <RestartBtn
          type="button"
          onClick={onClickRestart}>Restart
        </RestartBtn>
      </InnerWrapper>
    </GameWrapper>
  );
}

const GameWrapper = styled.div`
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
};
`

const HistoryContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
gap: 1rem;
flex-wrap: wrap;
`

const ArrowText = styled.p`
font-family: 'Special Elite';
font-size: 1rem;
color: whitesmoke;
line-height: 1.4;
`