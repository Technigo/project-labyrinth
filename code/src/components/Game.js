import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Game = () => {
    const description = useSelector(store => store.game.username)

return (
    <div>
        {description
            ? <GameScreen/>
            : <StartScreen/>
        }
        </div>
) 
}

export default Game