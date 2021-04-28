import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import game, { continueGame } from 'reducers/game'

const GameBoard = () => {
    const gameStart = useSelector((store) => store.game.gameStatus)
    const userName = useSelector((store) => store.game.username)
    const history = useSelector((store) => store.game.history)

    const dispatch = useDispatch()
    

    return (
        <>
            <h1>{gameStart.description}</h1>
                {gameStart.actions?.map((action, index) => {
                return(
                <div key={index}>
                    <div>{action.description}</div>
                    <button onClick={() => dispatch(continueGame(action.direction, userName))}>{action.direction}</button>
                    {/* <div>{action.hint}</div> vart finns hintarna?*/}
                </div>
                )
            })}
            {history.length > 1 && ( 
                <button 
                    type="button"
                    onClick={() => dispatch(game.actions.setPreviousDescription())}
                >
                    Go back
                </button>
            )}

        </>
    )
}

export default GameBoard