import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { game, postUsername } from 'reducers/game'
// Import button + other styling elements from lib
// import styled from 'styled-components'

const StartingPage = () => {
  const [nameInput, setNameInput] = useState('')
  const dispatch = useDispatch()

  // function that dispatched usernameinput to the global state.
  const onNameInputSubmit = () => {
    // dispatch to store the name in global state
    dispatch(game.actions.setUsername(nameInput))
    // displatch to do first fetch from API
    dispatch(postUsername())
  }

  return (
    <section>
      <h1>The Labyrinth</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="username">Enter your name:
          <input
            id="username"
            type="text"
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)} />
        </label>
        <button
          type="submit"
          onClick={onNameInputSubmit}>Enter the labyrinth
        </button>
      </form>
    </section>
  );
}

export default StartingPage;