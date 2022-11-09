import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, fetchGame } from 'reducers/game';

const StartPage = () => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('');

  const onNameSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUser(userName));
    dispatch(fetchGame());
  }

  return (
    <form onSubmit={(event) => onNameSubmit(event)}>
      <label htmlFor="user-name">Enter your best gametag!
        <input
          id="user-name"
          type="text"
          onChange={(event) => setUserName(event.target.value)} />
      </label>
      <button
        type="submit"
        className="start-button">
        Start the game!!
      </button>
    </form>
  )
};

export default StartPage;