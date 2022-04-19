import React from "react"
import { useSelector } from "react-redux"

import { game } from "reducers/game"
import { Start } from "./Start"
import { Labyrinth } from "./Labyrinth"

export const Game = () => {
    const currentPosition = useSelector(store => store.game.currentPosition)
    return (
        <>
      {currentPosition ? <Labyrinth /> : <Start />}
      {/* <LoadingIndicator /> */}
    </>
    )
}