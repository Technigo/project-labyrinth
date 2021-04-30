import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
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
    <div className='startpage-container'>
      <div className='header-container nes-container with-title is-centered'>
        <p className='title'>Welcome to the Labyrinth Game</p>
        <p className='game-description'>
          Follow the directions on each page to chose which way to go!
        </p>
      </div>

      <form className='input-container'>
        <p>Input a user name to begin playing</p>
        <input
          className='name-input nes-input'
          type='text'
          placeholder='User Name'
          id='username'
          name='username'
          value={user}
          onChange={(event) => setUser(event.target.value)}
          required
        />
        <button className='start-button nes-btn is-primary' onClick={onUserSet}>
          Start the game
        </button>
      </form>
    </div>
  );
};
