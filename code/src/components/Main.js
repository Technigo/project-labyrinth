import React, { useState } from "react"
import {
  fetchInitialData,
  labyrinth,
  continueLabyrinth,
} from "reducers/labyrinth"
import { useSelector, useDispatch } from "react-redux"

export const MainPage = () => {
  const [username, setUsername] = useState("")
  const loading = useSelector((state) => state.ui.loading)
  const response = useSelector((state) => state.labyrinth.response)
  const actions = useSelector((state) => state.labyrinth.response.actions)

  const dispatch = useDispatch()
  console.log(response)

  const onGameStart = () => {
    dispatch(labyrinth.actions.setusername(username))
    dispatch(fetchInitialData(username))
  }

  const onButtonClick = (type, direction) => {
    dispatch(continueLabyrinth(type, direction))
  }

  return (
    loading === false && (
      <>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={onGameStart}>Start game</button>
        </div>

        <div>{response.description}</div>
        {response.actions !== undefined && (
          <div>
            {actions.map((action) => (
              <div key={action.description}>
                <button
                  onClick={() => onButtonClick(action.type, action.direction)}
                >
                  Move {action.direction}
                </button>
                <p>{action.description}</p>
              </div>
            ))}
          </div>
        )}
      </>
    )
  )
}
