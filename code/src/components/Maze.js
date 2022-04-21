import React from 'react';
import { useSelector } from 'react-redux';

import StartScreen from 'StartScreen';
import GameScreen from 'GameScreen';
import LoadingPage from 'LoadingPage';

const Maze = () => {
    const maze = useSelector(store => store.game.maze);
    const loading = useSelector((state) => state.loader.loading);

    return (
        <div>
            {loading && <LoadingPage />}
            {maze? <GameScreen />: <StartScreen />
        } 
        </div>
    )
};

export default Maze;