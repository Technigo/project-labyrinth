import React from "react"
import { useSelector } from "react-redux"

import { LoadingIndicator } from "./Loader"
import Start from "./Start"
import Maze from "./Maze"

const Game = () => {
  const Store = useSelector((store) => store)
  console.log(Store)
  const currentPosition = useSelector(
    (store) => store.gamereducer.currentPosition
  )

  const History = useSelector((store) => store.gamereducer.history)

  const goBack = () => {
    dispatchEvent(currentPosition.actions.setHistory())
  }

  return (
    <>
      <button disabled={!History.length} onClick={goBack}>
        Go back
      </button>
      {currentPosition ? <Maze /> : <Start />}
      <LoadingIndicator />
    </>
  )
}

export default Game
