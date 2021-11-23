import React from "react"
import { useSelector } from "react-redux"
import { MainPage } from "components/Main"
import { labyrinth } from "reducers/labyrinth"
import { ui } from "reducers/ui"
import { Loader } from "components/Loader"
import { GameStart } from "components/GameStart"

export const GameScreen = () => {
  const loadStart = useSelector((state) => state.labyrinth.response)
  console.log(loadStart)
  return (
    <>
      <Loader />
      {/* {loadStart === null ? <GameStart /> : <MainPage />} */}
      {/* {loadStart !== null && <MainPage />} */}
      {/* <GameStart /> */}
      <GameStart />
      <MainPage />
    </>
  )
}
