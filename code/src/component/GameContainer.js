import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from './Button'
import { generateNewDirection } from '../reducers/reusable';

const GameContainer = () => {
    const description = useSelector(store => store.game.description);
    const game = useSelector(store => store.game);
    const dispatch = useDispatch()

    const onGameMoveUpdate = (a) => {
        dispatch(generateNewDirection(a))
    }

    if(description) {
        return (
            <>
                <div>{game.description}</div>
                {game.direction.map(a => {
                    
                    return (
                        <button   
                            key={a.description}
                            onClick={() => onGameMoveUpdate(a)}
                            >{a.direction}
                        </button> 
                    )
                    
                })}
            </>
        ); } else {
            return <div>Play the game</div>
        }}
    ;

export default GameContainer;
