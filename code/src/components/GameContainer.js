import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { game } from '../reducers/game';
import {gameStart } from '../reducers/reusable';

const GameContainer = () => {
    const dispatch = useDispatch();
    const gameStarted = useSelector((store) => store.game.isGameStarted); 
    const handleSubmit = (e) => {
        console.log("Click")
        dispatch(gameStart)
    }
    return (
        <div>
            {!gameStarted}
            <h2>Want to play?</h2>
            <p>{game.game}</p>
            <button onClick={handleSubmit}> Game start</button>
        </div>
    )
}

export default GameContainer;