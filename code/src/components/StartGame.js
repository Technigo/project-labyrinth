import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, startGame } from 'reducers/quotes';

const StartGame = () => {
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch();

  const setUser = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUser(userName));
    dispatch(startGame());
  }

  return (
    <form>
      <label htmlFor="user-input">
        Type your name
        <input
          id="user-input"
          type="text"
          onChange={(event) => setUserName(event.target.value)}
          value={userName} />
      </label>
      <button
        type="submit"
        onClick={setUser}>Start game
      </button>
    </form>
  )
}

export default StartGame;