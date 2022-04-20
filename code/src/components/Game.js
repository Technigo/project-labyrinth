import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Game = () => {
    const username = useSelector(store => store.game.username)

return (
    <div>
        {username
            ? <GameScreen />
            : <StartScreen/>
        }
        </div>
) 
}

export default Game