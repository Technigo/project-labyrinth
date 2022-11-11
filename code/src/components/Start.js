import React from 'react';
import { useDispatch } from 'react-redux';
import { game, fetchStartPosition } from '../reducers/game';

import './start.css';

// Start the game by typing a name and press start
export const Start = () => {
  const dispatch = useDispatch()

  // function for onChange
  const onPlayerInputChange = (event) => {
    dispatch(game.actions.setPlayer(event.target.value))
  }

  // function for onSubmit
  const onPlayerSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchStartPosition())
  }

  return (
    <section className="start-container">
      <div className="start-wrapper">
        <h1>Do you dare to enter the labyrinth?</h1>
        <form onSubmit={onPlayerSubmit}>
          <label htmlFor="name-input">
            <input
              className="text-field"
              type="text"
              placeholder="Type your name"
              onChange={onPlayerInputChange}
              required
              id="name-input" />
          </label>
          <button type="submit">Start game</button>
        </form>
      </div>
    </section>
  )
}