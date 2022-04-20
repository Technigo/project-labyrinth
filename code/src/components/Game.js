import React from 'react';
import { useSelector } from 'react-redux';

import StartScreen from './StartScreen';
import GameScreen from "./GameScreen";
import Loading from "./Loading";


const Game = () => {
    const username = useSelector((store) => store.game.username)
    const isLoading = useSelector((store) => store.ui.isLoading)
    
    if (isLoading === true) {
        return <Loading/>
    }
    return (
    <div>
        {username
        ? <GameScreen username={username} /> 
        : <StartScreen />}
    </div>
    )
    
}

export default Game


