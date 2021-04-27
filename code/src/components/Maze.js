import React from 'react';
import { useSelector } from 'react-redux';

import StartScreen from './StartScreen';
import GameScreen from './GameScreen';

const Maze = () => {
    const maze = useSelector(store => store.maze.description)

    return (
        <div>
           {maze
           ? <GameScreen />
           : <StartScreen />
           } 
        </div>
    )
}

export default Maze