import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Game, startGame } from 'reducers/Game';
import { Loading } from './Loading';
import { Button } from '../styles/Button'

export const StartGame = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.game.loading);

  const onAddUsername = (event) => {
    event.preventDefault();
    dispatch(Game.actions.setUsername(inputValue));
    dispatch(startGame());
  };

  if (loading) {
    return <Loading />
  }
  return (
    <section>
      <form className="UsernameForm" onSubmit={onAddUsername}>
        <label htmlFor="usernameForm">
          <input
            id="usernameForm"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            type="text"
            required />
        </label>
        <Button
          type="submit">
          Start Game!
        </Button>
      </form>
    </section>
  )
}