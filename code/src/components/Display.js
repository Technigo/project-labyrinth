/* import React from 'react'
import { useSelector } from 'react-redux'

import GameElements from './GameElements'
import StartGame from './StartGame'

// import { game } from '../reducers/game'

const Display = () => {
    const gameElements = useSelector(store => store.game.gameElements)
    
    return (
        <div>
            {gameElements
            ? <GameElements />
            : <StartGame  />
        }
        </div>

}

export default Display
 */