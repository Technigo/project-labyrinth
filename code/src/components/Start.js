import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { game, fetchStartPosition } from "../reducers/game"

// startar spelet genom inmatning av namn + klicka start
export const Start = () => {
  const [player, setPlayer] = useState("")

  const dispatch = useDispatch()

  const onNameinput = (event) => {
    event.preventDefault()
    dispatch(game.actions.setPlayer(player))

    // dispatch(fetchStartPosition(userName))
  }

  // function for onChange
  const onUserNameChange = (event) => {
    // event.preventDefault()
    setPlayer(event.target.value)
  }

  console.log("USERNAME", player)

  return (
    // onFormSubmit, uppdatera store
    <>
      <form onSubmit={onNameinput}>
        <input type="text" value={player} onChange={onUserNameChange} />
        {/* tar oss vidare till spelet */}
        {/* <button type="submit" onSubmit={onNameinput}>
          SUBMIT NAME
        </button> */}
      </form>
      <p> hello {player}</p>
    </>
  )
}
