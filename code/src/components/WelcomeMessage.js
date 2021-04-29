import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { registerNewPlayer } from 'reducers/game'
import GameBoard from './GameBoard'

const WelcomeMessage = () => {
    const userName = useSelector((store) => store.game.username)
    const gameStatus = useSelector((store) => store.game.gameStatus.coordinates)

    const dispatch = useDispatch()
    
    return(
        <>  
            {!gameStatus && (
                <div>
                    <p>Welcome to the labyrinth {userName}!</p>
                    <p>Press start to enter:</p>
                    <button 
                        type="button"
                        onClick={() => dispatch(registerNewPlayer(userName))}
                    >
                        Start
                    </button>
                </div>
            )}
            {gameStatus && <GameBoard />}
        </>
    )
}

export default WelcomeMessage;