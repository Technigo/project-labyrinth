import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { maze, postUsername } from 'reducers/maze';
import { Button } from './global-style/Button';
import { Wrapper } from './global-style/Wrapper';

export const WelcomePage = () => {
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
    <Wrapper>
      <h1>Welcome to the Maze</h1>
      <p>Please enter your username</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(event) => setUsername(event.target.value)} value={username} />
        <Button type="submit">Submit Username</Button>
      </form>
    </Wrapper>
  )
}