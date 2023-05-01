/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { game, startGame } from 'reducers/game';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url('/assets/img1.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 40px;
  text-align: center;
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

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }
`;

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

const LandingPage = ({ onStartGame }) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.username(username));
    dispatch(startGame());
  };

  return (
    <Background>
      <Container>
        <Title>Welcome to the Adventure!</Title>
        <Description>Are you ready to begin your adventure?</Description>
        <form onSubmit={(event) => onFormSubmit(event)}>
          <label htmlFor="username">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <FrostedButton type="submit">Start Game</FrostedButton>
          {/* <button type="submit">Start Game</button> */}
        </form>
        {/* <FrostedButton type="button" onClick={onStartGame}>
          Start Game
        </FrostedButton> */}
      </Container>
    </Background>
  );
};

export default LandingPage;
