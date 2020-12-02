import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { game } from '../reducers/game';
import { StartGame } from './StartGame';


export const CreatePlayer = () => { 
  const playerName = useSelector((state)=>state.game.username)
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleCreatePlayer = (event) => { 
    setUsername(event.target.value);
  };

  const handleSubmitPlayerName = (event) => { 
    event.preventDefault();
    dispatch(game.actions.setPlayerName(username));
  };

  if (playerName) {
    return <StartGame/>
  };

  return (
    <>
    <h1>Welcome User!</h1>
    <form onSubmit={handleSubmitPlayerName}>
      <label>Create your Player</label>
      <input
        type = "text"
        value = {username}
        onChange={(event) => handleCreatePlayer(event)}
        />
    </form>
    </>
  )
}