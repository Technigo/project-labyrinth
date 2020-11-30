import React from 'react';
import { useDispatch } from 'react-redux';

import { moves } from '../reducers/moves';
import { generateNewMove } from '../reducers/reusable';

const MoveControls = () => {
    const dispatch = useDispatch();

    const onMoveGenerate = () => {
        dispatch(generateNewMove());
    }

    const onHistoryBack = () => {
        dispatch(moves.actions.historyGoBack());
    }

    return (
        <div>
            <button onClick={onMoveGenerate}>
                Generate move
            </button>
            <button onClick={onHistoryBack}>
                Go back
            </button>
        </div>
    );
};

export default MoveControls;