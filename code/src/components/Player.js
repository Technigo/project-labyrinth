import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { gameBoard } from 'reducers/game';

const Player = () => {
  const [authorNameInputValue, setAuthorNameInputValue] = useState('');
  const dispatch = useDispatch();
  // const author = useSelector((store) => store.quotes.author);
  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(game.actions.setUsername(authorNameInputValue));
    dispatch(gameBoard());
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="author-input">
        Welcome to the labyrinth!
        <input id="author-input" type="text" onChange={(event) => setAuthorNameInputValue(event.target.value)} />
      </label>
      <button type="submit">Start!</button>
    </form>
  )
}

export default Player;