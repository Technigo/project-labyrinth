import React from "react"
import { useSelector } from "react-redux"

import Start from "./Start"
//import Maze from "./Maze"

const Game = () => {
  //const question = useSelector((store) => store.games.game)
  // const quote = useSelector(store => store.quotes.quote) Så är ser Maksys ut.
  //   console.log(question)

  //return <div>{question ? <Maze /> : <Start />}</div>
  return <Start />
}

export default Game
