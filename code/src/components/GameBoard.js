/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { game, nextStep } from 'reducers/game';
import backgroundImages from './backgroundImages';

const GameBoard = () => {
  const dispatch = useDispatch();
  const { actions, coordinates, description } = useSelector(
    (state) => state.game.game
  );
  console.log(actions);

  const onDirectionButtonClick = (direction) => {
    dispatch(nextStep(direction));
  };

  const reloadGame = () => {
    window.location.reload();
  };

  const currentBackground = game && backgroundImages[coordinates];

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
  `;

  const StyledText = styled.h2`
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 40px;
    text-align: center;
  `;

  const StyledButton = styled.button`
    background-color: rgba(255, 255, 255, 0.2);
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    margin-bottom: 20px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      transform: scale(1.05);
    }
  `;

  const FrostedButton = styled.button`
    background-color: rgba(255, 255, 255, 0.2);
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    margin: 2rem 2rem;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      transform: scale(1.05);
    }
  `;
  return (
    <div
      style={{
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
    >
      <FrostedButton
        type="button"
        onClick={() => {
          reloadGame();
        }}
      >
        RESTART
      </FrostedButton>
      <Container>
        <StyledText>{description}</StyledText>
        {actions.map((singularAction) => (
          <>
            <p style={{ color: 'white' }}>{singularAction.description}</p>
            <StyledButton
              onClick={() => {
                onDirectionButtonClick(singularAction.direction);
              }}
            >
              Go {singularAction.direction}
            </StyledButton>
          </>
        ))}
      </Container>
    </div>
  );
};

export default GameBoard;
