import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import game, { fetchMoreData } from "../reducers/game"

const GamePage = () => {
    const position = useSelector((store) => store.game.position)
    console.log(position)
    const dispatch = useDispatch()


    return (
        <div>
            <h1>{position.description}</h1>
            <p>{position.coordinates}</p>
            {position.actions.map(item => (
                <button
                key={item.direction}
                onClick={() => dispatch(fetchMoreData({direction: item.direction}))}
                >
                    {item.direction}
                </button>
            ))}
        </div>
    )
}

export default GamePage