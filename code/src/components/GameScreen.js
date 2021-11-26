import React from "react"
import { useSelector } from "react-redux"
import { MainPage } from "components/Main"
// import { labyrinth } from "../reducers/labyrinth"
import { GameStart } from "components/GameStart"
import { Footer } from "./Footer"

export const GameScreen = () => {
  const username = useSelector((state) => state.labyrinth.username)

  return (
    <>
      {username ? <MainPage /> : <GameStart />}
      <Footer />
    </>
  )
}
