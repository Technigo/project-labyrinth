import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateDirection } from 'reducers/directions';

const GameScreen = () => {
    const direction = useSelector(store => store.directions.direction);

    const dispatch = useDispatch();

    const onDirectionRegenerate = (directionTag) => {
        dispatch(generateDirection(directionTag));
    };

    return (
        <div>
            <h3>Hej {direction.actions}</h3> 
            {direction.tags.map((tag) => (
                <button 
                    key={tag}
                    onClick={() => onDirectionRegenerate(tag)}
                >{tag}</button>
            ))}
        </div>
    )
};

export default GameScreen;
