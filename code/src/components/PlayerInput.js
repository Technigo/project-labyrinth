import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, fetchStartPosition } from 'reducers/game';
// Vi kan prova med att ha "game" inom curliesarna, rad 3. Det har vi inte nu
const PlayerInput = () => {
  const [playerInputValue, setPlayerInputValue] = useState('');
  const dispatch = useDispatch();
  // const author = useSelector((store) => store.game.author);

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(game.actions.setUsername(playerInputValue));
    dispatch(fetchStartPosition());
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="player-input">
      Enter name:
        <input id="player-input" type="text" onChange={(event) => setPlayerInputValue(event.target.value)} />
      </label>
      <button type="submit">Start game</button>
    </form>)
}

export default PlayerInput;