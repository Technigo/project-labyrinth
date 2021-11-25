import React from "react"
import { useSelector } from "react-redux"
import { MainPage } from "components/Main"
import { labyrinth } from "../reducers/labyrinth"
// import { ui } from "reducers/ui"
// import { Loader } from "components/Loader"
import { GameStart } from "components/GameStart"

export const GameScreen = () => {
  const username = useSelector((state) => state.labyrinth.username)

  return <>{username ? <MainPage /> : <GameStart />}</>
}
