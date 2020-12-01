import React from 'react'
import { useSelector } from 'react-redux'

export const GameContainer = () => {
    const game = useSelector(store => store.game.gameinfo)

return (

    <div>{game.description}</div>
)

}