import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { startFetch } from '../reducers/gameFetch'

export const StartGame = () => {
    const userName = useSelector(store => store.gameState.userName);
    const dispatch = useDispatch();    
    
    const onGameStart = () => {
        dispatch(startFetch());
    }

    return (
        <>
            <div>Welcome {userName}! </div>
            <button onClick={onGameStart}>Start game</button>
        </>
    );
};
