import React from 'react';
import { useDispatch } from 'react-redux';

import { game } from '../reducers/game';
import { generateGameStart} from '../reducers/reusable';

const GameControls = () => {
    const dispatch = useDispatch();

    const onGameGenerate = () => {
        dispatch(generateGameStart());
    }

    const onHistoryBack = () => {
        dispatch(game.actions.historyGoBack());
    }

    return (
        <div>
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