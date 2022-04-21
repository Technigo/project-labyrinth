import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Labyrinth = () => {
    const labyrinth = useSelector(store => store.labyrinth.username)
    console.log(labyrinth)

    return (
        <div>
            {labyrinth
                ? <GameScreen />
                : <StartScreen />
            }
        </div>
    )
}

export default Labyrinth