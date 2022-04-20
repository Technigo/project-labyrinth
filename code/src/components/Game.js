import React from 'react';
import { useSelector } from 'react-redux';

import StartScreen from './StartScreen';
import GameScreen from "./GameScreen";


const Game = () => {
    const gameBoard = useSelector((store) => store.game.gameBoard)
    

    return (
    <div>
        {gameBoard
        ? <GameScreen /> 
        : <StartScreen />}
    </div>
    )
    
}

export default Game


