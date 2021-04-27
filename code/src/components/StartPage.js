import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchStart, game } from 'reducers/game';

export const StartPage = () => {
  const [user, setUser] = useState('');

  const dispatch = useDispatch();

  /*denna lösning är i princip bara kopierad from Maks frl*/
  const onUserSet = () => {
    dispatch(game.actions.setUserState(user));
    dispatch(fetchStart());
  };

  return (
    <>
      <div className='nes-container'>
        <h1 className='header'>Welcome to the Labyrinth Game</h1>
      </div>
      <h2>Follow the directions on each page to chose which way to go!</h2>
      <p>Input a user name to begin playing</p>
      <input
        className='nes-input'
        type='text'
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <Link to='/GamePage'>
        <button className='nes-btn' onClick={onUserSet}>
          Start the game
        </button>
      </Link>
    </>
  );
};
