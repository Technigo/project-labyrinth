import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startLabyrinth } from 'reducers/labyrinth';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: none;
  margin-bottom: 16px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #4285F4;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const StartPage = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleStartGame = () => {
    dispatch(startLabyrinth(username));
  };

  return (
    <Container>
      <h1>Welcome to Labyrinth Game</h1>
      <p>Please enter a username to start the game:</p>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
      <Button disabled={!username} onClick={handleStartGame}>
        Start Game
      </Button>
    </Container>
  );
};

export default StartPage;
