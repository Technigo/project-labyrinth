import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import game, { continueGame } from 'reducers/game'

const WelcomeMessage = () => {
    const userName = useSelector((store) => store.game.username)
    const dispatch = useDispatch()

    return(
        <>
            <p>Välkommen till Labyrinten {userName}!</p>
            <p>Press start to enter the maze</p>
            <button onClick={() => continueGame(userName)}>Start</button>
        </>
    )
}

export default WelcomeMessage;