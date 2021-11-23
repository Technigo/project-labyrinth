import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchStartPosition } from "../reducers/game"

// Hej namn, hämtar spelinformation genom map
export const Game = () => {
  const startData = useSelector((store) => store.game.userName)
  // const nextMove = useSelector((store) => store.game.userName.actions)
  const dispatch = useDispatch()
  console.log("ACTIONS", startData)
  return (
    <>
      <div>
        <button type="button" onClick={() => dispatch(fetchStartPosition())}>
          START THE GAME!
        </button>
        <p>{startData.description}</p>
        <p>Make your choice</p>
      </div>
      {startData.actions &&
        startData.actions.map((item) => (
          <div key={item.description}>
            <button>{item.direction}</button>
            <p>{item.description}</p>
          </div>
        ))}
    </>
  )
}
