import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';

import game, { generateMaze} from 'reducers/game';


const StartScreen = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const onAuthorSet = () => {
        dispatch(game.actions.setAuthor(inputValue));
        dispatch(generateMaze());
    };

     return (
        <div>
            <p>Welcome to our Labyrinth game! What's your name?</p>
            <input 
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            />
            <button onClick={onAuthorSet}>Start the game!</button>
        </div>
    )
};

export default StartScreen;
