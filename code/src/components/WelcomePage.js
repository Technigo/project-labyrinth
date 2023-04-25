import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { maze } from 'reducers/maze';
import { Button } from './Button';

export const WelcomePage = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(maze.actions.storeUsername(username))
    dispatch(maze.actions.postUsername())
    setUsername('')
  };
  return (
    <>
      <h1>Welcome to the Maze</h1>
      <p>Please enter your username</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(event) => setUsername(event.target.value)} value={username} />
        <Button type="submit">Submit Username</Button>
      </form>
    </>
  )
}