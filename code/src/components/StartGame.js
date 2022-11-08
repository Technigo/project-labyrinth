import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game } from 'reducers/quotes';

const StartGame = () => {
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch();

  const handleSubmitName = (event) => {
    event.preventDefault();
    dispatch(game.action.setUserName(userName));
  //   dispatch(userName(username))
  }

  return (
    <form>
      <label htmlFor="user-input">
        Type your name
        <input
          id="user-input"
          type="text"
          onChange={(event) => setUserName(event.target.value)} />
      </label>
      <button
        type="submit"
        onClick={(event) => handleSubmitName(event)}>Start game
      </button>
    </form>
  )
}

export default StartGame;