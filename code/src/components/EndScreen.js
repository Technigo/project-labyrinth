import React from 'react';
import { useDispatch } from 'react-redux'

import game from '../reducers/game'

export const EndScreen = () => {
    const dispatch = useDispatch();
    const onReset = () => {
        dispatch(game.actions.setResetGame());
      };
    return (    
        <>
            <p>Congratulations you finished the game!!!</p>
            <button class="nes-btn is-error" onClick={onReset}>
            Restart
            </button>
        </>
    )
};