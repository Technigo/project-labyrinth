import React from "react"
import { useSelector } from "react-redux"

import game from "../reducers/game"

import StartPage from "components/StartPage"
import GamePage from "./GamePage"

const Game = () => {
    const position = useSelector((store) => store.game.position)

    return <>{position ? <GamePage /> : <StartPage />}</>
}

export default Game
