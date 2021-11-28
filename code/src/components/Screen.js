// GAMESCREEN to SCREEN

import React from "react"
import { useSelector } from "react-redux"
import { GamePage } from "components/GamePage"
import { StartPage } from "components/StartPage"
import { Footer } from "./Footer"

export const GameScreen = () => {
  const username = useSelector((state) => state.labyrinth.username)

  return (
    <>
      {username ? <GamePage /> : <StartPage />}
      <Footer />
    </>
  )
}
