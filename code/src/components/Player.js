import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { gameBoard } from 'reducers/game';

const Player = () => {
  const [userName, setuserName] = useState('') // data binding
  const dispatch = useDispatch();

  // eslint-disable-next-line max-len
  const onFormSubmit = (event) => { // prevent reload of page, dipstaching the game and activating username
    event.preventDefault()
    dispatch(game.actions.setUserName(userName))
    dispatch(gameBoard())
  }

  return (
    <>
      <section>
        <section className="header">
          <h1 className="h1">WELCOME</h1>
          <h2>TRIP TO MARS</h2>
        </section>
        <input
          type="text"
          className="userName"
          placeholder="Your name please"
          value={userName}
          onChange={(event) => setuserName(event.target.value)}
          required
          minLength="2" />
      </section>
      <button type="submit" onClick={(event) => onFormSubmit(event)}>ABOARD</button>
    </>
  )
}

export default Player;

