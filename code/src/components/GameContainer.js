import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { UserInput } from './UserInput';
import { GameControls } from './GameControls';



const GameContainer = () => {
    const dispatch = useDispatch();
    const gameStart = useSelector((store) => store.game.isGameStarted); 

    return (
        <div>
            <h2>Want to play?</h2>
            <UserInput />
            {gameStart ? <GameControls /> : <></>
        }
            
        </div>
    )
}

export default GameContainer;