import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { game } from '../reducers/game';
import { StartGame } from '../reducers/fetch';

const StartControls = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.game.name)

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(StartGame(userName));
  }

  const onChangeEvent = (value) => {
    dispatch(game.actions.addUser(value));
  }

  return (
    <div>
      <p>{userName}</p>
      <form onSubmit={handleSubmit}>

        <input 
          type='text' 
          placeholder='input name' 
          onChange={event => onChangeEvent(event.target.value)}>
        </input>

        <button 
            type='submit'>
            Start the game
          </button>
      </form>
    
    </div>
  )
}

export default StartControls;