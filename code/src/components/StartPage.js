import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchStart } from 'reducers/game';

export const StartPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Welcome to the game</h1>
      <Link to='/GamePage'>
        <button onClick={() => dispatch(fetchStart())}>Start the game</button>
      </Link>
    </>
  );
};
