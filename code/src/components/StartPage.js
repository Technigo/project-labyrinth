import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchStart, game } from 'reducers/game';

export const StartPage = () => {
  const [user, setUser] = useState('');

  const dispatch = useDispatch();

  const onUserSet = () => {
    dispatch(game.actions.setUserState(user));
    dispatch(fetchStart());
  };

  return (
    <>
      <h1>Welcome to the game</h1>

      <input
        type='text'
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <Link to='/GamePage'>
        <button onClick={onUserSet}>Start the game</button>
      </Link>
    </>
  );
};
