import React from "react"
import { useDispatch } from "react-redux"
import { game, fetchStartPosition } from "../reducers/game"

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
      <h1>Lets play a game</h1>
      <form onSubmit={onPlayerSubmit}>
        <label htmlFor="name-input" />
        <input
          type="text"
          onChange={onPlayerInputChange}
          required
          id="name-input"
        />
        <button type="submit">Start game</button>
      </form>
    </>
  )
}
