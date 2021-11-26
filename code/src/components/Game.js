import React from "react"
import { useSelector } from "react-redux"
import { ui } from "../reducers/ui"
import { Start } from "./Start"
import { GameBoard } from "./GameBoard"
import { LoadingIndicator } from "./LoadingIndicator"

export const Game = () => {
  const loading = useSelector((store) => store.ui.loading)
  const currentPosition = useSelector((store) => store.game.currentPosition)

  return (
    <>
      {loading && <LoadingIndicator />}
      {currentPosition ? <GameBoard /> : <Start />}
    </>
  )
}
