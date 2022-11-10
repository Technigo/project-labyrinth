import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, startGame } from 'reducers/quotes';
import { Button } from './styling/MainStyles';

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
      <Button
        type="submit"
        disabled={userName.length === 0}
        onClick={setUser}> Start game
      </Button>
    </form>
  )
}

export default StartGame;