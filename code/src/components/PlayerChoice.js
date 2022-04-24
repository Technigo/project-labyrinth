import React from 'react';
import { useDispatch } from 'react-redux';
import { game, nextAction } from 'reducers/game';

const PlayerChoice = ({ action }) => {
    const dispatch = useDispatch()

    const onNextMove = () => {
        dispatch(game.actions.setType(action.type));
        dispatch(game.actions.setDirection(action.direction));
        dispatch(nextAction());
    }

    return (
        <>
            <button key={action.type}
                onClick={onNextMove}>
                {action.type} {action.direction}
            </button>
        </>
    )

}

export default PlayerChoice; 