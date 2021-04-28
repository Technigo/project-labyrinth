import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { registerNewPlayer } from 'reducers/game'
import GameBoard from './GameBoard'

const WelcomeMessage = () => {
    const userName = useSelector((store) => store.game.username)
    const dispatch = useDispatch()
    const gameStatus = useSelector((store) => store.game.gameStatus.coordinates)

    return(
        <>  
            {!gameStatus && (
                <div>
                    <p>Välkommen till Labyrinten {userName}!</p>
                    <p>Press start to enter the maze</p>
                    <button 
                        type="button"
                        onClick={() => dispatch(registerNewPlayer(userName))}>Start</button>
                </div>
            )}
            {gameStatus && <GameBoard />}
        </>
    )
}

export default WelcomeMessage;