import React from 'react';
import { useSelector } from 'react-redux';

import StartScreen from './StartScreen';
import GameScreen from './GameScreen';
// import { Loader } from './Loader';

const Game = () => {
    const username = useSelector(store => store.game.username);

    return (
        <div>
            {username
                ? <GameScreen username={username} />
                : <StartScreen />
            }
        </div>
    );
};

export default Game;
