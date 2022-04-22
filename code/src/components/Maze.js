import React from 'react';
import { useSelector } from 'react-redux';

import StartScreen from './StartScreen';
import GameScreen from './GameScreen';
import LoadingPage from './LoadingPage';

const Maze = () => {
    const isLoading = useSelector((store) => store.ui.isLoading);
    const currentLocation = useSelector(store => store.game.currentLocation);
    

    return (
        <section>
            {isLoading && <LoadingPage />}
            {!isLoading && (
            <>
            {currentLocation  
                    ? <GameScreen />
                    : <StartScreen />}
            </>)} 
        </section>
    )
};

export default Maze; 