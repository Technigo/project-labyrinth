import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { continueGame } from 'reducers/game';

const GameScreen = () => {


    const actions = useSelector(store => store.game.position.actions);
    const setDescription = useSelector(store => store.game.position.description)
    console.log(setDescription)
    console.log(actions)
 
    
    const dispatch = useDispatch();


    const onContinueGame = (type, direction) => {
        dispatch(continueGame(type, direction))
    }

    return (
        <div>
            {setDescription && <h2>{setDescription}</h2>}
            {actions && actions.map((action) => (
                <>
                <h4>{action.description}</h4>
                <button 
                    key={action.description}
                    onClick={() => onContinueGame(action.type, action.direction)}
                    >{action.direction}</button>
                </>
            ))}
        </div>
    )
};

export default GameScreen;
