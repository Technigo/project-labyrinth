import React from "react"
import { useSelector } from "react-redux"

import { game } from "reducers/game"
import { Start } from "./Start"
import { Labyrinth } from "./Labyrinth"
import { LoadingItem } from "./LoadingItem"
import { Header } from "./Header"
import {Footer} from './Footer'

export const Game = () => {
    const currentPosition = useSelector(store => store.game.currentPosition)
    return (
        <>
          <Header />
          {currentPosition ? <Labyrinth /> : <Start />}
          <LoadingItem />
          <Footer />
        </>
    )
}