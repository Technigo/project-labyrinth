import React from "react"
import Start from "./Start"
import { useSelector } from "react-redux"
import Maze from "./Maze"

const Game = () => {
  const question = useSelector((store) => store.game.question)
  //   console.log(question)

  return
  ;<div>{question ? <Maze /> : <Start />}</div>
}

export default Game
