import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import game, { continueGame } from 'reducers/game'
import LoadingIndicator from './LoadingIndicator'
import EndOfGame from './EndOfGame'

const GameBoard = () => {
    const gameStart = useSelector((store) => store.game.gameStatus.actions)
    const userName = useSelector((store) => store.game.username)
    const history = useSelector((store) => store.game.history)

    const dispatch = useDispatch()
    
    if (gameStart.length === 0) {
        return (
            <EndOfGame />
        )
    }
    return (
        <>
            <LoadingIndicator />
            <h1>{gameStart.description}</h1>
                {gameStart?.map((action, index) => {
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