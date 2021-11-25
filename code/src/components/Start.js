import React from "react"
import { useDispatch } from "react-redux"
import { game, fetchStartPosition } from "../reducers/game"

import "./start.css"

// startar spelet genom inmatning av namn + klicka start
export const Start = () => {
  const dispatch = useDispatch()

  // function for onChange
  const onPlayerInputChange = (event) => {
    // event.preventDefault()
    // setPlayer(event.target.value)
    dispatch(game.actions.setPlayer(event.target.value))
  }

  // function for onSubmit
  const onPlayerSubmit = (event) => {
    event.preventDefault()
    // dispatch(game.actions.setPlayer())
    dispatch(fetchStartPosition())
  }

  return (
    // onFormSubmit, uppdatera store
    <>
      <section className="start-container">
        <div className="start-wrapper">
          <h1>Let's play a game</h1>
          <form onSubmit={onPlayerSubmit}>
            <label htmlFor="name-input" />
            <input
              className="text-field"
              type="text"
              placeholder="Type your name"
              onChange={onPlayerInputChange}
              required
              id="name-input"
            />
            <button type="submit">Start game</button>
          </form>
        </div>
      </section>
    </>
  )
}
