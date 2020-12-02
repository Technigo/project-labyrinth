import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { game } from 'reducers/game';

export const Button = () => {
    const dispatch = useDispatch();
    const direction = useSelector(store => store.game.direction);
    
    // const generateMoveAction = () =>{
    //         dispatch(generateNewDirection());
    // } 

    return (
        direction.actions.map(a => {
            console.log(a)
            return <button>Go {a.direction}</button>
        })
    )
}