import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { game, fetchStartPosition } from "../reducers/game"

// startar spelet genom inmatning av namn + klicka start
export const Start = () => {
  const [player, setPlayer] = useState("")
  const [error, setError] = useState(false)
  const dispatch = useDispatch()

  const onPlayerInput = (event) => {
    if (player === "") {
      setError(true)
    }
    event.preventDefault(event)
    dispatch(game.actions.setPlayer(player))
    dispatch(fetchStartPosition(player))
  }

  // function for onChange
  const onPlayerInputChange = (event) => {
    // event.preventDefault()
    setPlayer(event.target.value)
  }

  // console.log("USERNAME", player)

  return (
    // onFormSubmit, uppdatera store
    <>
      <form onSubmit={onPlayerInput}>
        <input type="text" value={player} onChange={onPlayerInputChange} />
        {/* tar oss vidare till spelet */}
        {/* <button type="submit" onSubmit={onNameinput}>
          SUBMIT NAME
        </button> */}
        <button type="onSubmit">Start game</button>
        {/* <button type="button" onClick={() => dispatch(fetchStartPosition())}>
          START THE GAME!
        </button> */}
      </form>
      <p>Welcome {player}..</p>
    </>
  )
}
