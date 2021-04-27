import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import game, { registerNewPlayer } from 'reducers/game'

const WelcomeMessage = () => {
    const userName = useSelector((store) => store.game.username)
    const dispatch = useDispatch()

    return(
        <>
            <p>Välkommen till Labyrinten {userName}!</p>
            <p>Press start to enter the maze</p>
            <button 
                type="button"
                onClick={() => dispatch(registerNewPlayer(userName))}>Start</button>
        </>
    )
}

export default WelcomeMessage;