import React from 'react'

import { useSelector, useDispatch } from 'react-redux'


const GameBoard = () => {
    const gameStart = useSelector((store) => store.game.gameStatus)
    return (
        <>
            {start.actions?.map((action, index) => {
                return(
                <div key={index}>
                    <div>{action.description}</div>
                    <div>{action.coordinates}</div>
                </div>
                )
            })}

        </>
    )
}

export default GameBoard