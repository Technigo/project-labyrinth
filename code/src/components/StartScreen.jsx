import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import game from '../reducers/game';
import { startGame } from '../reducers/game';

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const onUsernameInput = () => {
        dispatch(game.actions.setUsername(inputValue));
        dispatch(startGame());
    }
    
    return (
        <div>
            <p>Welcome to Labyrinth Game! Please type your gamertag</p>
            <input
                type='text'
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                />
            <button onClick={onUsernameInput}>Start the game!</button>
        </div>
    );
};

export default StartScreen;

// dispatch(directions.actions.setUsername(inputValue));
// dispatch(generateDirection);

//More accessible semantics?
{/* <form>
<label onSubmit={onFormSubmit}>
    <input
        type='text'
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
    />
</label>
<button
    type='submit'
    onClick={onUsernamSet}
    >
        Start the game!
</button>
</form> */}

  // const onFormSubmit = (event) => {
    //     event.preventDefault();
    // }










