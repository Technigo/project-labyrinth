import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { continueGame } from 'reducers/game';

const GameScreen = () => {


    const actions = useSelector((store) => store.game.setPosition.actions);
    const setPosition = useSelector((store) => store.game.setPosition.description)
    
    
    const dispatch = useDispatch();


    const onContinueGame = (type, direction) => {
        dispatch(continueGame(type, direction))
    }

    return (
        <div>
            {actions.map(XX => (
                <>
                <h4>{setPosition}</h4>
                <button 
                    key={XX.description}
                    onClick={onContinueGame}
                    ></button>
                </>
            ))}
        </div>
    )
};

export default GameScreen;
