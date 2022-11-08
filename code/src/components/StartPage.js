/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, fetchStart } from 'reducers/game';

const StartPage = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(game.actions.setUsername(username))
    dispatch(fetchStart());
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
          Write your name, adventurer!
        <input id="user-input" type="text" onChange={(e) => setUsername(e.target.value)} />
      </label>
      <button type="submit">Start</button>
    </form>
  )
}

export default StartPage;

// We need dispatch, events, onClick start-button. input for username