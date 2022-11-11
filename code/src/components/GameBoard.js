/* eslint-disable react/jsx-boolean-value */
/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStage } from 'reducers/labyrinth';
import { Container } from 'styles/GlobalWrappers';
import styled from 'styled-components/macro';
import compass from 'assets/compass.png'
import TypeWriterEffect from 'react-typewriter-effect';
import BackgroundImage from './BackgroundImage';
import MiniMaze from './MiniMaze';

const GameBoard = () => {
  const dispatch = useDispatch();
  const { description, actions, coordinates } = useSelector((store) => store.labyrinth.stage);
  const userName = useSelector((store) => store.labyrinth.username);

  const onDirectionButtonClick = (type, direction) => {
    dispatch(nextStage(type, direction));
  };
  /*  const goToPreviousStage = () => {
    dispatch(labyrinth.actions.setPreviousStage());
  }; */
  const onRestartButtonClick = () => {
    return (
      window.location.reload()
    )
  }
  const winner = () => {
    return (
      <WinnerWrapper>
        <div>
          <p>CONGRATZ <span>{userName.toUpperCase()}</span></p>
          <p>You won the game!</p>
        </div>
      </WinnerWrapper>
    )
  }
  return (
    <>
      <Top>
        <ButtonAndCompass>
          <RestartBtn
            type="button"
            onClick={() => onRestartButtonClick()}>
            RESTART
          </RestartBtn>
          <img width="35px" src={compass} alt="compass" />
        </ButtonAndCompass>
        <p>Player: {userName}</p>
      </Top>
      <Container>
        <Description>
          <TypeWriterEffect
            startDelay={100}
            cursorColor="#00cf00"
            text={description}
            typeSpeed={70}
            hideCursorAfterText={true} />
        </Description>
        <MazeImgContainer>
          <MiniMaze />
          <ImgNavigation>
            <BackgroundImage coordinates={coordinates} />
            <ButtonMap>
              {actions && actions.map((item) => {
                return (
                  <ButtonWrapper key={item.direction}>
                    <button
                      type="button"
                      onClick={() => onDirectionButtonClick(item.type, item.direction)}>GO {item.direction.toUpperCase()}
                    </button>
                  </ButtonWrapper>
                );
              })}
            </ButtonMap>
          </ImgNavigation>
        </MazeImgContainer>
        <ActionsWrapper>
          {actions && actions.map((item) => {
            return (
              <div key={item.description}>
                <Pdirection>WHAT DO YOU SEE {item.direction.toUpperCase()}:</Pdirection>
                <p>{item.description}</p>
              </div>
            );
          })}
        </ActionsWrapper>
        {coordinates === '1,3' && winner()}
      </Container>
    </>
  )
};

export default GameBoard;

const RestartBtn = styled.button`
  width: fit-content;
`

const Pdirection = styled.p`
  font-weight: bold;
  font-size: 18px;
`

const ButtonWrapper = styled.div`
  margin-top: 5px;
`
const ButtonMap = styled.div`
  
`
const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  row-gap: 20px;
`

const Top = styled.div`
  display: flex;
  color: red;  
  justify-content: space-between;
  align-items: center;
`

const Description = styled.div`
  display: flex;
  justify-content: center;
  border: 1px dashed;
  color: #00cf00;
  min-width: 100%;
  min-height: 20px;
  height: auto;
  h1 {
    padding: 5px;
  }
`
const WinnerWrapper = styled.div`
  align-items: center;
  span {
    color:red;
  }
`
const MazeImgContainer = styled.div`
  display: flex;
  gap: 30px;
`

const ImgNavigation = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  row-gap: 10px;
`
const ButtonAndCompass = styled.div`
  display: flex;
  gap: 10px;
`