import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game from 'reducers/game';

const Player = () => {
  const [userName, setuserName] = useState('') // data binding
  const dispatch = useDispatch();

  // eslint-disable-next-line max-len
  const onFormSubmit = (event) => { // prevent reload of page, dipstaching the game and activating username
    event.preventDefault()
    dispatch(game.actions.setUserName(userName))
  }

  return (
    <>
      <section>
        <h1>Welcome to the Labyrinth</h1>
        <input
          type="text"
          className="userName"
          placeholder="Your name please"
          value={userName}
          onChange={(event) => setuserName(event.target.value)}
          required
          minLength="2" />
      </section>
      <button type="submit" onClick={(event) => onFormSubmit(event)}>ENTER</button>
    </>
  )
}

export default Player;

