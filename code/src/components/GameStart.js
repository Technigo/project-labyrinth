import React, { useState } from "react"
import { fetchInitialData, labyrinth } from "reducers/labyrinth"
import { useSelector, useDispatch } from "react-redux"

export const GameStart = () => {
  const [username, setUsername] = useState("")
  const loading = useSelector((state) => state.ui.loading)
  const dispatch = useDispatch()

  const onGameStart = (event) => {
    event.preventDefault()
    if (username.length === 0) {
      alert("Please enter a username to start")
    } else {
      dispatch(labyrinth.actions.setusername(username))
      dispatch(fetchInitialData(username))
      setUsername("") // added this to clean the input box
    }
  }

  return (
    loading === false && (
      <>
        <form>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button type="submit" onClick={(event) => onGameStart(event)}>
            Start game
          </button>
        </form>
      </>
    )
  )
}
