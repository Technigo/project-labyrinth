import React from 'react';
import { useSelector } from 'react-redux';

import StartScreen from './StartScreen';
import GameScreen from './GameScreen';

const Directions = () => {
    const direction = useSelector(store => store.directions.direction);
    console.log(direction)

    return (
        <div>
            {direction
                ? <GameScreen />
                : <StartScreen />
            }

            {/* if (direction) {
                    return <GameScreen />
                } 
                return <StartScreen />
            */}
        </div>
    );
};

export default Directions;
