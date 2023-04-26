import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { maze, postUsername } from 'reducers/maze';
import styled from 'styled-components';
import { Button } from './global-style/Button';
import { Wrapper } from './global-style/Wrapper';
import { BodyText } from './global-style/BodyText';
import { Background } from './global-style/Background';

export const WelcomePage = () => {
  const coordinates = useSelector((store) => store.maze.coordinates);
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(maze.actions.storeUsername(username))
    dispatch(postUsername())
    setUsername('')
    navigate('/game');
  };
  return (
    <Background coordinates={coordinates}>
      <Wrapper>
        <h1>Welcome to the Maze</h1>
        <BodyText>Please enter your username</BodyText>
        <FormWrapper onSubmit={handleSubmit}>
          <input type="text" onChange={(event) => setUsername(event.target.value)} value={username} />
          <Button type="submit">Submit Username</Button>
        </FormWrapper>
      </Wrapper>
    </Background>
  )
};

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`