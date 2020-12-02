import React from 'react';
import { useSelector } from 'react-redux';

const GameContainer = () => {
    const game = useSelector(store => store.game.game); 

    return (
        <div>
            <h2>Want to play?</h2>
            <p>{game.game}</p>
        </div>
    )
}

export default GameContainer;