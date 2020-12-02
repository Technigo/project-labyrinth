import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { game } from '../reducers/game';
import { generateGameStart} from '../reducers/reusable';

const GameControls = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('')
    const username = useSelector(store => store.game.username)

    const onGameGenerate = () => {
        dispatch(game.actions.updateUserName(inputValue))
    }

    const updateUserName = () => {
        dispatch(game.actions.updateUserName(inputValue))
        console.log(inputValue);
    }

    const onHistoryBack = () => {
        dispatch(game.actions.historyGoBack());
    }


    return (
        <div> 
            <input
                type='text'
                placeholder='Type your username'
                value={inputValue}
                required
                onChange={e => setInputValue(e.target.value)}
                />
            <button onClick={onGameGenerate}>
                Enter
            </button>
            <button onClick={onHistoryBack}>
                Go back
            </button>
        </div>
    );
};

export default GameControls;