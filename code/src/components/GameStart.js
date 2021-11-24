import React, { useState } from "react"
import { fetchInitialData, labyrinth } from "reducers/labyrinth"
import { useSelector, useDispatch } from "react-redux"

export const GameStart = () => {
  const [username, setUsername] = useState("")
  const response = useSelector((state) => state.labyrinth.response)
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
    <>
      {response.coordinates === undefined && (
        <form>
          <h1>
            Would you like to play a Maze game? Enter your name to start...
          </h1>

          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button type="submit" onClick={(event) => onGameStart(event)}>
            Start game
          </button>
        </form>
      )}
    </>
  )
}
