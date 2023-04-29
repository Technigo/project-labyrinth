import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStage } from 'reducers/labyrinth';
import styled from 'styled-components/macro';
import TypeWriterEffect from 'react-typewriter-effect';
import sleepingPotato from 'assets/sleeping-potato.gif';
import { Container } from './styling/GlobalWrappers';

const GameBoard = () => {
  const dispatch = useDispatch();
  const { description, actions, coordinates } = useSelector((store) => store.labyrinth.stage);
  const userName = useSelector((store) => store.labyrinth.username);

  const onDirectionButtonClick = (type, direction) => {
    dispatch(nextStage(type, direction));
  };

  const onRestartButtonClick = () => {
    return window.location.reload();
  };

  const winner = () => {
    return (
      <>
        <WinnerWrapper>
          <div>
            <h2>YOU WIN!</h2>
            <img src={sleepingPotato} alt="You win" />
            <p>
              Good job <span>{userName.toUpperCase()}</span>, you managed to get Potato back home
              safely.
            </p>
          </div>
        </WinnerWrapper>
        <RestartBtn type="button" onClick={() => onRestartButtonClick()}>
          RESTART
        </RestartBtn>
      </>
    );
  };
  return (
    <>
      <Top hide={coordinates === '1,3'}>
        <ButtonAndCompass>
          <RestartBtn type="button" onClick={() => onRestartButtonClick()}>
            RESTART
          </RestartBtn>
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
            hideCursorAfterText />
        </Description>
        <MazeImgContainer hide={coordinates === '1,3'}>
          <ImgNavigation>
            {actions
              && actions.map((item) => {
                return (
                  <ButtonWrapper key={item.direction}>
                    <button
                      type="button"
                      onClick={() => onDirectionButtonClick(item.type, item.direction)}>
                      GO {item.direction.toUpperCase()}
                    </button>
                  </ButtonWrapper>
                );
              })}
          </ImgNavigation>
        </MazeImgContainer>
        <ActionsWrapper>
          {actions
            && actions.map((item) => {
              return (
                <div key={item.description}>
                  <Pdirection>WHAT DO YOU SEE TO THE {item.direction.toUpperCase()}:</Pdirection>
                  <p>{item.description}</p>
                </div>
              );
            })}
        </ActionsWrapper>
        {coordinates === '1,3' && winner()}
      </Container>
    </>
  );
};

export default GameBoard;

const RestartBtn = styled.button`
  width: fit-content;
  margin: 20px;
  font-size: 22px;
`;

const Pdirection = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

const ButtonWrapper = styled.div`
  margin-top: 5px;
`;
const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  row-gap: 20px;
`;

const Top = styled.div`
  display: flex;
  color: red;
  justify-content: space-between;
  align-items: center;
  visibility: ${(props) => (props.hide ? 'hidden' : '')};
  color: #947566;
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  color: #533a32;
  min-width: 100%;
  min-height: 20px;
  height: auto;
  h1 {
    padding: 10px;
    font-size: 28px;
  }
`;

const WinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  p {
    text-align: center;
    font-size: 20px;
    margin-bottom: 0;
  }
  span {
    color: #947566;
  }
  h2 {
    font-size: 50px;
    text-align: center;
    margin-top: 0;
  }
  img {
    width: 200px;
  }
`;

const MazeImgContainer = styled.div`
  display: flex;
  gap: 30px;
  display: ${(props) => (props.hide ? 'none' : '')};
`;

const ImgNavigation = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  gap: 20px;
`;

const ButtonAndCompass = styled.div`
  display: flex;
  gap: 10px;
`;
