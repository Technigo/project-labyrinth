import React from "react"
import { useSelector } from "react-redux"

import Start from "./Start"
import Maze from "./Maze"

const Game = () => {
  const currentPosition = useSelector(
    (store) => store.gamereducer.currentPosition
  )

  return <>{currentPosition ? <Maze /> : <Start />}</>
}

export default Game
