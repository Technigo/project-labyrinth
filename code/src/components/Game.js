import React from "react"
import { useSelector } from "react-redux"

// import { fetchStartPosition } from "../reducers/game"

// Hej namn, hämtar spelinformation genom map
export const Game = () => {
  const player = useSelector((store) => store.game.player)
  // const nextMove = useSelector((store) => store.game.userName.actions)

  console.log("ACTIONS", player)
  return (
    <>
      <p>{player.description}</p>

      {player.actions &&
        player.actions.map((item) => (
          <div key={item.description}>
            <p>Make your choice</p>
            <button>{item.direction}</button>
            <p>{item.description}</p>
          </div>
        ))}
    </>
  )
}
