import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { game, fetchStartPosition } from "../reducers/game"

// startar spelet genom inmatning av namn + klicka start
export const Start = () => {
  const [userName, setUserName] = useState("")

  const dispatch = useDispatch()

  const onNameinput = () => {
    dispatch(game.actions.setUserName(userName))
    // dispatch(fetchStartPosition(userName))
  }

  // function for onChange
  const onUserNameChange = (event) => {
    setUserName(event.target.value)
  }

  console.log("USERNAME", userName)

  return (
    // onFormSubmit, uppdatera store
    <>
      <form>
        <input type="text" value={userName} onChange={onUserNameChange} />
        {/* tar oss vidare till spelet */}
        <button type="submit" onSubmit={onNameinput}>
          SUBMIT NAME
        </button>
      </form>
      <p> hello {userName}</p>
    </>
  )
}
