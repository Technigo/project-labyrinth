import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { game } from '../reducers/game';
import { startFetch } from '../reducers/reusable';

const GameContainer = () => {
    const dispatch = useDispatch();
    const gameStart = useSelector((store) => store.game.game); 
    const handleSubmit = () => {
        console.log("Click")
        dispatch(startFetch())
    }
    return (
        <div>
            
            <h2>Want to play?</h2>
            <p>{game.game}</p>
            <button onClick={handleSubmit}> Game start</button>
        </div>
    )
}

export default GameContainer;