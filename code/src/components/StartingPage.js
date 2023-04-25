/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game } from 'reducers/game';

export const StartingPage = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(game.actions.addPlayer(username))
  }
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="usernameInput">
        <input
          id="usernameInput"
          type="text"
          placeholder="Enter your username"
          onChange={(event) => setUsername(event.target.value)}
          required />
      </label>
    </form>
  )
}