import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import { game } from '../reducers/game';
import { StartGame } from '../reducers/fetch';

const StartControls = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(StartGame(name));
  }

  const onChangeEvent = (value) => {
    setName(value);
  }

  return (
    <div>
      <p>{name}</p>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='input name' onChange={event => onChangeEvent(event.target.value)}></input>
        <button type='submit'>Start the game</button>
      </form>

    </div>
  )
}

export default StartControls;